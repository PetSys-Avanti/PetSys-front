'use client';

import React from 'react';
import { FaHeart, FaBullhorn } from 'react-icons/fa';
import { useRouter } from 'next/navigation'; 

const AdoptionButtons = () => {
  const router = useRouter(); 

  const handleAdoptClick = () => {
    const middleOfPage = document.documentElement.scrollHeight / 2;
    window.scrollTo({
      top: middleOfPage,
      behavior: 'smooth', 
    });
  };

  const handlePromoteClick = () => {
    router.push('/petregistration'); 
  };

  return (
    <div className="flex justify-center my-5 space-x-2">
      <button 
        onClick={handleAdoptClick} 
        className="bg-[#4a90e2] text-white border-none rounded-md py-3 px-10 text-lg flex items-center space-x-2 hover:bg-[#3a7dd1] transition-colors"
      >
        <FaHeart />
        <span>Quero adotar um pet</span>
      </button>
      <button 
        onClick={handlePromoteClick} 
        className="bg-transparent text-[#4a90e2] border-2 border-[#4a90e2] rounded-md  py-3 px-10 text-lg flex items-center space-x-2 hover:bg-[#4a90e2] hover:text-white transition-all"
      >
        <FaBullhorn />
        <span>Quero divulgar um pet</span>
      </button>
    </div>
  );
};

export default AdoptionButtons;
