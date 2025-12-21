import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaPen,
  FaVideo,
  FaBook,
  FaList,
  FaUser,
} from "react-icons/fa";
import { LogOut } from "lucide-react";
import api from "../api";
import toast from "react-hot-toast";
import axios from "axios";

const AdminLayout = () => {
  const navigate = useNavigate();

  const handelLogout = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND}/api/admin/logout`, { withCredentials: true });
      toast.success("Log Out Successfully ");
      navigate("/admin/login");
    } catch (error) {
      toast.error("Logout Failed");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-[#CA3561] text-white p-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Panel</h2>

        <nav className="space-y-3">
          <NavLink
            to="/admin"
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition 
              ${isActive ? "bg-white text-[#CA3561]" : "hover:bg-[#BC0707]"}`
            }
          >
            <FaTachometerAlt /> Dashboard
          </NavLink>

          <NavLink
            to="/admin/add-blog"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition 
              ${isActive ? "bg-white text-[#CA3561]" : "hover:bg-[#BC0707]"}`
            }
          >
            <FaPen /> Add Blog
          </NavLink>

          <NavLink
            to="/admin/videos"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition 
              ${isActive ? "bg-white text-[#CA3561]" : "hover:bg-[#BC0707]"}`
            }
          >
            <FaVideo /> Videos
          </NavLink>

          <NavLink
            to="/admin/articles"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition 
              ${isActive ? "bg-white text-[#CA3561]" : "hover:bg-[#BC0707]"}`
            }
          >
            <FaBook /> Articles
          </NavLink>

          <NavLink
            to="/admin/facts"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition 
              ${isActive ? "bg-white text-[#CA3561]" : "hover:bg-[#BC0707]"}`
            }
          >
            <FaList /> Facts
          </NavLink>

          <hr />
          <NavLink onClick={handelLogout} className="flex items-center gap-3 px-4 py-2 rounded-md transition cursor-pointer hover:bg-[#BC0707]">
            <LogOut /> LogOut
          </NavLink>
        </nav>
      </aside>

      {/* Main Area */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
