import ReservarButton from "./ReservarButton"
import LeerMasButton from "./LeerMasButton"

const RoomCardSm = ({ styles, name, urlImage }) => {
  return (
    <div className={`bg-[url('/images/${urlImage}')] bg-cover bg-center bg-no-repeat h-60 w-full rounded-xl relative grow-0 ${styles}`}>
      <div className="absolute left-4 bottom-4">
        <p className="text-3xl text-white mb-1">{name}</p>
        <div className="space-x-2 mr-4">
          <ReservarButton/>
          <LeerMasButton/>
        </div>
      </div>
    </div>
  )
}

export default RoomCardSm