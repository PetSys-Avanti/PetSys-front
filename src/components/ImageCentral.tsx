import Image from 'next/image';

const FullWidthImage = () => {
  return (
    <div className="w-full pb-[51.25%] relative">
      <Image
        src="/images/cachorrohumano.png"
        alt="Imagem de fundo hero"
        fill 
        style={{
          objectFit: 'cover', 
          objectPosition: 'center', 
        }}
        priority 
        className="absolute top-0 left-0"
      />
    </div>
  );
}

export default FullWidthImage;
