import { Button } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import Divider from '@mui/material/Divider';    
import { Link, useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { useFormik } from "formik";
import { registerSchema } from "../../schemas";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useDispatch } from "react-redux";
import { login } from "./authSlice";
import { signInWithPopup } from "firebase/auth";
import { googleProvider } from "../../config/firebase";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { values, errors, touched, handleChange, handleSubmit, handleBlur } = useFormik({
    initialValues: {
        username: "",
        email: "",
        licensePlate: "",
        password: "",
        passwordConfirmation: ""
    },
    validationSchema: registerSchema,
    onSubmit: async (values) => {
        try {
            const userCredentials = await createUserWithEmailAndPassword(auth, values.email, values.password);
            const { uid } = userCredentials.user;
            const user = {
                username: values.username,
                email: values.email,
                licensePlate: values.licensePlate
            }
            await setDoc(doc(db, "users", uid), user);
            dispatch(login({ uid, ...user }));
            localStorage.setItem("user", JSON.stringify({ uid, ...user }));
            navigate("/dashboard");
        } catch (error) {
            switch (error.code) {
                case "auth/email-already-in-use":
                    errors.email = "Email already in use";
                    break;
                default:
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(`Error ${errorCode}: ${errorMessage}`);
                    break;
            }
        }
    }
  });

  const signUpWithGoogle = async () => {
    try {
        const userCredentials = await signInWithPopup(auth, googleProvider);
        const { uid } = userCredentials.user;
        const docRef = doc(db, "users", uid);
        const user = await getDoc(docRef);
        if (user.exists()) {
            dispatch(login({ uid, ...user.data() }));
            localStorage.setItem("user", JSON.stringify({ uid, ...user.data() }));
            navigate("/dashboard");
        } else {
            const user = {
                username: userCredentials.user.displayName,
                email: userCredentials.user.email,
                licensePlate: ""
            }
            await setDoc(doc(db, "users", uid), user);
            dispatch(login({ uid, ...user }));
            localStorage.setItem("user", JSON.stringify({ uid, ...user }));
            navigate("/dashboard");
        }
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Error ${errorCode}: ${errorMessage}`);
    }
}

  return (
    <section className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div
                className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
            </div>
            <div className="relative px-4 py-10 bg-gray-100 shadow-lg sm:rounded-3xl sm:p-20">
                <div className="mx-auto">
                    <div>
                        <h1 className="text-2xl font-semibold mb-5">Register</h1>
                    </div>
                    <Button
                        variant="outlined"
                        className="w-full"
                        startIcon={<GoogleIcon />}
                        onClick={signUpWithGoogle}
                    >
                        Sign up with Google
                    </Button>
                    <Divider className="pt-5"> OR </Divider>
                    <form className="divide-y divide-gray-200" onSubmit={handleSubmit}>
                        <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                            <div>
                                <TextField
                                    error={errors.username && touched.username}
                                    helperText={errors.username && touched.username ? errors.username : null}
                                    label="Username"
                                    variant="filled"
                                    name="username"
                                    fullWidth
                                    value={values.username}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                            <div>
                                <TextField
                                    error={errors.email && touched.email}
                                    helperText={errors.email && touched.email ? errors.email : null} 
                                    type="email" 
                                    label="Email" 
                                    variant="filled" 
                                    name="email" 
                                    fullWidth 
                                    value={values.email} 
                                    onChange={handleChange} 
                                    onBlur={handleBlur} 
                                />
                            </div>
                            <div>
                                <TextField
                                    error={errors.licensePlate && touched.licensePlate}
                                    helperText={errors.licensePlate && touched.licensePlate ? errors.licensePlate : null}
                                    label="License Plate" 
                                    variant="filled" 
                                    name="licensePlate" 
                                    fullWidth 
                                    value={values.licensePlate} 
                                    onChange={handleChange} 
                                    onBlur={handleBlur} 
                                />
                            </div>
                            <div>
                                <TextField
                                    error={errors.password && touched.password}
                                    helperText={errors.password && touched.password ? errors.password : null}
                                    type="password" 
                                    label="Password" 
                                    variant="filled" 
                                    name="password" 
                                    fullWidth 
                                    value={values.password} 
                                    onChange={handleChange} 
                                    onBlur={handleBlur} 
                                />
                            </div>
                            <div>
                                <TextField
                                    error={errors.passwordConfirmation && touched.passwordConfirmation}
                                    helperText={errors.passwordConfirmation && touched.passwordConfirmation ? errors.passwordConfirmation : null}
                                    type="password" 
                                    label="Confirm Password" 
                                    variant="filled" 
                                    name="passwordConfirmation" 
                                    fullWidth 
                                    value={values.passwordConfirmation} 
                                    onChange={handleChange} 
                                    onBlur={handleBlur} 
                                />
                            </div>
                            <div>
                                <Button
                                    variant="contained" 
                                    color="primary" 
                                    type="submit" 
                                    fullWidth
                                >
                                    Register
                                </Button>
                            </div>
                            <p className="text-sm font-light text-gray-500">
                                Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline">Login here</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Register;