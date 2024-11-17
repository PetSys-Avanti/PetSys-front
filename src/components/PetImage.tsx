import Image from 'next/image';
import React from 'react';

export default function PetImage({ pet }) {
  return (
    <Image
      src={pet.image}
      width={400}
      height={700}
      alt={pet.name}
      className="w-full h-auto rounded-xl shadow-md"
    />
  );
}
