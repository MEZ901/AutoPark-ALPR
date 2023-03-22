import { parking } from "../../assets";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center gap-3">
        <div className="w-full md:w-1/2 text-center">
            <h1 className="text-4xl font-bold uppercase">auto<span className="text-blue-500">park</span></h1>
            <p className="my-5">Say goodbye to parking stress! With our Automatic License Plate Recognition based Parking Garage Management System, you'll enjoy hassle-free parking and real-time updates on occupancy. Register today for exclusive benefits.</p>
            <Button variant="contained" onClick={() => navigate('/register')}>Register now</Button>
        </div>
        <div className="hidden md:block md:w-1/2">
            <img src={parking} alt="park" />
        </div>
    </div>
  )
}

export default Hero;