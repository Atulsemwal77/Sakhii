// import React from 'react'
// import FaqSection from './components/Faq'
// import AboutSection from './components/About'
// import CommunitySection from './components/Community'
// import Testimonial from './components/Testimonial'
// import Helth from './components/Helth'

// import BannerSecond from './components/BannerSecond'
// import Banner from './components/Banner'
// import Hero from './components/Hero'

// const App = () => {
//   return (
//     <>
//     <Hero/>
//     <AboutSection/>
//     <Helth/>
//     <Banner/>
//     <BannerSecond/>
//     <Testimonial/>
//     <CommunitySection/>
//     <FaqSection/>
    
//     </>
//   )
// }

// export default App

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import {Toaster } from "react-hot-toast"
import Navbar from "./pages/Navbar";
import TopBar from "./pages/TopBAr";
import Footer from "./pages/Footer";
import DonationForm from "./components/Donation";
import Community from "./pages/Community";

function App() {
  return (
    <AuthProvider>
      <Toaster position="top-right" />
      <BrowserRouter>
       <TopBar/>
       <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/community"
            element={
              <ProtectedRoute>
                <Community />
              </ProtectedRoute>
            }
          />
          <Route path="/donation" element={<DonationForm/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
