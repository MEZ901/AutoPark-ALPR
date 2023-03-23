import { useSelector } from "react-redux";
import { UserTable } from "../../components/tables";
import { getData } from ".";

const CurrentVehicles = () => {
  const currentVehiclesList = useSelector((state) => state.vehicles.currentVehicles);
  currentVehiclesList.length == 0 ? getData('current') : null;
  
  return (
    <div className="mt-5">
      <UserTable vehicles={currentVehiclesList} />
    </div>
  )
}

export default CurrentVehicles;