import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home" 
import {Routes, Route ,useLocation} from "react-router-dom"
import SeatLayout from "./pages/SeatLayout"
import Movies from "./pages/Movies"
import Moviedetails from "./pages/Moviedetails"
import MyBookings from "./pages/MyBookings"
import Favorite from "./pages/Favorite"
import {Toaster} from "react-hot-toast"

function App() {
  <Toaster />
  const isAdminRoute = useLocation().pathname.startsWith('/admin')
  return (
    <>
      {!isAdminRoute && <Navbar />}
   <Routes>
    <Route path="/" element ={<Home />} />
    <Route path="/movies" element ={<Movies />} />
    <Route path="/movies/:id" element ={<Moviedetails />} />
     <Route path="/movies/:id/:date" element ={<SeatLayout />} />
    <Route path="/my-bookings" element ={<MyBookings />} />
    <Route path="/favorite" element ={<Favorite />} />
   </Routes>
       {!isAdminRoute && <Footer />}
    </>
  )
}

export default App
