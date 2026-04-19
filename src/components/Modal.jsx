import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Modal = ({ isOpen, onClose, packageData }) => {
  const { t } = useTranslation();

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden-modal');
    } else {
      document.body.classList.remove('overflow-hidden-modal');
    }
    return () => {
      document.body.classList.remove('overflow-hidden-modal');
    };
  }, [isOpen]);

  if (!isOpen || !packageData) return null;

  // Render WhatsApp URL with specific message
  const whatsappNumber = '5215512345678';
  const rawMessage = packageData
    ? t('packages.modal_whatsapp_msg', { destination: packageData.title })
    : '';
  const message = encodeURIComponent(rawMessage);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Dialog */}
      <div className="relative bg-m3-surface rounded-m3 shadow-m3-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto flex flex-col transform transition-all">
        {/* Header Image */}
        <div className="relative h-64 w-full">
          <img
            src={packageData.image}
            alt={packageData.title}
            className="w-full h-full object-cover rounded-t-m3"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col gap-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-2">
                {packageData.title}
              </h2>
              <p className="font-body text-m3-secondary font-medium flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
                {packageData.duration}
              </p>
            </div>
            <div className="text-right">
              <p className="font-body text-sm text-gray-500 uppercase tracking-wide">
                {t('packages.modal_from')}
              </p>
              <p className="font-heading text-2xl font-bold text-m3-primary">{packageData.price}</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="font-heading text-xl font-semibold mb-3">
              {t('packages.modal_includes')}
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-body text-gray-700">
              {packageData.includes.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="font-body text-gray-600 leading-relaxed">{packageData.description}</p>

          <div className="mt-4 pt-6 border-t border-gray-100 flex justify-end gap-4">
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-full font-body font-medium text-gray-600 hover:bg-gray-100 transition-colors"
            >
              {t('packages.modal_close')}
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-m3-primary hover:bg-[#8A0027] text-white px-8 py-3 rounded-full font-body font-medium shadow-m3-md hover:shadow-m3-lg transition-all flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
              {t('packages.modal_quote')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
