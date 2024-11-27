import Image from 'next/image'



const FullWidthImage = () => {
  return (
    <div className="relative w-full pb-[51.25%]">
      <Image
        src="/images/cachorrohumano.png"
        alt="Imagem de fundo hero"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="absolute top-0 left-0"
      />
    </div>
  )
}

export default FullWidthImage
