import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import { AdminTable } from "../../components/tables";

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