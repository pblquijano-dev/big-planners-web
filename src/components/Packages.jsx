import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PackageCard from './PackageCard.jsx';
import Modal from './Modal.jsx';

// Images
import cancunImg from '../assets/images/cancun.png';
import europaImg from '../assets/images/europa.png';
import peruImg from '../assets/images/peru.png';
import japonImg from '../assets/images/japon.png';

const packagesImages = [cancunImg, europaImg, peruImg, japonImg];

const Packages = () => {
  const { t } = useTranslation();
  const pkgList = t('packages.list', { returnObjects: true });
  const packagesData = pkgList.map((pkg, i) => ({ ...pkg, id: i + 1, image: packagesImages[i] }));

  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <section id="paquetes" className="py-24 bg-m3-surface-container-low">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">
            {t('packages.title_part1')}{' '}
            <span className="text-m3-primary">{t('packages.title_part2')}</span>
          </h2>
          <p className="font-body text-lg text-gray-600">{t('packages.subtitle')}</p>
        </div>

        {/* CSS Grid for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packagesData.map((pkg) => (
            <PackageCard key={pkg.id} data={pkg} onOpenModal={handleOpenModal} />
          ))}
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} packageData={selectedPackage} />
    </section>
  );
};

export default Packages;
