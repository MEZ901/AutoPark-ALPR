import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { UserTable } from "../features/tables";
import { db } from "../config/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const [vehicles, setVehicles] = useState([]);
  const vehiclesRef = collection(db, "Vehicles");
  const getVehicles = async () => {
    try {
      const q = query(vehiclesRef, where("timeOut", "==", null));
      const vehiclesSnapshot = await getDocs(q);
      const vehiclesList = vehiclesSnapshot.docs.map((doc) => doc.data());
      const FilteredVehicles = vehiclesList.map((vehicle, index) => {
        return {
          id: index + 1,
          licensePlate: vehicle.licensePlate,
          entryTime: vehicle.timeIn
            .split("T")
            .shift()
            .split("-")
            .reverse()
            .join("/") +
            " - " +
            vehicle.timeIn
            .split("T")
            .pop()
            .slice(0, -1),
        };
      });
      setVehicles(FilteredVehicles);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`Error ${errorCode}: ${errorMessage}`);
    }
  };
  getVehicles();

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-5">Welcome { user.username }</h1>
      <h2 className="text-xl font-medium text-center mb-5">The current vehicles in the garage:</h2>
      <UserTable vehicles={vehicles} />
    </div>
  )
}

export default Home;