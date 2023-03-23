import { AdminTable } from "../components/tables";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";

const AdminDashboard = () => {
  const allVehiclesList = useSelector((state) => state.vehicles.allVehicles);

  return (
    <div>
      <div className="w-full text-right my-5">
        <Button variant="contained">Add Vehicle</Button>
      </div>
      <AdminTable vehicles={allVehiclesList} />
    </div>
  )
}

export default AdminDashboard;