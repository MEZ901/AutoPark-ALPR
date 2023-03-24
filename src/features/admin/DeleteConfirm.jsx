import { Box, Backdrop, Modal, Fade, Button } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector, useDispatch } from 'react-redux';
import { deleteConfirmToggle } from '.';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { getData } from '../vehicles';

const DeleteConfirm = () => {
  const mdScreen = useMediaQuery('(min-width: 768px)');
  const dispatch = useDispatch();
  const { licensePlate } = useSelector((state) => state.auth.user);
  const { show, id } = useSelector((state) => state.admin.deleteConfirm);
  const handleClose = () => dispatch(deleteConfirmToggle());

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: mdScreen ? '40%' : '80%',
    bgcolor: 'background.paper',
    border: '0px solid #000',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
  };

  const handleConfirm = () => {
    const vehicleDocRef = doc(db, "vehicles", id);
    deleteDoc(vehicleDocRef);
    getData(licensePlate, dispatch);
    handleClose();
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={show}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={show}>
            <Box sx={style}>
                <div className="flex justify-center items-center gap-2 text-red-600">
                    <h2 className='text-2xl font-bold'>Delete Vehicle</h2>
                </div>
                <p className='my-5 text-center'>Are you sure you want to delete this vehicle log?</p>
                <div className="flex justify-end gap-3">
                    <Button variant="outlined" onClick={handleClose}>Cancel</Button>
                    <Button variant="contained" color='error' onClick={handleConfirm} startIcon={<DeleteIcon />}>Delete</Button>
                </div>
            </Box>
        </Fade>
      </Modal>
    </div>
  )
}

export default DeleteConfirm;