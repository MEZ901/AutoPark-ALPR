import { Button } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import Divider from '@mui/material/Divider';    
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';

const Login = () => {
  return (
    <div class="min-h-screen py-6 flex flex-col justify-center sm:py-12">
        <div class="relative py-3 sm:max-w-xl sm:mx-auto">
            <div
                class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
            </div>
            <div class="relative px-4 py-10 bg-gray-100 shadow-lg sm:rounded-3xl sm:p-20">
                <div class="w-96 mx-auto">
                    <div>
                        <h1 class="text-2xl font-semibold mb-5">Login</h1>
                    </div>
                    <Button variant="outlined" className="w-full" startIcon={<GoogleIcon />}>Login with Google</Button>
                    <Divider className="pt-5"> OR </Divider>
                    <div class="divide-y divide-gray-200">
                        <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                            <div class="relative">
                                <TextField id="filled-basic" label="Email" variant="filled" fullWidth />
                            </div>
                            <div class="relative">
                                <TextField id="filled-basic" label="Password" variant="filled" fullWidth />
                            </div>
                            <div class="relative">
                                <Button variant="contained" color="primary" fullWidth>Submit</Button>
                            </div>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don't have an account? <Link to="/register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Register here</Link>
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