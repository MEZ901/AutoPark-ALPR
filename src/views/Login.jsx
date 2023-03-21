import { Button } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import Divider from '@mui/material/Divider';    
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';

const Login = () => {
  return (
    <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div
                className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
            </div>
            <div className="relative px-4 py-10 bg-gray-100 shadow-lg sm:rounded-3xl sm:p-20">
                <div className="mx-auto">
                    <div>
                        <h1 className="text-2xl font-semibold mb-5">Login</h1>
                    </div>
                    <Button variant="outlined" className="w-full" startIcon={<GoogleIcon />}>Login with Google</Button>
                    <Divider className="pt-5"> OR </Divider>
                    <div className="divide-y divide-gray-200">
                        <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                            <div>
                                <TextField label="Email" variant="filled" fullWidth />
                            </div>
                            <div>
                                <TextField label="Password" variant="filled" fullWidth />
                            </div>
                            <div>
                                <Button variant="contained" color="primary" fullWidth>Login</Button>
                            </div>
                            <p className="text-sm font-light text-gray-500">
                                Don't have an account? <Link to="/register" className="font-medium text-primary-600 hover:underline">Register here</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login;