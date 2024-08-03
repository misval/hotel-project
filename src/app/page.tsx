import NavBar from "@/app/components/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link";
import Image from "next/image";

import { Work_Sans } from 'next/font/google'
import RoomCardSm from "./components/RoomCardSm";
import ServiciosCard from "./components/ServiciosCard";
import ReviewCard from "./components/ReviewCard";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main className="absolute top-0 left-0 bg-white w-full">
        <header className="relative align w-full h-[600px] overflow-hidden">
          <div className="w-full h-full bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: "url('/images/hotel-image-header.jpg')" }}
          >
            <div className="absolute top-[320px] md:ml-20 m-6 text-neutral-200">
              <div className="flex flex-row content-bottom items-end">
                <p className="lg:text-7xl md:text-7xl text-6xl">Euskadi</p>
                <p className="ml-2 lg:text-2xl md:text-2xl"><b>hotel</b></p>
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
                <span className="text-2xl lg:text-3xl focus:underline focus:underline-offset-2 lg:no-underline hover:underline-offset-2">Habitaciones</span>
                <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4 ml-2"/>
              </Link>                    
              <div className="lg:block hidden">
                <p>Lorem ipsum dolor sit <br/> amet, consectetur <br/> adipiscing elit, sed do <br/> eiusmod tempor <br/> incididunt ut labore et <br/> dolore aliqua.</p>
              </div>
            </div>
            <RoomCardSm styles="mb-4 lg:ml-4 lg:mt-4 grow-0 lg:w-1/4 min-w-[260px] bg-[url('/images/barcelona.jpg')]" name="Barcelona"/>
            <RoomCardSm styles="mb-4 lg:ml-4 lg:mt-4 lg:w-2/5 bg-[url('/images/suite-donostia.jpg')]" name="Suite Donostia"/>
            <RoomCardSm styles="mb-4 lg:w-1/4 min-w-[260px] bg-[url('/images/roma.jpg')]" name="Roma"/>
            <RoomCardSm styles="mb-4 lg:ml-4 lg:w-2/5 bg-[url('/images/suite-guernica.jpg')]" name="Suite Guernica"/>
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
            <Image 
              src="/images/star.jpg"
              alt="imagen de estrella para indicar calificacion del hotel"
              height={40}
              width={40}
              style={{ marginRight: 10 }}
            />
            <Image 
              src="/images/star.jpg"
              alt="imagen de estrella para indicar calificacion del hotel"
              height={40}
              width={40}
              style={{ marginRight: 10 }}
            />
            <Image 
              src="/images/star.jpg"
              alt="imagen de estrella para indicar calificacion del hotel"
              height={40}
              width={40}
              style={{ marginRight: 10 }}
            />
            <Image 
              src="/images/star.jpg"
              alt="imagen de estrella para indicar calificacion del hotel"
              height={40}
              width={40}
              style={{ marginRight: 10 }}
            />
          </div>
          <div className="text-center my-4">
            <p className="text-sm font-light tracking-widest">EN GOOGLE MAPS</p>
          </div>
          <div className="w-100% overflow-hidden">
              <div className="flex whitespace-nowrap first:ml-8">
                {/* Elementos del carrusel */}
                <ReviewCard text={1} style=""/>
                <ReviewCard text={2} style=""/>
                <ReviewCard text={3} style=""/>
                <ReviewCard text={4} style=""/>
                <ReviewCard text={5} style=""/>

                <ReviewCard text={6} style="[@media(min-width:500px)]:block hidden"/>
                <ReviewCard text={7} style="[@media(min-width:500px)]:block hidden"/>
                <ReviewCard text={8} style="[@media(min-width:500px)]:block hidden"/>
                <ReviewCard text={9} style="[@media(min-width:500px)]:block hidden"/>
                <ReviewCard text={10} style="[@media(min-width:500px)]:block hidden "/>
                {/* Añade más elementos según sea necesario */}
              </div>
           </div>
          <div className="[@media(min-width:500px)]:hidden block w-full overflow-hidden">
            <div className="flex whitespace-nowrap last:mr-6">
              {/* Elementos del carrusel */}
              <ReviewCard text={1} style=""/>
              <ReviewCard text={2} style=""/>
              <ReviewCard text={3} style=""/>
              <ReviewCard text={4} style=""/>
              {/* Añade más elementos según sea necesario */}
            </div>
          </div>
        </section>

        <Footer />
      </main>

      <NavBar/>
    </>
  );
}
