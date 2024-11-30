'use client'

import { useEffect, useState, useContext } from 'react';
import { useParams } from 'next/navigation';
import { FaHeart } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { AuthContext } from '@/app/contexts/AuthContext';

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
  
  const [adotado, setAdotado] = useState({
    pet_id: '',
    adotante_id: ''

  });


  const [adotante, setAdotante] = useState<any>(null); // Alteração para garantir que adotante tenha valor
  const { user, isAuthenticated } = useContext(AuthContext);
  const router = useRouter();

  // Função para buscar os dados do pet
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


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('auth_token');
        if (!token) {
          console.log("Token não encontrado");
          router.push('/');
          return;
        }

        if (!user?.adotante_id) {
          console.log("Adotante não encontrado");
          return;
        }

        const response = await fetch(`https://api-petsys.onrender.com/api/v1/adotantes/${user.adotante_id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Erro ao buscar adotante');
        }

        const data = await response.json();
        setAdotante(data); 
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchUser();
    
  }, [isAuthenticated, router, user?.adotante_id]);

  
  const handleAdoptClick = async () => {
    try {
      const token = localStorage.getItem('auth_token');
      if (!token) {
        alert("Você precisa estar autenticado para adotar.");
        return;
      }

      if (!pet?.pet_id || !adotante?.adotante_id) {
        alert("Pet ou adotante não encontrado.");
        return;
      }

      console.log(pet.pet_id + ' ' + adotante?.adotante_id )

      const res = await fetch('https://api-petsys.onrender.com/api/v1/adocoes/', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id_pet: pet.pet_id, 
          id_adotante: adotante.adotante_id,
        }),
      });

      const data = await res.json();
      setAdotado(data);
      console.log(data);
      alert(`Você está adotando o pet ${pet?.nome}!`);
    } catch (error) {
      console.error("Erro ao adotar o pet", error);
    }
  };

  if (!pet || !adotante) {
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
          <p className="text-sm mb-1"><strong> Gênero:</strong> {pet.sexo_pet}</p>
          <p className="text-sm mb-1"><strong> Idade:</strong> {pet.data_nasc}</p>
          <p className="text-sm mb-1"><strong> Porte:</strong> {pet.tamanho_pet}</p>
          <p className="text-sm mb-2"><strong>Espécie:</strong> {pet.especie_pet}</p>
          <p className="text-sm mb-2"><strong>Personalidade:</strong> {pet.personalidade_pet}</p>
          <p className="text-sm mb-2"><strong>Status:</strong> {pet.status_pet}</p>

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
          <p className="text-lg font-serif text-gray-800 leading-relaxed h-[250px]">{pet.descricao}</p>
        </div>
      </div>
    </div>
  );
};

export default PetPage;
