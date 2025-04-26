import './App.css'
import AuthPage from "./Components/AuthPages/AuthPage"
import HomePage from './Components/Homepage/HomePage'
import Equipments from './Components/Equipments/Equipments'
import Bookings from './Components/Bookings/Bookings'
import Courts from './Components/Courts/Courts'
import Sports from './Components/Sports/Sports'
import Receipts from './Components/Receipts/Receipts'
import EditCourts from './Components/EditCourt/EditCourt'
import Settings from './Components/settings/settings'
import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/equipments" element={<Equipments />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/courts" element={<Courts />} />
      <Route path="/sports" element={<Sports />} />
      <Route path="/receipts" element={<Receipts />} />
      <Route path="/edit" element={<EditCourts />} />
      <Route path="/settingsPage" element={<Settings />} />
    </Routes>
  )
}

export default App
