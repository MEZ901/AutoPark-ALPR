import { useState } from 'react';
import { Button, Box, Backdrop, Modal, Fade, TextField } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import dayjs from 'dayjs';
import { vehicleSchema } from '../../schemas';
import { createModalToggle } from '.';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../config/firebase';
import { getData } from '../vehicles';

const CreateModal = () => {
  const mdScreen = useMediaQuery('(min-width: 768px)');
  const dispatch = useDispatch();
  const open = useSelector((state) => state.admin.createModal);
  const { licensePlate } = useSelector((state) => state.auth.user);
  const [exitErr, setExitErr] = useState(false)
  const handleClose = () => dispatch(createModalToggle());
  const vehicleCollectionRef = collection(db, "vehicles");

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

  const { values, errors, touched, handleChange, handleSubmit, handleBlur, setFieldValue } = useFormik({
    initialValues: {
        licensePlate: "",
        timeIn: "",
        timeOut: null,
    },
    validationSchema: vehicleSchema,
    onSubmit: async (values) => {
      if(exitErr) return;
      await addDoc(vehicleCollectionRef, values);
      handleClose();
      getData(licensePlate, dispatch);
    }
  });

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
            <form onSubmit={handleSubmit}>
              <div>
                <div>
                    <TextField
                        error={errors.licensePlate && touched.licensePlate}
                        helperText={errors.licensePlate && touched.licensePlate ? errors.licensePlate : null}
                        label="License Plate"
                        variant="filled"
                        name='licensePlate'
                        value={values.licensePlate}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        fullWidth
                    />
                </div>
                <div className='flex flex-col md:flex-row gap-5 mt-5 justify-between flex-1'>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                      slotProps={{
                          textField: {
                              error: errors.timeIn && touched.timeIn,
                              helperText: errors.timeIn && touched.timeIn ? errors.timeIn : null,
                          },
                      }}
                      label="Entry Date and Time"
                      name='timeIn'
                      onChange={(value) => { setFieldValue('timeIn', value.toISOString()) }}
                      onBlur={handleBlur}
                    />
                    <DateTimePicker
                      onError={(newError) => newError ? setExitErr(true) : setExitErr(false)}
                      minDateTime={dayjs(values.timeIn)}
                      label="Exit Date and Time"
                      name='timeOut'
                      onChange={(value) => { setFieldValue('timeOut', value.toISOString()) }}
                      onBlur={handleBlur}
                    />               
                  </LocalizationProvider>
                </div>
                <p className='text-gray-700 text-sm mb-5'>* Leave the exit date feild empty if the vehicle still in the garage</p>
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