import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { AdminTable } from "../../components/tables";
import { CreateModal, createModalToggle, DeleteConfirm, UpdateModal } from '.';

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { allVehicles } = useSelector((state) => state.vehicles);

  return (
    <div>
      <CreateModal />
      <DeleteConfirm />
      <UpdateModal />
      <div className="w-full text-right my-5">
        <Button variant="contained" onClick={() => dispatch(createModalToggle())}>Add Vehicle</Button>
      </div>
      <AdminTable vehicles={allVehicles} />
    </div>
  )
}

export default AdminDashboard;