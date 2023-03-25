import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import { ModalLayout } from "../../components/admin-dashboard";
import { updateModalToggle } from ".";

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useFormik } from 'formik';
import dayjs from 'dayjs';
import { collection, getDoc, doc } from "firebase/firestore";
import { db } from '../../config/firebase';
import { getData } from '../vehicles';


const UpdateModal = () => {
  const { show, id } = useSelector((state) => state.admin.updateModal);
  const [vehicle, setVehicle] = useState(null);
  const [exitErr, setExitErr] = useState(false);
  
  useEffect(() => {
    if(id != null) {
      const vehicleRef = doc(db, "vehicles", id);
      const getVehicle =  async () => {
        const docSnap = await getDoc(vehicleRef);
        setVehicle(docSnap.data());
      }
      getVehicle();
    }
  }, [id]);

  const { values, errors, touched, handleChange, handleSubmit, handleBlur, setFieldValue } = useFormik({
    initialValues: {
        licensePlate: "",
        timeIn: "",
        timeOut: null,
    },
    // validationSchema: vehicleSchema,
    onSubmit: async (values) => {
      if(exitErr) return;
      console.log(values)
    }
  });
  return (
    <div>
        <ModalLayout show={show} title='Update Vehicle' reducer={updateModalToggle}>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <TextField
                            error={errors.licensePlate && touched.licensePlate}
                            helperText={errors.licensePlate && touched.licensePlate ? errors.licensePlate : null}
                            label="License Plate"
                            variant="filled"
                            name='licensePlate'
                            value={vehicle ? vehicle.licensePlate : ''}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            fullWidth
                        />
                    </div>
                    <div className='flex flex-col md:flex-row gap-5 mt-5 justify-between flex-1'>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateTimePicker
                                value={dayjs(vehicle?.timeIn)}
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
                                value={vehicle?.timeOut ? dayjs(vehicle?.timeOut) : null}
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
                <Button variant="contained" type='submit' sx={{float: 'right'}}>Update Vehicle</Button>
            </form>
        </ModalLayout>
    </div>
  )
}

export default UpdateModal;