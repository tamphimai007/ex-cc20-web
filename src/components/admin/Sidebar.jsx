import { BookDashed, User } from "lucide-react";
import { Link } from "react-router";

const Sidebar = () => {
  return (
    <div className="w-48 bg-green-500">
      {/* Profile */}
      <div className="flex flex-col items-center gap-2 py-12">
        <User fontSize={48} />
        <span className="text-lg">Profile</span>
      </div>
      {/* NavLink */}
      <div className="py-1 mx-2">
        <Link
          className="flex hover:bg-green-700 hover:duration-200
          rounded-sm px-4 py-2 gap-2"
          to={"/admin"}
        >
          <span className="text-xl">
            <BookDashed />
          </span>
          Dashboard
        </Link>
      </div>
    </div>
  );
};
export default Sidebar;
