import { TabPanels } from "../components/common";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../features/vehicles";

const HomeLayout = () => {
  const { licensePlate } = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  getData(licensePlate, dispatch);
  return (
    <div>
        <div>
            <TabPanels />
        </div>
        <Outlet />
    </div>
  )
}

export default HomeLayout;