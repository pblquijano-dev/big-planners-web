import React from 'react';
import { useTranslation } from 'react-i18next';

const Loader = ({ show }) => {
  const { t } = useTranslation();

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-[#122227] via-[#214048] to-[#3a5860] transition-all duration-700 ease-in-out ${
        show ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Animated Double Ring Spinner */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-4 border-t-m3-primary-container border-r-transparent border-b-transparent border-l-transparent animate-spin duration-[1.5s]"></div>
          {/* Inner ring (reverse spin) */}
          <div className="absolute w-16 h-16 rounded-full border-4 border-b-white border-t-transparent border-r-transparent border-l-transparent reverse-spin"></div>
          {/* Center pulsing dot */}
          <div className="w-8 h-8 rounded-full bg-m3-primary-container animate-ping opacity-75"></div>
        </div>

        {/* Brand Text */}
        <div className="text-center">
          <p className="font-body text-sm text-m3-primary-container mt-2 tracking-wide font-medium">
            {t('loading.message')}
          </p>
        </div>
      </div>

      <style>{`
        @keyframes reverse-spin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .reverse-spin {
          animation: reverse-spin 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Loader;
