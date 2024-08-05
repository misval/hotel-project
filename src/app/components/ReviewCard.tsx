'use client'

import { useEffect, useState } from "react";
import Image from "next/image"
import { fetchRandomUser } from '@/app/lib/data' 
import { url } from "inspector";

const ReviewCard = () => {
  const [imageUrl, setImageUrl] = useState(null)
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')

  useEffect(() => {
    const fetchImage = async () => {
      const { name, lastName, picture } = await fetchRandomUser();
      setImageUrl(picture);
      setName(name)
      setLastName(lastName)
    };

    fetchImage();
  }, []);

  return (
    <div className={`relative flex-shrink-0 w-[200px] h-[200px] bg-[#D9D9D9] m-2 rounded-3xl overflow-hidden`} 
      >
      <div className="absolute top-[-20%] left-2 h-[200px] w-[140px] contrast-50" style={{ 
        backgroundImage: "url('images/comillas.png')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
     }}>
      </div>
      <p className="absolute z-5 text-wrap text-sm mx-3 mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis rerum incidunt excepturi, dignissimos voluptas </p>
      <div>
        <p className={`absolute bottom-3 left-3 font-bold text-sm`}>{name} {lastName}</p>
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