import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="h-fit bg-zinc-800 text-white px-6 py-12 md:px-20 md:pt-20 md:pb-6">
      <div>
        <p className="inline-block text-5xl">Euskadi </p>
        <p className="inline-block ml-2 text-xl">Hotel</p>
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
            <img src="images/instagram.svg"></img>
            <img src="images/facebook.svg"></img>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex mb-2">
            <img src="images/ubicacion.svg"></img>
            <p className="ml-2">Calle 22 776, General Pico, La Pampa.</p>
          </div>
          <div className="flex">
            <img src="images/telefono.svg"></img>
            <p className="ml-2">02302 42-2760</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer