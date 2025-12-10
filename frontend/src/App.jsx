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
import Yojanas from "./components/Yojanas";
import YojanaDetail from "./components/YojanaDetails";
import Tracker from "./components/Tracker";
import ScrollToTop from "./components/ScrollToTop";
import Education from "./components/Education";
import ArticlesPage from "./components/Educationcompo/pages/ArticlesPage";
import BlogsPage from "./components/Educationcompo/pages/BlogsPage";
import FactsPage from "./components/Educationcompo/pages/FactsPage";
import VideosPage from "./components/Educationcompo/pages/VideosPage";
import ArticleDetailsPage from "./components/Educationcompo/pages/ArticleDetailsPage";
import Shop from "./components/shop/Shop";
import Cart from "./components/shop/Cart";




function App() {
  return (
    <AuthProvider>
      <Toaster position="top-right" />
      <BrowserRouter>
       <TopBar/>

       <Navbar/>
       <ScrollToTop/>
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
            path="/education"
            element={
                <Education />
            }
            />
<Route path="/education/videos" element={<VideosPage />} />
<Route path="/education/blogs" element={<BlogsPage />} />
<Route path="/education/articles" element={<ArticlesPage />} />
<Route path="/education/facts" element={<FactsPage />} />
 {/* <Route path="/articles/:id" element={<ArticleDetailsPage/>} /> */}
 <Route path="/articles/:id" element={<ArticleDetailsPage />} />

          <Route
            path="/community"
            element={
              <ProtectedRoute>
                <Community />
              </ProtectedRoute>
            }
          />
          <Route path="/Tracker" element={
             <ProtectedRoute>
            <Tracker />
            </ProtectedRoute>
            } />

          <Route path="/yojanas" element={
             <ProtectedRoute>
            <Yojanas />
            </ProtectedRoute>
            } />

          <Route path="/donation" element={<DonationForm/>}/>
          <Route path="/yojana/:yojanaSlug" element={<YojanaDetail />} />
          <Route
            path="/shop"
            element={
              <ProtectedRoute>
                <Shop />
              </ProtectedRoute>
            }
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
