'use client'

import React, { useEffect, useState } from 'react';
import PetCard from './PetCard';
import { FaDog } from 'react-icons/fa';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import Link from 'next/link';

export default function ThirdSection() {
  const [pets, setPets] = useState([""]);
  const [error, setError] = useState(null);



  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('https://api-petsys.onrender.com/api/v1/pets');

        if (!response.ok) {
          throw new Error(`Erro ao buscar pets: ${response.statusText}`);
        }

        const data = await response.json();
        setPets(data);
      } catch (err) {
        setError(err.message);
        console.error('Erro ao buscar pets:', err);
      }
    };

    fetchPets();


  }, []);




  return (
    <>{

    }
      <section className="py-10 max-w-none bg-white w-full">
        <h2 className="text-5xl font-semibold text-gray-800 mb-8 mt-8 text-center">
          Novos no pedaço <FaDog className="inline-block text-3xl ml-2" />
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-screen-lg mx-auto">
          {pets.slice(0, 3).map((pet, index) => (
            <PetCard key={pet.pet_id || index} pet={pet} />
          ))}

        </div>

        <div className="flex justify-center mt-6">
          <Link href='/allPets'>


            <Button variant="outline" className="hover:bg-blue-200 p-6 py-7 px-7 text-xl transition duration-300 mt-7 rounded-full">
              Ver todos
            </Button>

          </Link>
        </div>

        <div className="w-1/3 h-0.5 bg-gray-300 mt-6 mx-auto"></div>

        <h2 className="text-5xl font-semibold text-gray-800 mt-16 text-center">
          Nosso Parceiros
        </h2>

        <div className='flex justify-center gap-10 my-10'>
          <div className="w-44 h-44 flex justify-center items-center">
            <Image alt='Logo Avanti' src="/images/download.png" height={150} width={150} className="object-contain" />
          </div>
          <div className="w-44 h-44 flex justify-center items-center">
            <Image alt='Logo atlântico' src="/images/Logo-atl.png" height={150} width={150} className="object-contain" />
          </div>
        </div>
      </section>
    </>
  );
}
