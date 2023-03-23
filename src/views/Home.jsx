import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { UserTable } from "../features/tables";
import { db } from "../config/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const [currentVehicles, setCurrentVehicles] = useState([]);
  const [myVehicleLog, setMyVehicleLog] = useState([]);
  const vehiclesRef = collection(db, "Vehicles");

  const parseDate = (date) => (
    date
    .split("T")
    .shift()
    .split("-")
    .reverse()
    .join("/") +
    " - " +
    date
    .split("T")
    .pop()
    .slice(0, -1)
  );

  const getVehicles = async (type) => {
    try {
      let q;
      switch (type) {
        case 'current':
          q = query(vehiclesRef, where("timeOut", "==", null));
          break;
        case 'log':
          q = query(vehiclesRef, where("licensePlate", "==", user.licensePlate));
          break;
      }
      const vehiclesSnapshot = await getDocs(q);
      const vehiclesList = vehiclesSnapshot.docs.map((doc) => doc.data());
      const FilteredVehicles = vehiclesList.map((vehicle, index) => (
        {
          id: index + 1,
          licensePlate: vehicle.licensePlate,
          entryTime: parseDate(vehicle.timeIn),
          exitTime: type == 'log' && vehicle.timeOut
            ? parseDate(vehicle.timeOut)
            : "Still in the garage",
        }
      ));
      switch (type) {
        case 'current':
          setCurrentVehicles(FilteredVehicles);
          break;
        case 'log':
          setMyVehicleLog(FilteredVehicles);
          break;
      }
    } catch (error) {
      console.log(`Error ${error.code}: ${error.message}`);
    }
  };

  getVehicles('current');
  getVehicles('log');

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-5">Welcome { user.username }</h1>
      <div>
        <h2 className="text-xl font-medium text-center mb-5">The current vehicles in the garage:</h2>
        <UserTable vehicles={currentVehicles} />
      </div>
      <div>
        <h2 className="text-xl font-medium text-center my-5">the log of your vehicle’s entries and exits:</h2>
        <UserTable vehicles={myVehicleLog} col={{ field: 'exitTime', headerName: 'Exit Time', flex: 0.5 }} />
      </div>
    </div>
  )
}

export default Home;