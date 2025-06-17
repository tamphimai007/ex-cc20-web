import { Outlet } from "react-router";
import MainNav from "../components/MainNav";

const Layout = () => {
  return (
    <div>
      <MainNav />
      <Outlet />
      {/* Child route render through outlet */}
    </div>
  );
};
export default Layout;
