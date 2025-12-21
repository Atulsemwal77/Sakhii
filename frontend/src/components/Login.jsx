// import { useState } from "react";
// import { useAuth } from "../context/AuthContext";
// import api from "../api";
// import { toast } from "react-hot-toast";
// import { Link, useNavigate } from "react-router-dom";

// import { FiEye, FiEyeOff } from "react-icons/fi";



// const Login = () => {
//   const { login } = useAuth();
//   const [form, setForm] = useState({ email: "", password: "" });
//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);


//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await api.post("/auth/login", form);
//       login(res.data.user); // store user in context
//       toast.success("✅ Login successful!");
//       navigate("/"); // redirect to dashboard
//     } catch (err) {
//       toast.error(err.response?.data?.message || "❌ Login failed");
//     }
//   };

//   return (
//     <>
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
//         <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             name="email"
//             type="email"
//             placeholder="Email"
//             value={form.email}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />
//           <input
//             name="password"
//             type="password"
//             placeholder="Password"
//             value={form.password}
//             onChange={handleChange}
//             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           />
//           <button
//             type="submit"
//             className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
//           >
//             Login
//           </button>
//         </form>
//         <p className="text-sm text-center mt-4">
//           Don’t have an account?{" "}
//           <Link to="/signup" className="text-indigo-600 hover:underline">
//             Sign Up
//           </Link>
//         </p>
//       </div>
//     </div>


//     </>
//   );
// };

// export default Login;

import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import api from "../api";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { FiEye, FiEyeOff, FiMail, FiLock } from "react-icons/fi";

const Login = () => {
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation()
  const prvState = location.state?.from?.pathname || "/";
  

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", form);
      login(res.data.user); // store user in context
      toast.success("✅ Login successful!");
      navigate(prvState );
    } catch (err) {
      toast.error(err.response?.data?.message || "❌ Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-50 py-12 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-center ">Sign In</h1>
        <p className="text-center mb-6 text-gray-500">
          Welcome back! Please enter your details.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="relative">
              <FiMail className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full pl-10 pr-3 py-2 border rounded-md focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <FiLock className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full pl-10 pr-10 py-2 border rounded-md focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 text-gray-500"
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>
          </div>

          {/* Remember me + Forgot password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <Link
              to="/forgot-password"
              className="text-purple-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#CA3561] text-white py-2 rounded-md  transition"
          >
            Sign In
          </button>
        </form>

        {/* Extra links */}
        <p className="text-sm text-center mt-4 text-gray-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-[#CA3561] hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
