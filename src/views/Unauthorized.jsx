import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();  
  return (
    <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
                <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600">401</h1>
                <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl uppercase">Unauthorized</p>
                <p className="mb-4 text-lg font-light text-gray-500">You are not authorized to access this page.</p>
                <Button variant="contained" color="primary" onClick={() => navigate('/')}>Back to Homepage</Button>
            </div>
        </div>
    </section>
  )
}

export default Unauthorized;