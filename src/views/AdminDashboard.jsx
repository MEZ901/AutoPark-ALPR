import { AdminTable } from "../components/tables";
import { useSelector } from "react-redux";

const AdminDashboard = () => {
  const allVehiclesList = useSelector((state) => state.vehicles.allVehicles);

  return (
    <div className="mt-5">
      <AdminTable vehicles={allVehiclesList} />
    </div>
  )
}

export default AdminDashboard;