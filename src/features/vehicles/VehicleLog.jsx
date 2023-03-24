import { useSelector } from "react-redux";
import { UserTable } from "../../components/tables";

const VehicleLog = () => {
  const vehicleLog = useSelector((state) => state.vehicles.vehicleLog);
  
  return (
    <div className="mt-5">
        <UserTable vehicles={vehicleLog} col={{ field: 'exitTime', headerName: 'Exit Time', flex: 0.5, minWidth: 250 }} />
    </div>
  )
}

export default VehicleLog;