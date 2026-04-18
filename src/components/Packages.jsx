import React, { useState } from 'react';
import PackageCard from './PackageCard.jsx';
import Modal from './Modal.jsx';

// Images
import cancunImg from '../assets/images/cancun.png';
import europaImg from '../assets/images/europa.png';
import peruImg from '../assets/images/peru.png';
import japonImg from '../assets/images/japon.png';

const packagesData = [
  {
    id: 1,
    title: 'Paraíso en Cancún',
    duration: '6 Días / 5 Noches',
    price: '$899 USD',
    image: cancunImg,
    shortDescription:
      'Disfruta de hermosas playas de arena blanca, aguas turquesas cristalinas y la vida nocturna más vibrante del Caribe mexicano.',
    description:
      'Cancún es mucho más que un destino de playa. Este paquete te ofrece una experiencia todo incluido en uno de los mejores resorts de la zona hotelera. Descansa frente al mar Caribe, disfruta de gastronomía internacional, o aventúrate a los cenotes y ruinas mayas cercanas.',
    includes: [
      'Vuelo redondo',
      'Hotel 5 estrellas All-Inclusive',
      'Traslados Aeropuerto-Hotel',
      'Tour a Isla Mujeres',
      'Seguro de viaje básico',
    ],
  },
  {
    id: 2,
    title: 'Europa Clásica',
    duration: '15 Días / 14 Noches',
    price: '$2,450 USD',
    image: europaImg,
    shortDescription:
      'Un recorrido mágico por las capitales más emblemáticas: París, Roma, Venecia, Madrid y Londres, con guías en español.',
    description:
      'El viaje que todos deben hacer al menos una vez en la vida. Pasea por los Campos Elíseos en París, navega en las góndolas de Venecia, y maravíllate con el Coliseo en Roma. Todo en un recorrido perfectamente orquestado para que solo te preocupes por disfrutar.',
    includes: [
      'Vuelos intercontinentales',
      'Trenes de alta velocidad TGV/Eurostar',
      'Hoteles céntricos 4 estrellas',
      'Desayuno buffet diario',
      'Entradas a museos principales',
      'Guía acompañante en español',
    ],
  },
  {
    id: 3,
    title: 'Aventura en Machu Picchu',
    duration: '7 Días / 6 Noches',
    price: '$1,200 USD',
    image: peruImg,
    shortDescription:
      'Conecta con la historia en una expedición inolvidable por Cuzco, el Valle Sagrado y la majestuosa ciudadela Inca.',
    description:
      'Vive la magia de los Andes peruanos. Este recorrido cultural y de aventura te llevará desde la capital histórica, Cuzco, a través del colorido Valle Sagrado de los Incas, culminando con el impresionante amanecer en Machu Picchu. Incluye viaje en tren panorámico.',
    includes: [
      'Vuelo desde Lima a Cuzco',
      'Alojamiento en hoteles boutique',
      'Tren panorámico Vistadome',
      'Boleto de ingreso a Machu Picchu',
      'Guía experto local',
    ],
  },
  {
    id: 4,
    title: 'Esencia de Japón',
    duration: '12 Días / 11 Noches',
    price: '$3,100 USD',
    image: japonImg,
    shortDescription:
      'Descubre el contraste fascinante entre la tecnología futurista de Tokio y las tradiciones ancestrales de Kioto.',
    description:
      'Un viaje que despierta todos los sentidos. Experimenta el ajetreo de Shinjuku en Tokio, relájate en las aguas termales (onsen) tradicionales con vista al Monte Fuji, y pasea bajo los cerezos o las hojas de otoño en los históricos templos de Kioto y Nara.',
    includes: [
      'Vuelos redondo internacional',
      'Japan Rail Pass de 7 días',
      'Alojamiento combinado (Hoteles y 1 noche en Ryokan)',
      'Ceremonia del té en Kioto',
      'WiFi de bolsillo ilimitado',
    ],
  },
];

const Packages = () => {
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
    <section id="paquetes" className="py-24 bg-m3-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">
            Paquetes <span className="text-m3-primary">Destacados</span>
          </h2>
          <p className="font-body text-lg text-gray-600">
            Hemos seleccionado cuidadosamente las mejores experiencias alrededor del mundo. Elige tu
            próximo destino o contáctanos para armar un viaje a tu medida.
          </p>
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
