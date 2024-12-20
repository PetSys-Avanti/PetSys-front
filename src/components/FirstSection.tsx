import React from 'react';
import AdoptionButtons from './AdoptionButtons';
import FullWidthImage from './ImageCentral';

export default function Center() {
  return (
    <div className="relative">
    
      <FullWidthImage />

    
      <div className="absolute top-72 left-12 bg-white bg-opacity-80 p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Salvando Pets. Juntos.</h1>
        <p className="text-lg text-gray-600 mb-8">
          Nossa comunidade PetSys é a única sem fins lucrativos voltada 100% para adoção e resgate de animais.
        </p>
        <AdoptionButtons />
      </div>
    </div>
  );
}
