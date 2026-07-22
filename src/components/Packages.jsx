import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PackageCard from './PackageCard.jsx';
import Modal from './Modal.jsx';
import ScrollReveal from './ScrollReveal.jsx';

// Images
import cancunImg from '../assets/images/cancun.webp';
import europaImg from '../assets/images/europa.webp';
import peruImg from '../assets/images/peru.webp';
import japonImg from '../assets/images/japon.webp';

const packagesImages = [cancunImg, europaImg, peruImg, japonImg];

const Packages = () => {
  const { t } = useTranslation();
  const pkgList = t('packages.list', { returnObjects: true });
  const packagesData = pkgList.map((pkg, i) => ({ ...pkg, id: i + 1, image: packagesImages[i] }));

  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (
      typeof navigator !== 'undefined' &&
      navigator.modelContext &&
      navigator.modelContext.registerTool
    ) {
      let unregisterGetPackages = null;
      let unregisterGetQuote = null;
      try {
        const reg1 = navigator.modelContext.registerTool({
          name: 'get_packages',
          description:
            'Obtiene la lista completa de paquetes turísticos disponibles con sus precios, duración y qué incluyen.',
          inputSchema: { type: 'object', properties: {} },
          execute: async () => {
            const list = packagesData.map((pkg) => ({
              id: pkg.id,
              title: pkg.title,
              duration: pkg.duration,
              price: pkg.price,
              includes: pkg.includes,
              description: pkg.description,
            }));
            return {
              content: [{ type: 'text', text: JSON.stringify(list, null, 2) }],
            };
          },
        });
        if (typeof reg1 === 'function') unregisterGetPackages = reg1;
        else if (reg1 && typeof reg1.unregister === 'function')
          unregisterGetPackages = () => reg1.unregister();

        const reg2 = navigator.modelContext.registerTool({
          name: 'get_package_quote_link',
          description:
            'Obtiene el enlace directo de WhatsApp para cotizar un paquete turístico específico por su título.',
          inputSchema: {
            type: 'object',
            properties: {
              destinationTitle: {
                type: 'string',
                description:
                  'El nombre o título del paquete de viaje (ej. Cancún, Europa, Japón o Perú)',
              },
            },
            required: ['destinationTitle'],
          },
          execute: async ({ destinationTitle }) => {
            const pkg = packagesData.find((p) =>
              p.title.toLowerCase().includes(destinationTitle.toLowerCase())
            );
            if (!pkg) {
              return {
                content: [
                  {
                    type: 'text',
                    text: JSON.stringify({
                      error: `No se encontró el paquete turístico: ${destinationTitle}`,
                    }),
                  },
                ],
              };
            }
            const whatsappNumber = '5215512345678';
            const rawMessage = t('packages.modal_whatsapp_msg', { destination: pkg.title });
            const message = encodeURIComponent(rawMessage);
            const result = {
              destination: pkg.title,
              whatsappUrl: `https://wa.me/${whatsappNumber}?text=${message}`,
              message: rawMessage,
            };
            return {
              content: [{ type: 'text', text: JSON.stringify(result, null, 2) }],
            };
          },
        });
        if (typeof reg2 === 'function') unregisterGetQuote = reg2;
        else if (reg2 && typeof reg2.unregister === 'function')
          unregisterGetQuote = () => reg2.unregister();
      } catch (error) {
        console.error('Error al registrar herramientas WebMCP:', error);
      }

      return () => {
        if (unregisterGetPackages) unregisterGetPackages();
        if (unregisterGetQuote) unregisterGetQuote();
      };
    }
  }, [packagesData, t]);

  const handleOpenModal = (pkg) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Slight delay before clearing data to allow exit animation if we add one in the future
    setTimeout(() => setSelectedPackage(null), 300);
  };

  return (
    <section id="packages" className="py-24 bg-m3-surface-container-low">
      <div className="container mx-auto px-6">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">
              {t('packages.title_part1')}{' '}
              <span className="text-m3-primary">{t('packages.title_part2')}</span>
            </h2>
            <p className="font-body text-lg text-gray-600">{t('packages.subtitle')}</p>
          </div>
        </ScrollReveal>

        {/* CSS Grid for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packagesData.map((pkg, index) => (
            <ScrollReveal key={pkg.id} animation="fade-up" delay={index * 150} className="h-full">
              <PackageCard data={pkg} onOpenModal={handleOpenModal} />
            </ScrollReveal>
          ))}
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} packageData={selectedPackage} />
    </section>
  );
};

export default Packages;
