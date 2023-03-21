import { Button } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import Divider from '@mui/material/Divider';    
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';

const Register = () => { 
  return (
    // <section>
    //     <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    //         <Link to="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white uppercase">
    //             Auto<span className="text-blue-500">Park</span>    
    //         </Link>
    //         <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
    //             <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
    //                 <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
    //                     Create and account
    //                 </h1>
    //                 <Button variant="outlined" className="w-full" startIcon={<GoogleIcon />}>Sign up with Google</Button>
    //                 <Divider> OR </Divider>
    //                 <form className="space-y-4 md:space-y-6">
    //                     <div>
    //                         <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
    //                         <input type="text" id="username" placeholder="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
    //                     </div>
    //                     <div>
    //                         <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
    //                         <input type="email" id="email" placeholder="name@gmail.com" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
    //                     </div>
    //                     <div>
    //                         <label htmlFor="licensePlate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">License Plate</label>
    //                         <input type="text" id="licensePlate" placeholder="*******" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
    //                     </div>
    //                     <div>
    //                         <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
    //                         <input type="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
    //                     </div>
    //                     <div>
    //                         <label htmlFor="password_confirmation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
    //                         <input type="password" id="password_confirmation" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
    //                     </div>
    //                     <div className="flex items-start">
    //                         <div className="flex items-center h-5">
    //                             <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
    //                         </div>
    //                         <div className="ml-3 text-sm">
    //                             <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
    //                         </div>
    //                     </div>
    //                     <Button variant="contained" className="w-full">Create an account</Button>
    //                     <p className="text-sm font-light text-gray-500 dark:text-gray-400">
    //                         Already have an account? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
    //                     </p>
    //                 </form>
    //             </div>
    //         </div>
    //     </div>
    // </section>

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

export default Register;