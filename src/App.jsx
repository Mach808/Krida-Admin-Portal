import './App.css'
import AuthPage from "./Components/AuthPages/AuthPage"
import HomePage from './Components/Homepage/HomePage'
import Equipments from './Components/screen/Equipments'
import Bookings from './Components/screen/Bookings'
import Courts from './Components/screen/Courts'
import Sports from './Components/screen/Sports'
import Receipts from './Components/screen/Receipts'
import EditCourts from './Components/screen/EditCourt'
import Settings from './Components/settings/settings'
import { Routes, HashRoute } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import TeamBooking from './Components/screen/TeamBooking.jsx'

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
      <Route path = "/teambookings" element={<TeamBooking/>} />
    </Routes>
  )
}

export default App
can u fix it
