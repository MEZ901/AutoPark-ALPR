import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { AdminTable } from "../../components/tables";
import { CreateModal, createModalToggle } from '.';

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const allVehiclesList = useSelector((state) => state.vehicles.allVehicles);

  return (
    <div>
      <CreateModal />
      <div className="w-full text-right my-5">
        <Button variant="contained" onClick={() => dispatch(createModalToggle())}>Add Vehicle</Button>
      </div>
      <AdminTable vehicles={allVehiclesList} />
    </div>
  )
}

export default AdminDashboard;