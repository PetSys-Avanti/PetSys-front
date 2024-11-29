import React from 'react';
import { FaDog, FaHome, FaWallet } from 'react-icons/fa';

export default function SecondSectionRE() {
  return (
    <section className="text-center max-w-4xl mx-auto mb-10 pt-16 pb-10">
      <h1 className="text-3xl font-semibold text-gray-800 mb-10">
        Nossa missão é ajudar abrigos de animais e grupos de resgate a cuidar de animais de estimação necessitados.
      </h1>
      {/* Contêiner flex que altera dependendo da tela */}
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-12 sm:space-x-12 sm:space-y-0 overflow-x-auto">
        {/* Primeiro item */}
        <div className="flex flex-col items-center p-8">
          <FaDog className="w-32 h-32 text-gray-800 mb-4" />
          <h1 className="text-2xl font-semibold text-gray-800">100,000+</h1>
          <h2 className="text-lg font-medium text-gray-600 mb-2">animais resgatados</h2>
          <p className="text-sm text-gray-500">em 2024</p>
        </div>
        {/* Divisória */}
        <div className="h-24 border-r-2 border-gray-300 mx-8 sm:mx-0"></div>
        {/* Segundo item */}
        <div className="flex flex-col items-center p-8">
          <FaHome className="w-32 h-32 text-gray-800 mb-4" />
          <h1 className="text-2xl font-semibold text-gray-800">1000+</h1>
          <h2 className="text-lg font-medium text-gray-600 mb-2">grupos de adoções</h2>
          <p className="text-sm text-gray-500">receberam nossas ajudas.</p>
        </div>
        {/* Divisória */}
        <div className="h-24 border-r-2 border-gray-300 mx-8 sm:mx-0"></div>
        {/* Terceiro item */}
        <div className="flex flex-col items-center p-8">
          <FaWallet className="w-32 h-32 text-gray-800 mb-4" />
          <h1 className="text-2xl font-semibold text-gray-800">R$ 10 milhões</h1>
          <h2 className="text-lg font-medium text-gray-600 mb-2">em dinheiro e produtos distribuídos</h2>
          <p className="text-sm text-gray-500">desde 2001</p>
        </div>
      </div>
    </section>
  );
}
