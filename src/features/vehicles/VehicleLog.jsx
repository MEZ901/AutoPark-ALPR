import { useSelector } from "react-redux";
import { UserTable } from "../../components/tables";
import { getData } from ".";
import { useMemo } from "react";

const VehicleLog = () => {
    getData('log');
    const vehicleLog = useSelector((state) => state.vehicles.vehicleLog);
  return (
    <div className="mt-5">
        <UserTable vehicles={vehicleLog} col={{ field: 'exitTime', headerName: 'Exit Time', flex: 0.5 }} />
    </div>
  )
}

export default VehicleLog;