'use client'

import { useEffect, useState } from "react";
import Image from "next/image"
import { fetchRandomUserImage } from '@/app/lib/data' 
import { url } from "inspector";

const ReviewCard = ({ text, style}) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      const url = await fetchRandomUserImage();
      setImageUrl(url);
    };

    fetchImage();
  }, []);

  return (
    <div className={`relative flex-shrink-0 lg:w-[200px] lg:h-[200px] w-[160px] h-[160px] bg-[#D9D9D9] m-2 rounded-3xl overflow-hidden ${style}`} 
      >
      <div className="absolute top-[-20%] left-2 h-[200px] w-[140px] contrast-50" style={{ 
        backgroundImage: "url('images/comillas.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
     }}>
      </div>
      <p className="absolute z-5 text-wrap text-sm mx-3 mt-4">Un hotel increible, pase una noche muy agradable</p>
      <div>
        <p className="absolute bottom-4 left-4 font-bold text-sm">Misael Valles</p>
        <img
          src={`${imageUrl}`}
          alt="Foto del usuario que escribio la reseña"
          width={40}
          height={40}
          className="absolute right-2 bottom-2 rounded-full"
        />
      </div>
    </div>
  )
}

export default ReviewCard