'use client'

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';  // Alteração aqui
import { FaHeart } from 'react-icons/fa';
import Image from 'next/image';


const PetPage = () => {

  const {id} = useParams()
  const [pet, setPet] = useState()

  
  const fetchPetData = async ( ) =>{
    const response = await fetch(`https://api-petsys.onrender.com/api/v1/pets/${id}`)
    const data = await response.json();
 
    setPet(data)
 
  }

  useEffect(() => {
    if (id) {
      fetchPetData();
    }
  }, [id]);  

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
          <Image
            src={pet.image}
            width={400}
            height={700}
            alt="Imagem pet"
            className="w-full h-auto rounded-xl shadow-md"
          />
        </div>
        <div className="flex flex-col items-center text-sm text-gray-600">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{pet.nome}</h3>
          <p className="text-sm mb-1">Gênero: {pet.sexo_pet}</p>
          <p className="text-sm mb-1">Idade: {pet.data_nasc}</p>
          <p className="text-sm mb-1">Porte: {pet.tamanho_pet}</p>
        </div>
      </div>

      <div className="flex flex-col ml-8 w-[350px]">
        <div className="p-6 bg-yellow-100 rounded-xl shadow-md text-gray-800">
          <h4 className="text-lg font-semibold mb-4">Sobre o {pet.nome}</h4>
          <p className="text-sm">
            {pet.nome} é um animal encantador e cheio de energia. Adora brincar e interagir com as pessoas.
            Ele é muito sociável e ama estar perto dos outros, seja em passeios ou em momentos de lazer em casa.
            Com um temperamento amigável, é o companheiro ideal para famílias e pessoas que buscam a companhia de um pet leal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PetPage;
