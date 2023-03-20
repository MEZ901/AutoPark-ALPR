import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { logo } from "../../assets";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-200">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
            <Link to="/" className="flex items-center">
                <img src={logo} className="h-6 mr-3 sm:h-9" alt="Logo" />
            </Link>
            <div className="flex md:order-2">
                <Button variant="text" onClick={() => navigate('/login')}>Login</Button>
                <Button variant="contained" onClick={() => navigate('/register')}>Register</Button>
            </div>
        </div>
    </div>
  )
}

export default Navbar;