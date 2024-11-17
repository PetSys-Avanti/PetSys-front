import PetImage from './PetImage';
import { FaHeart } from 'react-icons/fa'; 
import Link from 'next/link'; 

const PetCard = ({ pet }) => {
  return (
    <Link href={`/pet/${pet.id}`}>
      <div className="flex flex-col items-center shadow-lg h-[400px] w-[280px] bg-gray-100 p-6 text-gray-800 rounded-xl relative cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-xl">
        <FaHeart 
          title="Gostou de mim? ♥" 
          className="absolute top-4 right-4 text-red-400 text-xl cursor-pointer transition-transform duration-200 hover:scale-110" 
        />
        <div className="relative max-h-[250px] w-full rounded-xl overflow-hidden mb-4 shadow-md">
          <PetImage pet={pet} />
        </div>
        <div className="flex flex-col items-center text-sm text-gray-600">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{pet.name}</h3>
          <p className="text-sm mb-1">Gênero: {pet.gender}</p>
          <p className="text-sm mb-1">Idade: {pet.age}</p>
          <p className="text-sm mb-1">Porte: {pet.size}</p>
        </div>
      </div>
    </Link>
  );
};

export default PetCard;
