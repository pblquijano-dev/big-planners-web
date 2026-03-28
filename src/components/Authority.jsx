import React from 'react';

const Authority = () => {
  const stats = [
    {
      id: 1,
      number: '15+',
      title: 'Años de Experiencia',
      description: 'Llevando sueños y aventuras alrededor del globo.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-m3-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 2,
      number: '10K+',
      title: 'Viajeros Felices',
      description: 'Garantía de satisfacción y sonrisas en cada vuelo.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-m3-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 3,
      number: '24/7',
      title: 'Atención Continua',
      description: 'Soporte ininterrumpido en cada paso de tu aventura.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-m3-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      id: 4,
      number: 'IATA',
      title: 'Agencia Certificada',
      description: 'Cumplimos con estrictos estándares internacionales de turismo.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-m3-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir <span className="text-m3-primary">Big Planners</span>?
          </h2>
          <p className="font-body text-lg text-gray-600">
            Nuestra promesa es convertir tu viaje soñado en una realidad sin estrés, con respaldo humano y profesional 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center text-center p-8 rounded-m3 hover:bg-m3-surface transition-colors duration-300">
              <div className="bg-m3-primary-container p-4 rounded-full mb-6 text-m3-primary shadow-m3-sm">
                {stat.icon}
              </div>
              <h3 className="font-heading text-4xl font-bold text-m3-primary mb-2 tracking-tight">
                {stat.number}
              </h3>
              <h4 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                {stat.title}
              </h4>
              <p className="font-body text-gray-600 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Authority;
