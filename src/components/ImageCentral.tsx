import Image from 'next/image';

const FullWidthImage = () => {
  return (
    <div className="w-full pb-[51.25%] relative">
      <Image
        src="/images/cachorrohumano.png"
        alt="Imagem de fundo hero"
        fill // Preenche o contêiner
        style={{
          objectFit: 'cover', // Para que a imagem cubra completamente a área
          objectPosition: 'center', // Centraliza a imagem
        }}
        priority // Indicando que a imagem é prioritária
        className="absolute top-0 left-0"
      />
    </div>
  );
}

export default FullWidthImage;
