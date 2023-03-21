import * as yup from 'yup';

export const registerSchema = yup.object().shape({
    username: yup
        .string()
        .required("Username is required"),
    email: yup
        .string()
        .email("Please enter a valid email")
        .required("Email is required"),
    password: yup
        .string()
        .min(6)
        .required("Password is required"),
    passwordConfirmation: yup
        .string()
        .oneOf([yup.ref('password'), null], "Passwords must match")
        .required("Password confirmation is required")
});