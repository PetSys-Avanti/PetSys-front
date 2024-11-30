'use client';

import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { FaDog } from 'react-icons/fa';
import PetCard from '@/components/PetCard';
import Link from 'next/link';

export default function AllPetsPage() {
  const [pets, setPets] = useState<any[]>([]);  
  const [displayedPets, setDisplayedPets] = useState<any[]>([]);  
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('https://api-petsys.onrender.com/api/v1/pets');
        
        if (!response.ok) {
          throw new Error(`Erro ao buscar pets: ${response.statusText}`);
        }

        const data = await response.json();
        setPets(data);  
        
        setDisplayedPets(data.filter(pet => pet.status_pet === 'disponivel').slice(0, 4));  
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);  

  const handleLoadMore = () => {
    const nextPets = pets.filter(pet => pet.status_pet === 'disponivel')
                          .slice(displayedPets.length, displayedPets.length + 4);
    setDisplayedPets((prev) => [...prev, ...nextPets]);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl text-gray-600">Carregando pets...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl text-red-600">Erro ao carregar pets: {error}</p>
      </div>
    );
  }

  return (
    <section className="py-24 max-w-none bg-white w-full">
      <h2 className="text-5xl font-semibold text-gray-800 mb-8 mt-8 text-center">
        Todos os Pets <FaDog className="inline-block text-3xl ml-2" />
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-screen-xl mx-auto">
        {displayedPets.map((pet) => (
          <PetCard key={pet.pet_id} pet={pet} />
        ))}
      </div>

      {displayedPets.length < pets.filter(pet => pet.status_pet === 'disponivel').length && (
        <div className="flex justify-center mt-6">
          <Button
            onClick={handleLoadMore}
            variant="outline"
            className="hover:bg-blue-200 p-6 py-7 px-7 text-xl transition duration-300 mt-7 rounded-full"
          >
            Carregar Mais
          </Button>
        </div>
      )}

      <div className="w-1/3 h-0.5 bg-gray-300 mt-6 mx-auto"></div>

      <div className="flex justify-center mt-6">
        <Link href='/'>
          <Button variant="outline" className="hover:bg-blue-200 p-6 py-7 px-7 text-xl transition duration-300 mt-7 rounded-full">
            Voltar para Início
          </Button>
        </Link>
      </div>
    </section>
  );
}
