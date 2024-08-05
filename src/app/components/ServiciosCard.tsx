import Image from "next/image"
import { greatVibes, workSans } from "../styles/fonts"

const ServiciosCard = ({ urlImage, altImage, title }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative h-[300px] w-[250px] md:w-[450px] lg:w-[300px]">
        <Image 
          src={urlImage}
          alt={altImage}
          style={{ borderRadius: 20 }}
          fill
          className="object-cover"
        />
      </div>
      <h3 className={`${greatVibes.className}  font-semibold text-2xl mb-2 mt-4`}>{title}</h3>
      <p className={`font-light`}>Lorem ipsum dolor sit amet, <br/> consectetur ad piscing elit, <br/> sed do eiusmod </p>
    </div>
  )
}

export default ServiciosCard