// import React, { useState } from "react";
// import { FiMail, FiLock, FiEye, FiEyeOff, FiLogIn, FiArrowLeft, FiUserPlus } from "react-icons/fi";
// import { toast } from "react-toastify";
// import { ClipLoader } from "react-spinners";
// import { Link } from "react-router-dom";

// const LoginComponents = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPass, setShowPass] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const adminAccount = {
//     email: "admin@business.com",
//     password: "admin123",
//   };

//   const handleLogin = () => {
//     if (!email || !password) {
//       toast.error("Please fill all fields!");
//       return;
//     }

//     setLoading(true);

//     setTimeout(() => {
//       if (email === adminAccount.email && password === adminAccount.password) {
//         localStorage.setItem("authAdmin", JSON.stringify({ loggedIn: true }));
//         toast.success("Login Successful!");
//         window.location.href = "/Login";
//       } else {
//         toast.error("Invalid email or password!");
//       }
//       setLoading(false);
//     }, 1000);
//   };

//  // Go to previous page 
//   const handleBack = () => {
//     window.history.back(); 
//   };

//  // Redirect to Register Page
//   const handleRegister = () => {
//     window.location.href = "/Register"; 
//   };

//   return (
//     <div className="w-full h-screen flex justify-center items-center bg-gray-100 px-4">
//       <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8">
        
//         {/* Back Button (Top Left) */}
//         <button
//           onClick={handleBack}
//           className="flex items-center gap-2 text-gray-600 mb-4 hover:text-gray-900 transition"
//         >
//           <FiArrowLeft size={20} /> 
//           <Link to={"/Register"}>Back</Link>
//         </button>

//         <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
//           Admin Login
//         </h2>

//         {/* Email */}
//         <div className="mb-4">
//           <label className="text-gray-700 font-semibold">Email</label>
//           <div className="flex items-center border rounded-lg px-3 mt-1">
//             <FiMail className="text-gray-500" />
//             <input
//               type="email"
//               className="w-full p-2 outline-none"
//               placeholder="Enter admin email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//         </div>

//         {/* Password */}
//         <div className="mb-4">
//           <label className="text-gray-700 font-semibold">Password</label>
//           <div className="flex items-center border rounded-lg px-3 mt-1">
//             <FiLock className="text-gray-500" />
//             <input
//               type={showPass ? "text" : "password"}
//               className="w-full p-2 outline-none"
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <button onClick={() => setShowPass(!showPass)} className="ml-2">
//               {showPass ? <FiEyeOff /> : <FiEye />}
//             </button>
//           </div>
//         </div>

//         {/* Login Button */}
//         <button
//           onClick={handleLogin}
//           className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700
//           flex justify-center items-center gap-2 text-lg font-semibold transition"
//         >
//           {loading ? (
//             <ClipLoader size={22} />
//           ) : (
//             <>
//               <FiLogIn size={20} />
//               Login
//             </>
//           )}
//         </button>

//         {/* Register Button */}
//         <button
//           onClick={handleRegister}
//           className="w-full mt-4 border border-blue-600 text-blue-600 p-3 rounded-lg 
//           hover:bg-blue-50 flex justify-center items-center gap-2 text-lg font-semibold transition"
//         >
//           <FiUserPlus size={20} />
//           Register
//         </button>
//       </div>
//     </div>
//   );
//  };

//  export default LoginComponents;

import React, { useState } from "react";
import { FiMail, FiLock, FiEye, FiEyeOff, FiLogIn, FiArrowLeft, FiUserPlus } from "react-icons/fi";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const LoginComponents = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const adminAccount = {
    email: "admin@business.com",
    password: "admin123",
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill all fields!");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      if (email === adminAccount.email && password === adminAccount.password) {
        localStorage.setItem("authAdmin", JSON.stringify({ loggedIn: true }));
        toast.success("Login Successful!");
        navigate("/Dashboard"); // Redirect to dashboard
      } else {
        toast.error("Invalid email or password!");
      }
      setLoading(false);
    }, 1000);
  };

  const handleBack = () => navigate(-1); // Go back
  const handleRegister = () => navigate("/Register"); // Go to register page

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
          Admin Login
        </h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">

          {/* Email */}
          <div>
            <label className="text-gray-700 font-semibold">Email</label>
            <div className="flex items-center border rounded-lg px-3 mt-1">
              <FiMail className="text-gray-500" />
              <input
                type="email"
                className="w-full p-2 outline-none"
                placeholder="Enter admin email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-700 font-semibold">Password</label>
            <div className="flex items-center border rounded-lg px-3 mt-1">
              <FiLock className="text-gray-500" />
              <input
                type={showPass ? "text" : "password"}
                className="w-full p-2 outline-none"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="button" onClick={() => setShowPass(!showPass)} className="ml-2">
                {showPass ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700
              flex justify-center items-center gap-2 text-lg font-semibold transition"
          >
            {loading ? <ClipLoader size={22} /> : <><FiLogIn size={20} /> Login</>}
          </button>
        </form>

        {/* Register Button */}
        <button
          onClick={handleRegister}
          className="w-full mt-4 border border-blue-600 text-blue-600 p-3 rounded-lg 
            hover:bg-blue-50 flex justify-center items-center gap-2 text-lg font-semibold transition"
        >
          <FiUserPlus size={20} /> Register
        </button>
      </div>
    </div>
  );
};

export default LoginComponents;
