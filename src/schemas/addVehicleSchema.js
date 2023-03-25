import * as yup from 'yup';

const addVehicleSchema = yup.object().shape({
    licensePlate: yup
        .string()
        .required("Licence plate is required"),
    timeIn: yup
        .string()
        .required("Entry time is required"),
    timeOut: yup
        .string()
        .nullable(),
});

export default addVehicleSchema;