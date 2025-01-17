import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import image1 from "./assets/screenshot1.png";
import image2 from "./assets/travel.png";
import Footer from "./pages/Footer";

function App() {
  return (
    <div>
      <div className="bg-black min-h-screen flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-4xl p-6">
          {/* Left Side - Image */}
          <div className=" flex -mt-12">
            <div className="hidden md:flex  justify-center -me-32 -mt-3 ">
              <img
                src={image2}
                alt="Instagram Preview"
                className="w-full max-w-[300px] h-[500px] object-cover border-2 border-gray-500 rounded-3xl"
              />
            </div>
            <div className="hidden md:flex  justify-center ">
              <img
                src={image1}
                alt="Instagram Preview"
                className="w-full max-w-[300px] h-[500px] object-cover border-2 bg-black border-gray-500 -mb-5 rounded-3xl"
              />
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="w-full max-w-sm">
            <Login />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
