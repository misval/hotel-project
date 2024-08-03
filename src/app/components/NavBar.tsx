'use client'

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect} from "react";
import MobileLinks from "@/app/components/MobileLinks";
import MobileMenuButton from "@/app/components/MobileMenuButton";
import LogoEuskadiBlack from '@/../public/images/logo-hotel-euskadi.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  // for mobile handle mobile navbar toggle
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleNavBarToggle = () => {
    setIsNavBarOpen(!isNavBarOpen);
  }

  return (
    <nav className={`fixed z-100 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-white-100 backdrop-blur-md text-white' 
        : 'bg-transparent text-white'
    }`}>      
      {/* Desktop navigation */}
      <div className="hidden relative mt-6 ml-20 mb-6 sm:flex flex-col justify-center">
        <div className="flex items-center justify-between">
          <Link href='/'>
            <Image src={LogoEuskadiBlack} alt="Logo hotel euskadi" width={40} height={40} />
          </Link>
          <ul className="flex last:mr-20">
            <li className="mr-6"><Link href='/habitaciones'>Habitaciones</Link></li>
            <li className="mr-6"><Link href='/contacto'>Contacto</Link></li>
            <li className="mr-6">
              <a href="https://google.com">Como llegar</a>
              <FontAwesomeIcon className="text-sm ml-2" icon={faArrowRight} color="white" width={20} height={20}/>
            </li>
            <li>
              <Link href='/reservaciones'>Reservar</Link>
              <FontAwesomeIcon className="text-sm ml-2" icon={faArrowRight} color="white" width={20} height={20}/>
            </li>
          </ul>
        </div>
      </div>  

      {/* Mobile navigation */}
      <div className="sm:hidden relative flex flex-row m-6">
        <Link href='/'>
          <Image src={LogoEuskadiBlack} alt="Logo hotel euskadi" width={40} height={40} />
        </Link>
        <MobileMenuButton onClick={handleNavBarToggle} />
        <MobileLinks isOpen={isNavBarOpen} onClose={handleNavBarToggle}/>
      </div>
    </nav>
  )
}

export default NavBar