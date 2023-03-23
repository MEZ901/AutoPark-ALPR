import { TabPanels } from "../components/common";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const HomeLayout = () => {
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