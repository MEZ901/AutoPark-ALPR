import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import dayjs from 'dayjs';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../config/firebase';
import { addVehicleSchema } from '../../schemas';
import { createModalToggle } from '.';
import { getData } from '../vehicles';
import { ModalLayout } from '../../components/admin-dashboard';

const CreateModal = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.admin.createModal);
  const { licensePlate } = useSelector((state) => state.auth.user);
  const [exitErr, setExitErr] = useState(false)
  const handleClose = () => dispatch(createModalToggle());
  const vehicleCollectionRef = collection(db, "vehicles");

  const { values, errors, touched, handleChange, handleSubmit, handleBlur, setFieldValue } = useFormik({
    initialValues: {
        licensePlate: "",
        timeIn: "",
        timeOut: null,
    },
    validationSchema: addVehicleSchema,
    onSubmit: async (values, { resetForm }) => {
      if(exitErr) return;
      await addDoc(vehicleCollectionRef, values);
      getData(licensePlate, dispatch);
      handleClose();
      resetForm();
    }
  });

  return (
    <div>
      <ModalLayout show={show} title='Add Vehicle' reducer={createModalToggle}>
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
                  maxDateTime={dayjs()}
                  onChange={(value) => { setFieldValue('timeIn', value.toISOString()) }}
                  onBlur={handleBlur}
                />
                <DateTimePicker
                  onError={(newError) => newError ? setExitErr(true) : setExitErr(false)}
                  minDateTime={dayjs(values.timeIn)}
                  maxDateTime={dayjs()}
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
      </ModalLayout>
    </div>
  );
}

export default CreateModal;