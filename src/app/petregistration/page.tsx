'use client'

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; 
import { FaHeart } from 'react-icons/fa';
import PetImage from '@/components/PetImage'; 

const PetPage = () => {
  const { id } = useParams();  
  const [pet, setPet] = useState<any>(null);

  //ALAN, SUBSTITUI, AQUI, NO USEEFECT, COM OS DADOS DA API
  useEffect(() => {
    if (!id) return;

    const petData = [
      { id: "1", name: "Tico", gender: "Macho", age: "Adulto", size: "Médio Porte", image: "/images/Caramelo.jpg" },
      { id: "2", name: "Teco", gender: "Macho", age: "Adulto", size: "Médio Porte", image: "/images/labrador.jpg" },
      { id: "3", name: "Barão", gender: "Macho", age: "Adulto", size: "Grande Porte", image: "/images/poodle.jpg" },
      { id: "4", name: "Duque", gender: "Macho", age: "Adulto", size: "Pequeno Porte", image: "/images/York.jpg" },
      { id: "5", name: "Toco", gender: "Macho", age: "Adulto", size: "Grande Porte", image: "/images/Pitbull.jpg" },
    ];

    const foundPet = petData.find((pet) => pet.id === id);
    setPet(foundPet);
  }, [id]);

  if (!pet) {
    return <div>Carregando...</div>; 
  }

  return (
    <div className="flex justify-start py-10 px-10">
      {/* Card de Pet */}
      <div className="flex flex-col items-center shadow-lg h-[500px] w-[320px] bg-gray-100 p-6 text-gray-800 rounded-xl relative cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-xl">

        <FaHeart
          title="Gostou de mim? ♥"
          className="absolute top-4 right-4 text-red-400 text-xl cursor-pointer transition-transform duration-200 hover:scale-110"
        />

        <div className="relative max-h-[250px] w-full rounded-xl overflow-hidden mb-4 shadow-md">
          <PetImage pet={pet} /> 
        </div>

        <div className="flex flex-col items-center text-sm text-gray-600">
          <h3 className="text-2xl font-semibold text-gray-900 mb-2">{pet.name}</h3>
          <p className="text-sm mb-1">Gênero: {pet.gender}</p>
          <p className="text-sm mb-1">Idade: {pet.age}</p>
          <p className="text-sm mb-1">Porte: {pet.size}</p>
        </div>
      </div>

    
      <div className="flex flex-col ml-8 w-[350px]">
        <div className="p-6 bg-yellow-100 rounded-xl shadow-md text-gray-800">
          <h4 className="text-lg font-semibold mb-4">Sobre o {pet.name}</h4>
          <p className="text-sm">
            {pet.name} é um animal encantador e cheio de energia. Adora brincar e interagir com as pessoas. 
            Ele é muito sociável e ama estar perto dos outros, seja em passeios ou em momentos de lazer em casa. 
            Com um temperamento amigável, é o companheiro ideal para famílias e pessoas que buscam a companhia de um pet leal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PetPage;
