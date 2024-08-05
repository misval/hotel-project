import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { greatVibes } from "../styles/fonts";

const Footer = () => {
  return (
    <div className={`h-fit bg-zinc-800 text-white px-6 py-12 md:px-20 md:pt-20 md:pb-6`}>
      <div>
        <p className={`${greatVibes.className} inline-block text-5xl`}>Lorem</p>
        <p className={`${greatVibes.className} inline-block ml-2 text-xl`}>Hotel</p>
      </div>
      <div>
        <div className="flex flex-col text-right mt-6 space-y-3">
          <Link href="/">
            Habitaciones
            <FontAwesomeIcon className="text-md rotate-[315deg] ml-1" icon={faArrowRight} color="white"/>
          </Link>
          <Link href="/">
            Como llegar
            <FontAwesomeIcon className="text-md rotate-[315deg] ml-1" icon={faArrowRight} color="white"/>
          </Link>
          <Link href="/">
            Contacto
            <FontAwesomeIcon className="text-md rotate-[315deg] ml-1" icon={faArrowRight} color="white"/>
          </Link>
          <Link href="/">
            Hacer Reservacion
            <FontAwesomeIcon className="text-md rotate-[315deg] ml-1" icon={faArrowRight} color="white"/>
          </Link>
        </div>  
        <div>
          <div className="flex justify-end mt-8">
            <Image src="images/instagram.svg" alt="Instagram Icon" width={25} height={25}></Image>
            <Image src="images/facebook.svg" alt="Facebook Icon" width={25} height={25}></Image>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex mb-2">
            <Image src="images/ubicacion.svg" alt="Icono de ubicacion" width={20} height={20}></Image>
            <p className="ml-2">Calle 102 1231, General Pico, La Pampa.</p>
          </div>
          <div className="flex">
            <Image src="images/telefono.svg" alt="Icono de telefono" width={20} height={20}></Image>
            <p className="ml-2">02302 12-3456</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer