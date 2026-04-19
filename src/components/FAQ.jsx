import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
  const { t } = useTranslation();
  const faqsText = t('faq.list', { returnObjects: true });
  const faqs = faqsText.map((item, index) => ({ ...item, id: index + 1 }));

  const [openId, setOpenId] = useState(null);

  const toggleSection = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-m3-surface">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold text-gray-900 mb-4">
            {t('faq.title_part1')} <span className="text-m3-primary">{t('faq.title_part2')}</span>
          </h2>
          <p className="font-body text-lg text-gray-600">{t('faq.subtitle')}</p>
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
