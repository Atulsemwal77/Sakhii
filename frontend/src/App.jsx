
import { BrowserRouter, Routes, Route,RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { Toaster } from "react-hot-toast";
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
import AdminLogin from "./Admin/AdminLogin"; 
import MainLayout from "./pages/MainLayout";
import AdminLayout from "./Admin/AdminLayout";
import AdminDashboard from "./Admin/Pages/AdminDashboard";
import AddBlog from "./Admin/Pages/AdminBLog";
import VideosAdmin from "./Admin/Pages/VideosAdmin";
import ArticlesAdmin from "./Admin/Pages/ArticlesAdmin";
import FactsAdmin from "./Admin/Pages/FactsAdmin";
import AdminProtectedRoute from "./Admin/AdminProtectedRoute";


const router = createBrowserRouter([
  {
    element: <MainLayout />,   // layout wrapper
    children: [
      { path: "/", element: <Home /> },
      { path: "/signup", element: <Signup /> },
      { path: "/login", element: <Login /> },

      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },

      { path: "/education", element: <Education /> },
      { path: "/education/videos", element: <VideosPage /> },
      { path: "/education/blogs", element: <BlogsPage /> },
      { path: "/education/articles", element: <ArticlesPage /> },
      { path: "/education/facts", element: <FactsPage /> },
      { path: "/articles/:id", element: <ArticleDetailsPage /> },

      {
        path: "/community",
        element: (
          <ProtectedRoute>
            <Community />
          </ProtectedRoute>
        ),
      },

      {
        path: "/tracker",
        element: (
          <ProtectedRoute>
            <Tracker />
          </ProtectedRoute>
        ),
      },

      {
        path: "/yojanas",
        element: (
          <ProtectedRoute>
            <Yojanas />
          </ProtectedRoute>
        ),
      },

      { path: "/yojana/:yojanaSlug", element: <YojanaDetail /> },
      { path: "/donation", element: <DonationForm /> },

      {
        path: "/shop",
        element: (
          <ProtectedRoute>
            <Shop />
          </ProtectedRoute>
        ),
      },

      { path: "/cart", element: <Cart /> },
    ],
  }, 

  {
  path: "/admin",
  element: (
    <AdminProtectedRoute>
      <AdminLayout />
    </AdminProtectedRoute>
  ),
  children: [
    { index: true, element: <AdminDashboard /> },
    { path: "add-blog", element: <AddBlog /> },
    { path: "videos", element: <VideosAdmin /> },
    { path: "articles", element: <ArticlesAdmin /> },
    { path: "facts", element: < FactsAdmin/> },
  ],
},


  // routes WITHOUT layout
  { path: "/admin/login", element: <AdminLogin /> },
]);



function App() {
  return (
    // <AuthProvider>
    //   <Toaster position="top-right" />
    //   <BrowserRouter>
    //     <TopBar />

    //     <Navbar />
    //     <ScrollToTop />
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/signup" element={<Signup />} />
    //       <Route path="/login" element={<Login />} />
    //       <Route
    //         path="/dashboard"
    //         element={
    //           <ProtectedRoute>
    //             <Dashboard />
    //           </ProtectedRoute>
    //         }
    //       />
    //       <Route path="/education" element={<Education />} />
    //       <Route path="/education/videos" element={<VideosPage />} />
    //       <Route path="/education/blogs" element={<BlogsPage />} />
    //       <Route path="/education/articles" element={<ArticlesPage />} />
    //       <Route path="/education/facts" element={<FactsPage />} />
    //       {/* <Route path="/articles/:id" element={<ArticleDetailsPage/>} /> */}
    //       <Route path="/articles/:id" element={<ArticleDetailsPage />} />

    //       <Route
    //         path="/community"
    //         element={
    //           <ProtectedRoute>
    //             <Community />
    //           </ProtectedRoute>
    //         }
    //       />
    //       <Route
    //         path="/Tracker"
    //         element={
    //           <ProtectedRoute>
    //             <Tracker />
    //           </ProtectedRoute>
    //         }
    //       />

    //       <Route
    //         path="/yojanas"
    //         element={
    //           <ProtectedRoute>
    //             <Yojanas />
    //           </ProtectedRoute>
    //         }
    //       />

    //       <Route path="/donation" element={<DonationForm />} />
    //       <Route path="/yojana/:yojanaSlug" element={<YojanaDetail />} />
    //       <Route
    //         path="/shop"
    //         element={
    //           <ProtectedRoute>
    //             <Shop />
    //           </ProtectedRoute>
    //         }
    //       />
    //       <Route path="/cart" element={<Cart />} />

    //       <Route path="/admin/login" element={<AdminLogin/>} />

    //     </Routes>
    //     <Footer />
    //   </BrowserRouter>
    // </AuthProvider>
      <AuthProvider>
      <Toaster position="top-right" />
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
