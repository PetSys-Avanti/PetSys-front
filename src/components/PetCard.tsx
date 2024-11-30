import { FaHeart } from 'react-icons/fa';
import Link from 'next/link';

interface Pet {
  pet_id: number;
  image_pet: string;
  nome: string;
  sexo_pet: string;
  data_nasc: string;
  tamanho_pet: string;
}

const PetCard = ({ pet }: { pet: Pet }) => {

  function calcularIdade(dataNasc: string): number {
    const hoje = new Date(); 
    const nascimento = new Date(dataNasc); 

    let idade = hoje.getFullYear() - nascimento.getFullYear(); 


    const mesAtual = hoje.getMonth();
    const mesNascimento = nascimento.getMonth();
    const diaAtual = hoje.getDate();
    const diaNascimento = nascimento.getDate();

    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
      idade--; 
    }

    return idade;
  }


  const idadePet = calcularIdade(pet.data_nasc);

  const statusPet = idadePet < 3 ? 'Filhote' : 'Adulto';

  return (
    <Link href={`/pet/${pet.pet_id}`}>
      <div className="flex flex-col items-center shadow-lg h-[400px] w-[280px] bg-gray-100 p-6 text-gray-800 rounded-xl relative cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-xl">
        <FaHeart
          title="Gostou de mim? ♥"
          className="absolute top-4 right-4 text-red-400 text-xl cursor-pointer transition-transform duration-200 hover:scale-110"
        />
        <div className="relative max-h-[250px] w-full rounded-xl overflow-hidden mb-4 shadow-md">
          {pet.image_pet ? (
            <img
              src={pet.image_pet}
              alt="Imagem pet"
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
          <p className="text-sm mb-1">Gênero: {pet.sexo_pet}</p>
          <p className="text-sm mb-1">Idade: {statusPet} anos</p>
          <p className="text-sm mb-1">Status: {pet.status_pet} </p> 
          <p className="text-sm mb-1">Porte: {pet.tamanho_pet}</p>
        </div>
      </div>
    </Link>
  );
};

export default PetCard;
