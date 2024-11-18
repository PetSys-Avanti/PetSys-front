import Image from 'next/image'
import CachorroHumano from '../app/public/images/cachorrohumano.png'


interface FullWidthImageProps {
  src: string
  alt: string
  width: number
  height: number
}

const FullWidthImage = () => {
  return (
    <div className="relative w-full h-0 pb-[51.25%]">
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
