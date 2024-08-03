import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const LeerMasButton = () => {
  return (
    <button className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-[#2C5234] bg-[#F1EED2] text-sm">
      Leer Mas
      <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3 ml-2"/>
    </button>
  )
}

export default LeerMasButton