// import React, { useState } from "react";
// import { FiMail, FiLock, FiUser, FiPhone, FiEye, FiEyeOff, FiUserPlus, FiArrowLeft } from "react-icons/fi";
// import { Link } from "react-router-dom";
// import { toast } from "react-toastify";

// const RegisterComponents = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [showPass, setShowPass] = useState(false);
//   const [showConfirmPass, setShowConfirmPass] = useState(false);

//   const handleBack = () => {
//     window.history.back();
//   };

//   const handleRegister = () => {
//     const { name, email, phone, password, confirmPassword } = form;

//     if (!name || !email || !phone || !password || !confirmPassword) {
//       toast.error("Please fill all fields!");
//       return;
//     }

//     if (!email.includes("@") || !email.includes(".")) {
//       toast.error("Invalid email format!");
//       return;
//     }

//     if (password.length < 6) {
//       toast.error("Password must be at least 6 characters!");
//       return;
//     }

//     if (password !== confirmPassword) {
//       toast.error("Passwords do not match!");
//       return;
//     }

//     const newAccount = { name, email, phone, password };

//     // Save to Local Storage
//     localStorage.setItem("adminAccount", JSON.stringify(newAccount));

//     toast.success("Registration Successful! Please Login.");

//     // Redirect to Login
//     setTimeout(() => {
//       window.location.href = "/login";
//     }, 1200);
//   };

//   return (
//     <div className="w-full h-screen flex justify-center items-center bg-gray-100 px-4">
//       <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8">
        
//         {/* Back Button */}
//         <button
//           onClick={handleBack}
//           className="flex items-center gap-2 text-gray-600 mb-4 hover:text-gray-900 transition"
//         >
//           <FiArrowLeft size={20} /> 
//           <Link to={"/Login"}>Back</Link>
//         </button>

//         <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
//           Create Account
//         </h2>

//         {/* Name */}
//         <div className="mb-4">
//           <label className="font-semibold text-gray-700">Full Name</label>
//           <div className="flex items-center border rounded-lg px-3 mt-1">
//             <FiUser className="text-gray-500" />
//             <input
//               type="text"
//               placeholder="Enter full name"
//               className="w-full p-2 outline-none"
//               value={form.name}
//               onChange={(e) => setForm({ ...form, name: e.target.value })}
//             />
//           </div>
//         </div>

//         {/* Email */}
//         <div className="mb-4">
//           <label className="font-semibold text-gray-700">Email</label>
//           <div className="flex items-center border rounded-lg px-3 mt-1">
//             <FiMail className="text-gray-500" />
//             <input
//               type="email"
//               placeholder="Enter email"
//               className="w-full p-2 outline-none"
//               value={form.email}
//               onChange={(e) => setForm({ ...form, email: e.target.value })}
//             />
//           </div>
//         </div>

//         {/* Phone */}
//         <div className="mb-4">
//           <label className="font-semibold text-gray-700">Phone</label>
//           <div className="flex items-center border rounded-lg px-3 mt-1">
//             <FiPhone className="text-gray-500" />
//             <input
//               type="text"
//               placeholder="01XXXXXXXXX"
//               className="w-full p-2 outline-none"
//               value={form.phone}
//               onChange={(e) => setForm({ ...form, phone: e.target.value })}
//             />
//           </div>
//         </div>

//         {/* Password */}
//         <div className="mb-4">
//           <label className="font-semibold text-gray-700">Password</label>
//           <div className="flex items-center border rounded-lg px-3 mt-1">
//             <FiLock className="text-gray-500" />
//             <input
//               type={showPass ? "text" : "password"}
//               placeholder="Enter password"
//               className="w-full p-2 outline-none"
//               value={form.password}
//               onChange={(e) => setForm({ ...form, password: e.target.value })}
//             />
//             <button onClick={() => setShowPass(!showPass)} className="ml-2">
//               {showPass ? <FiEyeOff /> : <FiEye />}
//             </button>
//           </div>
//         </div>

//         {/* Confirm Password */}
//         <div className="mb-6">
//           <label className="font-semibold text-gray-700">Confirm Password</label>
//           <div className="flex items-center border rounded-lg px-3 mt-1">
//             <FiLock className="text-gray-500" />
//             <input
//               type={showConfirmPass ? "text" : "password"}
//               placeholder="Re-enter password"
//               className="w-full p-2 outline-none"
//               value={form.confirmPassword}
//               onChange={(e) =>
//                 setForm({ ...form, confirmPassword: e.target.value })
//               }
//             />
//             <button
//               onClick={() => setShowConfirmPass(!showConfirmPass)}
//               className="ml-2"
//             >
//               {showConfirmPass ? <FiEyeOff /> : <FiEye />}
//             </button>
//           </div>
//         </div>

//         {/* Register Button */}
//         <button
//           onClick={handleRegister}
//           className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700
//           flex justify-center items-center gap-2 text-lg font-semibold transition"
//         >
//           <FiUserPlus size={20} />
//           Register
//         </button>
//       </div>
//     </div>
//   );
// };

// export default RegisterComponents;


import React, { useState } from "react";
import {
  FiMail,
  FiLock,
  FiUser,
  FiPhone,
  FiEye,
  FiEyeOff,
  FiUserPlus,
  FiArrowLeft,
} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterComponents = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleBack = () => navigate(-1); // SPA back

  const handleRegister = () => {
    const { name, email, phone, password, confirmPassword } = form;

    // Validation
    if (!name || !email || !phone || !password || !confirmPassword) {
      toast.error("Please fill all fields!");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      toast.error("Invalid email format!");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters!");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const newAccount = { name, email, phone, password };

      // Save to Local Storage
      localStorage.setItem("adminAccount", JSON.stringify(newAccount));

      toast.success("Registration Successful! Please Login.");
      setLoading(false);

      // Redirect to Login page
      navigate("/login");
    }, 1000);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8">
        
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-gray-600 mb-4 hover:text-gray-900 transition"
        >
          <FiArrowLeft size={20} /> Back
        </button>

        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Create Account
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label className="font-semibold text-gray-700">Full Name</label>
          <div className="flex items-center border rounded-lg px-3 mt-1">
            <FiUser className="text-gray-500" />
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full p-2 outline-none"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="font-semibold text-gray-700">Email</label>
          <div className="flex items-center border rounded-lg px-3 mt-1">
            <FiMail className="text-gray-500" />
            <input
              type="email"
              placeholder="Enter email"
              className="w-full p-2 outline-none"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="font-semibold text-gray-700">Phone</label>
          <div className="flex items-center border rounded-lg px-3 mt-1">
            <FiPhone className="text-gray-500" />
            <input
              type="text"
              placeholder="01XXXXXXXXX"
              className="w-full p-2 outline-none"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="font-semibold text-gray-700">Password</label>
          <div className="flex items-center border rounded-lg px-3 mt-1">
            <FiLock className="text-gray-500" />
            <input
              type={showPass ? "text" : "password"}
              placeholder="Enter password"
              className="w-full p-2 outline-none"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="ml-2"
            >
              {showPass ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="font-semibold text-gray-700">Confirm Password</label>
          <div className="flex items-center border rounded-lg px-3 mt-1">
            <FiLock className="text-gray-500" />
            <input
              type={showConfirmPass ? "text" : "password"}
              placeholder="Re-enter password"
              className="w-full p-2 outline-none"
              value={form.confirmPassword}
              onChange={(e) =>
                setForm({ ...form, confirmPassword: e.target.value })
              }
            />
            <button
              type="button"
              onClick={() => setShowConfirmPass(!showConfirmPass)}
              className="ml-2"
            >
              {showConfirmPass ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        </div>

        {/* Register Button */}
        <button
          onClick={handleRegister}
          disabled={loading}
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700
          flex justify-center items-center gap-2 text-lg font-semibold transition"
        >
          {loading ? "Registering..." : <><FiUserPlus size={20} /> Register</>}
        </button>
        <button> <Link to={"/Login"}></Link> </button>
      </div>
    </div>
  );
};

export default RegisterComponents;
 //fhjdfklajdsflkakldsfj