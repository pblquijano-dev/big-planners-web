import React, { useState } from 'react';

const FAQ = () => {
  const faqs = [
    {
      id: 1,
      question: '¿Qué incluye cada paquete de viaje?',
      answer:
        'La mayoría de nuestros paquetes incluyen vuelos redondos, alojamiento, traslados aeropuerto-hotel, y asistencia 24/7. Sin embargo, los detalles específicos pueden variar y siempre se adaptan a tus necesidades y presupuesto.',
    },
    {
      id: 2,
      question: '¿Ofrecen opciones para personalizar mi viaje?',
      answer:
        '¡Definitivamente! En Big Planners somos expertos en viajes a la medida. Si tienes un destino o actividad específica en mente, nuestros asesores se encargarán de diseñar el itinerario perfecto exclusivo para ti.',
    },
    {
      id: 3,
      question: '¿Qué métodos de pago aceptan?',
      answer:
        'Aceptamos todas las tarjetas de crédito y débito, transferencias bancarias y depósitos en efectivo. También contamos con opciones de meses sin intereses con tarjetas participantes en paquetes seleccionados.',
    },
    {
      id: 4,
      question: '¿Qué sucede si necesito cancelar o modificar mi viaje?',
      answer:
        'Las políticas de cancelación varían según la aerolínea y el hotel seleccionado. Nuestro equipo siempre te informará sobre las políticas antes de concretar tu reserva para que tengas total tranquilidad, y te asistiremos en caso de requerir algún cambio.',
    },
    {
      id: 5,
      question: '¿Brindan asistencia durante el viaje?',
      answer:
        'Sí, todos nuestros viajeros cuentan con atención continua 24/7 a través de nuestro canal exclusivo de WhatsApp. Si surge algún imprevisto durante tu viaje, estaremos listos para apoyarte de inmediato.',
    },
  ];

  const [openId, setOpenId] = useState(null);

  const toggleSection = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-m3-surface">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">
            Preguntas <span className="text-m3-primary">Frecuentes</span>
          </h2>
          <p className="font-body text-lg text-gray-600">
            Resolvemos tus dudas principales para que solo te preocupes por empacar.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-m3 shadow-m3-sm overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleSection(faq.id)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-m3-primary focus:ring-opacity-50"
              >
                <h3 className="font-heading text-lg font-semibold text-gray-900">{faq.question}</h3>
                <svg
                  className={`w-6 h-6 text-m3-primary transform transition-transform duration-300 ${openId === faq.id ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${openId === faq.id ? 'max-h-96 opacity-100 py-6' : 'max-h-0 opacity-0 overflow-hidden'}`}
              >
                <div className="px-6 font-body text-gray-600 leading-relaxed">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
