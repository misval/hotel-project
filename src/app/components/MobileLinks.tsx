import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { greatVibes } from "../styles/fonts"

const NavBarMobile = ({ isOpen , onClose }) => {
  return (
    <div className={`fixed flex flex-col justify-center items-center z-100 top-0 right-0 h-screen w-full bg-white text-black transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>      
      <button className="absolute right-6 top-6" onClick={onClose}>
        <FontAwesomeIcon className="text-5xl" icon={faXmark}/>
      </button>
      
      <ul className={`flex flex-col justify-center items-center space-y-4`}>
        <li><Link className={`${greatVibes.className} text-2xl`} href='/habitaciones'>Habitaciones</Link></li>
        <li><Link className={`${greatVibes.className} text-2xl`} href='/contacto'>Contacto</Link></li>
        <li><a className={`${greatVibes.className} text-2xl`} href="https://google.com">Como llegar</a></li>
        <li><Link className={`${greatVibes.className} text-2xl`} href='/reservaciones'>Hacer reservacion</Link></li>
      </ul>  
    </div>
    
  )
}

export default NavBarMobile