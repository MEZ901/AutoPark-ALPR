import { TabPanels } from "../components/common";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { getData } from "../features/vehicles";

const HomeLayout = () => {
  getData('all');
  getData('current');
  getData('log');
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