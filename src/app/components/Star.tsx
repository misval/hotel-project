import Image from "next/image"

const Star = () => {
  return (
    <Image 
      src="/images/star.jpg"
      alt="imagen de estrella para indicar calificacion del hotel"
      height={40}
      width={40}
      style={{ marginRight: 10 }}
    />
  )
}

export default Star