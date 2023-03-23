import { useSelector } from "react-redux";
import { UserTable } from "../../components/tables";

const CurrentVehicles = () => {
  const currentVehiclesList = useSelector((state) => state.vehicles.currentVehicles);
  
  return (
    <div className="mt-5">
      <UserTable vehicles={currentVehiclesList} />
    </div>
  )
}

export default CurrentVehicles;