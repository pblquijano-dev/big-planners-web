import React from 'react';

const PackageCard = ({ data, onOpenModal }) => {
  return (
    <div 
      className="bg-white rounded-m3 shadow-m3-sm hover:shadow-m3-xl transition-all duration-300 overflow-hidden cursor-pointer group flex flex-col h-full"
      onClick={() => onOpenModal(data)}
    >
      {/* Image container with zoom effect on hover */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={data.image} 
          alt={data.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-m3-surface text-m3-primary font-heading font-bold px-4 py-1.5 rounded-full shadow-sm">
          {data.price}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-heading text-2xl font-bold text-gray-900 mb-2 group-hover:text-m3-primary transition-colors">
          {data.title}
        </h3>
        
        <p className="font-body text-sm text-m3-secondary font-medium mb-4 flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          {data.duration}
        </p>
        
        <p className="font-body text-gray-600 line-clamp-3 mb-6 flex-grow">
          {data.shortDescription}
        </p>
        
        <button 
          className="mt-auto w-full py-3 rounded-full border border-m3-outline text-m3-primary font-body font-medium hover:bg-m3-primary-container hover:border-transparent transition-colors"
        >
          Ver Detalles
        </button>
      </div>
    </div>
  );
};

export default PackageCard;
