import NavBar from "@/app/components/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link";

import { Work_Sans } from 'next/font/google'
import RoomCardSm from "./components/RoomCardSm";
import ServiciosCard from "./components/ServiciosCard";
import ReviewCard from "./components/ReviewCard";
import Footer from "./components/Footer";
import Star from "./components/Star";
import { greatVibes, greatVibesLight } from "./styles/fonts";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  
  return (
    <>
      <main className="bg-[#F1EED2] absolute top-0 left-0 bg-white w-full">
        <header className="relative align w-full h-[600px] overflow-hidden">
          <div className="w-full h-full bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: "url('/images/hotel-image-header.jpg')" }}
          >
            <div className="absolute top-[320px] md:ml-20 m-6 text-white">
              <div className="flex flex-row content-bottom items-end">
                <p className={`${greatVibes.className} lg:text-7xl md:text-7xl text-6xl`}>Lorem</p>
                <p className={`${greatVibesLight.className} ml-2 lg:text-4xl lg:py-1 py-0.5 text-3xl`}><b>Hotel</b></p>
              </div>
              <p className="font-light mt-2"> 
                Lorem ipsum dolor sit amet, consectetur<br/> 
                adipiscing elit, sed do eiusmod tempor <br/> 
                incididunt ut labore et dolore aliqua.
              </p>
              <Link href="/reservar" 
                className="inline-flex items-center justify-center mt-4 px-4 py-2 border border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors duration-300 rounded-lg">
                <span className="mr-2 text-sm">Reservar</span>
                <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </header> 
        
        <section className="my-20 lg:mx-10 mx-6 md:mx-20">
          <div className="lg:mx-0 lg:flex flex-wrap justify-center">
            <div className="lg:w-1/4 lg:mt-4">
              <Link href="/habitaciones" className="mb-2 inline-flex items-center">
                <span className={`${greatVibes.className} text-3xl lg:text-3xl focus:underline focus:underline-offset-2 lg:no-underline hover:underline-offset-2`}>Habitaciones</span>
                <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4 ml-2"/>
              </Link>                    
              <div className="lg:block hidden">
                <p>Lorem ipsum dolor sit <br/> amet, consectetur <br/> adipiscing elit, sed do <br/> eiusmod tempor <br/> incididunt ut labore et <br/> dolore aliqua.</p>
              </div>
            </div>
            <RoomCardSm styles="mb-4 lg:ml-4 lg:mt-4 grow-0 lg:w-1/4 min-w-[260px] bg-[url('/images/barcelona.jpg')]" name="Barcelona"/>
            <RoomCardSm styles="mb-4 lg:ml-4 lg:mt-4 lg:w-2/5 bg-[url('/images/suite-donostia.jpg')]" name="Suite Uruguay"/>
            <RoomCardSm styles="mb-4 lg:w-1/4 min-w-[260px] bg-[url('/images/roma.jpg')]" name="Roma"/>
            <RoomCardSm styles="mb-4 lg:ml-4 lg:w-2/5 bg-[url('/images/suite-guernica.jpg')]" name="Suite Argentina"/>
            <RoomCardSm styles="lg:block hidden lg:ml-4 lg:w-1/4 min-w-[260px] bg-[url('/images/paris.jpg')]" name="Paris"/>
          </div>   
        </section>

        <section className="relative flex justify-center h-[1650px] lg:h-[750px]">
            <div className="w-full h-[400px] bg-zinc-800">
            </div>
            <div className="absolute top-20 w-full flex flex-col">
              <div className="mx-6 *:text-sm *:text-white text-center *:font-thin md:*:tracking-widest">
                <p className="inline-block">AIRE ACONDICIONADO</p>
                <p className="inline-block ml-6 md:ml-8">COFFEE BREAK</p>
                <p className="md:inline-block ml-6 md:ml-8 mt-6">SALA DE CONFERENCIAS</p>
                <div className="md:block hidden"></div>
                <p className="inline-block mt-6 md:ml-8">COCHERAS</p>
                <p className="inline-block mt-6 ml-6 md:ml-8">DESAYUNO BUFFET</p>
                <p className="mt-6">CAJA DE SEGURIDAD</p>
              </div>
              <div className="lg:flex lg:justify-center lg:w-full mt-8 self-center *:mb-6 md:*:mb-8 lg:space-x-10">
                <ServiciosCard urlImage="/images/desayunador-hotel.jpg" altImage="Imagen de mesa con variedad de alimentos para el desayuno" title="Desayunador"/>
                <ServiciosCard urlImage="/images/sala-conferencias-hotel.jpg" altImage="Imagen de la sala de conferencias" title="Sala de reuniones"/>
                <ServiciosCard urlImage="/images/patio-hotel.jpg" altImage="Imagen de una parte del patio" title="Patio"/>
              </div>
            </div>
        </section>

        <section className="h-fit mb-20">
          <div className="flex justify-center">
            <Star/>
            <Star/>
            <Star/>
            <Star/>
          </div>
          <div className="text-center my-4">
            <p className="text-sm font-light tracking-widest">EN GOOGLE MAPS</p>
          </div>
          <div className="w-full lg:w-[1084px] m-auto">
              <div className="flex flex-row lg:m-auto overflow-y-scroll mx-2 no-scrollbar">
                  <ReviewCard/>
                  <ReviewCard/>
                  <ReviewCard/>
                  <ReviewCard/>
                  <ReviewCard/>
              </div>                
          </div>
        </section>
        <Footer />
      </main>
      <NavBar/>
    </>
  );
}
