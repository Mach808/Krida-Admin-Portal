import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import "./AuthPage.css";

export default function AdminPortal() {
  const navigate = useNavigate();

  // for holding email and password
  const admins = {
    "manan.2427030004@muj.manipal.edu": ["manan@25112005","Manan Choudhary", "Developer"], 
    "aryan.2427030050@muj.manipal.edu": ["aryan@171205","Aryanh Sharma","Developer"]
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission if wrapped in a form
    if(admins[email][0] === password){
      console.log("email verfied")
      navigate('/home');
    }else{
      alert("incorrect email id or password")
    }
    // Reset the input fields
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen w-screen flex justify-center">
      <div className="p-8 mt-10 rounded-lg w-full max-w-md">
        <div className="flex flex-col items-center">
          <img 
            src={logo} 
            alt="krida-logo" 
            className="w-48 h-auto rounded-lg" 
          />
          <hr className="w-full border-t border-black mt-10" />

          <h1 className="text-3xl mt-7 uppercase mb-10 tracking-[0.3em] text-black font-medium text-center whitespace-nowrap">
            Admin Portal
          </h1>
            <h2 className="text-3xl text-black font-semibold mt-3 tracking-wide text-center">
              Log In
            </h2>
          <div>
            <input 
              type="email"
              placeholder="Admin ID"
              className="py-4 ml-20 mt-5 border-0 border-b-1 placeholder-black text-xl focus:outline-none font-semibold"
              required
              style={{ color: '#091629' }} 
              onChange={(e) => setEmail(e.target.value)}
              value={email} // Controlled input
            />
            <input 
              type="password"
              placeholder="Password"
              className="py-4 ml-20 mt-5 border-0 border-b-1 placeholder-black text-xl focus:outline-none font-semibold"
              required
              style={{ color: '#091629' }} 
              onChange={(e) => setPassword(e.target.value)}
              value={password} // Controlled input
            />
          </div>
          <button 
            className="button-login mt-7 text-blue-200" 
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
