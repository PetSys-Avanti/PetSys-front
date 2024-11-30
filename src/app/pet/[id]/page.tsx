'use client'

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { FaHeart } from 'react-icons/fa';

interface Pet {
  pet_id: number;
  nome: string;
  especie_pet: string;
  data_nasc: string;
  descricao: string; 
  tamanho_pet: string;
  sexo_pet: string;
  image_pet: string;
  personalidade_pet: string;
  status_pet: string;
}

const PetPage = () => {
  const { id } = useParams();
  const [pet, setPet] = useState<Pet | null>(null);

  const fetchPetData = async () => {
    const response = await fetch(`https://api-petsys.onrender.com/api/v1/pets/${id}`);
    const data = await response.json();
    setPet(data);
  };

  useEffect(() => {
    if (id) {
      fetchPetData();
    }
  }, [id]);

  const handleAdoptClick = () => {
    alert(`Você está adotando o pet ${pet?.nome}!`);
  };

  if (!pet) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="flex h-screen w-full justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center shadow-lg h-[500px] w-[320px] bg-gray-100 p-6 text-gray-800 rounded-xl relative cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-xl">
        <FaHeart
          title="Gostou de mim? ♥"
          className="absolute top-4 right-4 text-red-400 text-xl cursor-pointer transition-transform duration-200 hover:scale-110"
        />

        <div className="relative max-h-[250px] w-full rounded-xl overflow-hidden mb-4 shadow-md">
          {pet.image_pet ? (
            <img
              src={pet.image_pet || undefined} 
              width={400}
              height={700}
              alt="Imagem do pet"
              className="w-full h-auto rounded-xl shadow-md"
            />
          ) : (
            <div className="w-full h-[250px] bg-gray-300 rounded-xl flex items-center justify-center">
              <span>Imagem não disponível</span>
            </div>
          )}
        </div>

        <div className="flex flex-col items-center text-sm text-gray-600">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{pet.nome}</h3>
          <p className="text-sm mb-1"> <strong> Gênero:</strong>  {pet.sexo_pet}</p>
          <p className="text-sm mb-1"><strong> Idade:</strong>  {pet.data_nasc}</p>
          <p className="text-sm mb-1"><strong> Porte:</strong>  {pet.tamanho_pet}</p>
          <p className="text-sm mb-2">
            <strong>Espécie:</strong> {pet.especie_pet}
          </p>
          <p className="text-sm mb-2">
            <strong>Personalidade:</strong> {pet.personalidade_pet}
          </p>
          <p className="text-sm mb-2">
            <strong>Status:</strong> {pet.status_pet}
          </p>

          <button
            onClick={handleAdoptClick}
            className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
          >
            Adotar {pet.nome}
          </button>
        </div>
      </div>

      <div className="flex flex-col ml-8 w-[350px]">
        <div className="p-6 bg-yellow-100 rounded-xl shadow-md text-gray-800">
          <h4 className="text-lg font-semibold mb-4 text-gray-900">Sobre o {pet.nome}</h4>
          <p className="text-lg font-serif text-gray-800 leading-relaxed h-[250px]"> 
            {pet.descricao}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PetPage;
