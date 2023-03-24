import * as yup from 'yup';

const emailRule = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const registerSchema = yup.object().shape({
    username: yup
        .string()
        .required("Username is required"),
    email: yup
        .string()
        .matches(emailRule, "Please enter a valid email")
        .required("Email is required"),
    licensePlate: yup
        .string()
        .required("Licence plate is required"),
    password: yup
        .string()
        .min(6)
        .required("Password is required"),
    passwordConfirmation: yup
        .string()
        .oneOf([yup.ref('password'), null], "Passwords must match")
        .required("Password confirmation is required")
});

export const loginSchema = yup.object().shape({
    email: yup
        .string()
        .matches(emailRule, "Please enter a valid email")
        .required("Email is required"),
    password: yup
        .string()
        .required("Password is required")
});

export const vehicleSchema = yup.object().shape({
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