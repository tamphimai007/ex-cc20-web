import { Link } from "react-router";

const MainNav = () => {
  return (
    <nav
      className="flex justify-between 
      bg-black text-white 
      font-bold px-8 py-2"
    >
      <div className="flex gap-4">
        <Link to="/">Logo</Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="flex gap-4">
        <Link to="/register"> Register</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};
export default MainNav;
