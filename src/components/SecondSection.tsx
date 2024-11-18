import React from 'react';
import PetCard from './PetCard';
import { FaDog } from 'react-icons/fa';
import { Button } from "@/components/ui/button";  // Certifique-se de que o caminho está correto.
import Image from 'next/image';


export default function SecondSection() {

  const forAddotion = [
    {
      image: "/images/Caramelo.jpg",
      id: "1",
      name: "Tico",
      gender: "Macho",
      age: "Adulto",
      size: "Médio Porte",
    },
    {
      image: "/images/labrador.jpg",
      id: "2",
      name: "Teco",
      gender: "Macho",
      age: "Adulto",
      size: "Médio Porte",
    },
    {
      image: "/images/poodle.jpg",
      id: "3",
      name: "Barão",
      gender: "Macho",
      age: "Adulto",
      size: "Grande Porte",
    },
    {
      image: "/images/York.jpg",
      id: "4",
      name: "Duque",
      gender: "Macho",
      age: "Adulto",
      size: "Pequeno Porte",
    },
    {
      image: "/images/Pitbull.jpg",
      id: "5",
      name: "Toco",
      gender: "Macho",
      age: "Adulto",
      size: "Grande Porte",
    },
  ];

  return (
    <section className="py-10 max-w-none bg-white w-full">

      <h2 className="text-5xl font-semibold text-gray-800 mb-8 mt-8 text-center">
        Novos no pedaço <FaDog className="inline-block text-3xl ml-2" />
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-screen-lg mx-auto">
        {forAddotion.slice(0, 3).map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <Button variant="outline" className="hover:bg-blue-200 p-6 py-7 px-7 text-xl transition duration-300 mt-7 rounded-full">
          Ver todos
        </Button>
      </div>

      <div className="w-1/3 h-0.5 bg-gray-300 mt-6 mx-auto"></div>

      <h2 className="text-5xl font-semibold text-gray-800 mt-16 text-center">
        Nosso Parceiros
      </h2>

      <div className='flex justify-center gap-10 my-10'>
        <div className="w-44 h-44 flex justify-center items-center">
          <Image src="/images/download.png" height={150} width={150} alt='Logo Avanti' className="object-contain"/>
        </div>
        <div className="w-44 h-44 flex justify-center items-center">
          <Image src="/images/Logo-atl.png" height={150} width={150} alt='Logo Atlântico' className="object-contain"/>
        </div>
      </div>
    </section>
  );
}
