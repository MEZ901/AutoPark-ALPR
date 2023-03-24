import { useSelector, useDispatch } from "react-redux";
import { getDocs, collection, query, where } from "firebase/firestore";
import { setAllVehicles, setCurrentVehicles, setVehicleLog } from "./vehiclesSlice";
import { db } from "../../config/firebase";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);
  
const getData = async (type) => {
  const { licensePlate } = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const vehiclesRef = collection(db, "Vehicles");
  try {
    let q;
    switch (type) {
      case 'all':
        q = query(vehiclesRef);
        break;
      case 'current':
        q = query(vehiclesRef, where("timeOut", "==", null));
        break;
      case 'log':
        q = query(vehiclesRef, where("licensePlate", "==", licensePlate));
        break;
    }
    const vehiclesSnapshot = await getDocs(q);
    const vehiclesList = vehiclesSnapshot.docs.map((doc) => doc.data());
    const FilteredVehicles = vehiclesList.map((vehicle, index) => (
      {
        id: index + 1,
        licensePlate: vehicle.licensePlate,
        entryTime: dayjs.utc(vehicle.timeIn).format('MMMM D, YYYY h:mm A'),
        exitTime: type != 'current' && vehicle.timeOut
          ? dayjs.utc(vehicle.timeOut).format('MMMM D, YYYY h:mm A')
          : "Still in the garage",
      }
    ));
    switch (type) {
      case 'all':
        dispatch(setAllVehicles(FilteredVehicles));
        break;
      case 'current':
        dispatch(setCurrentVehicles(FilteredVehicles));
        break;
      case 'log':
        dispatch(setVehicleLog(FilteredVehicles));
        break;
    }
  } catch (error) {
    console.log(`Error ${error.code}: ${error.message}`);
  }
};

export default getData;