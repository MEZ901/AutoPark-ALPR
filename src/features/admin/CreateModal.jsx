import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { createModalToggle } from '.';
import { useMediaQuery } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Button } from '@mui/material';

const CreateModal = () => {
  const mdScreen = useMediaQuery('(min-width: 768px)');
  const dispatch = useDispatch();
  const open = useSelector((state) => state.admin.createModal);
  const handleClose = () => dispatch(createModalToggle());

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: mdScreen ? '50%' : '80%',
    bgcolor: 'background.paper',
    border: '0px solid #000',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
  };

  const handleChange = (newValue) => {
    console.log(newValue.toISOString());
    };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
            <Box sx={style}>
                <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5">
                    <h3 className="text-lg font-semibold text-gray-900">
                        Add Vehicle
                    </h3>
                </div>
                <form action="#">
                    <div>
                        <div>
                            <TextField id="filled-basic" label="License Plate" variant="filled" fullWidth />
                        </div>
                        <div className='flex flex-col md:flex-row gap-5 my-5 justify-between'>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateTimePicker label="Entry Date and Time" onChange={handleChange} />
                                <DateTimePicker label="Exit Date and Time" />   
                            </LocalizationProvider>
                        </div>
                    </div>
                    <Button variant="contained" type='submit' sx={{float: 'right'}}>Add Vehicle</Button>
                </form>
            </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default CreateModal;