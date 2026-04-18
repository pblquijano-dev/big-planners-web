import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'María Fernández',
      destination: 'Viajó a París',
      quote:
        'Increíble servicio. No tuve que preocuparme por nada, Big Planners organizó todo al detalle y mi luna de miel fue perfecta. El hotel que eligieron fue mágico.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Carlos Mendoza',
      destination: 'Viajó a Tokio',
      quote:
        'Siempre quise ir a Japón pero armar el viaje se sentía abrumador. Con ellos fue súper sencillo. Los traslados y guías locales fueron de primer nivel. ¡Totalmente recomendados!',
      rating: 5,
    },
    {
      id: 3,
      name: 'Familia Salazar',
      destination: 'Viajó a Cancún',
      quote:
        'Un viaje en familia inolvidable. Lograron encontrar el balance perfecto entre descanso y actividades para los niños. El precio excelente por todo lo incluido.',
      rating: 5,
    },
  ];

  // Helper to render stars
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="testimonios" className="py-24 bg-m3-surface relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-m3-primary-container rounded-full opacity-30 mix-blend-multiply blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">
            Viajeros con <span className="text-m3-primary">Historias</span>
          </h2>
          <p className="font-body text-lg text-gray-600">
            La sonrisa de nuestros clientes al volver a casa es nuestra mayor recompensa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="bg-white border border-m3-outline/20 rounded-m3 p-8 shadow-m3-sm hover:shadow-m3-md transition-shadow group relative"
            >
              {/* Quote icon watermark */}
              <div className="absolute top-4 right-6 text-7xl text-gray-100 font-heading opacity-50 font-black">
                "
              </div>

              <div className="flex mb-4">{renderStars(test.rating)}</div>

              <blockquote className="font-body text-gray-700 italic mb-6 relative z-10">
                "{test.quote}"
              </blockquote>

              <div className="flex items-center gap-4 border-t border-gray-100 pt-4">
                <div className="w-12 h-12 bg-m3-primary-container rounded-full flex items-center justify-center text-m3-primary font-heading font-bold text-lg uppercase shadow-m3-sm">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-gray-900">{test.name}</h4>
                  <p className="font-body text-sm text-m3-secondary">{test.destination}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
