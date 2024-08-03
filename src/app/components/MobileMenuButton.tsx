import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const MobileMenuButton = ({ onClick }) => {
  return (
    <button className="absolute right-0" onClick={onClick}>
      <FontAwesomeIcon className="text-4xl" icon={faBars} color="white"/>
    </button>
  )
}

export default MobileMenuButton