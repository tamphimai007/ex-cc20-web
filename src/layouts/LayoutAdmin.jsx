import { Outlet } from "react-router";
import Sidebar from "../components/admin/Sidebar";
import Header from "../components/admin/Header";

const LayoutAdmin = () => {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <div className="flex-1 p-2 m-2 bg-gray-100 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default LayoutAdmin;
