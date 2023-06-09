import * as yup from 'yup';

const emailRule = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const registerSchema = yup.object().shape({
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

export default registerSchema;