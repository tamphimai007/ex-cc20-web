import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Register from "../pages/auth/Register";
import Login from "../pages/auth/Login";

import HomeUser from "../pages/user/HomeUser";
import Dashboard from "../pages/admin/Dashboard";
import Manage from "../pages/admin/Manage";
import MapUser from "../pages/user/MapUser";
import Layout from "../layouts/Layout";
import LayoutAdmin from "../layouts/LayoutAdmin";
import RegisterWithHookForm from "../pages/auth/RegisterWithHookForm";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="register" element={<RegisterWithHookForm />} />
        <Route path="login" element={<Login />} />
      </Route>

      {/* Private */}
      <Route path="admin" element={<LayoutAdmin />}>
        <Route index element={<Dashboard />} />
        <Route path="manage" element={<Manage />} />
      </Route>

      <Route path="home" element={<HomeUser />} />
      <Route path="map" element={<MapUser />} />
    </Routes>
  );
};
export default AppRoutes;
