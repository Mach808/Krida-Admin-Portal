import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css';
import { users } from '../../database';


export default function AdminPortal() {
  const domains = ['muj.manipal.edu'];
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      setLoggedInUser(JSON.parse(storedUser));
    }
  }, []);

  // Create regex from allowed domains
  const domainPattern = domains
    .map((domain) => domain.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|');
  const emailRegex = new RegExp(`^[a-zA-Z0-9._%+-]+@(${domainPattern})$`, 'i');

  const handleLogin = (e) => {
    e.preventDefault();

    // ✅ Domain check before continuing
    if (!emailRegex.test(email)) {
      alert('Email domain not allowed. Use a valid admin email.');
      return;
    }

    const foundUser = users.find((user) => user.email === email);

    if (foundUser && foundUser.password === password) {
      console.log('Email verified');
      setLoggedInUser(foundUser);
      localStorage.setItem('loggedInUser', JSON.stringify(foundUser));
      navigate('/home');
    } else {
      alert('Incorrect email ID or password');
    }

    setEmail('');
    setPassword('');
  };

  return (
    <div className="min-h-screen w-screen flex justify-center">
      <div className="p-8 mt-10 rounded-lg w-full max-w-md">
        <div className="flex flex-col items-center">
          <img src={logo} alt="krida-logo" className="w-48 h-auto rounded-lg" />
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
              value={email}
            />
            <input
              type="password"
              placeholder="Password"
              className="py-4 ml-20 mt-5 border-0 border-b-1 placeholder-black text-xl focus:outline-none font-semibold"
              required
              style={{ color: '#091629' }}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button className="button-login mt-7 text-blue-200" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
