import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector, useDispatch } from 'react-redux';
import { doc, deleteDoc } from 'firebase/firestore';
import { deleteConfirmToggle } from '.';
import { db } from '../../config/firebase';
import { getData } from '../vehicles';
import { ModalLayout } from '../../components/common';

const DeleteConfirm = () => {
  const dispatch = useDispatch();
  const { licensePlate } = useSelector((state) => state.auth.user);
  const { show, id } = useSelector((state) => state.admin.deleteConfirm);
  const handleClose = () => dispatch(deleteConfirmToggle());
  
  const handleConfirm = () => {
    const vehicleDocRef = doc(db, "vehicles", id);
    deleteDoc(vehicleDocRef);
    getData(licensePlate, dispatch);
    handleClose();
  }

  return (
    <div>
      <ModalLayout show={show} title="Delete Vehicle" reducer={deleteConfirmToggle}>
        <p className='my-5 text-center'>Are you sure you want to delete this vehicle log?<br />This action cannot be undone please make sure that you want to delete it.</p>
        <div className="flex justify-end gap-3">
          <Button variant="outlined" onClick={handleClose}>Cancel</Button>
          <Button variant="contained" color='error' onClick={handleConfirm} startIcon={<DeleteIcon />}>Delete</Button>
        </div>
      </ModalLayout>
    </div>
  )
}

export default DeleteConfirm;