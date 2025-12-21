import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Navbar from "./Navbar";
import TopBar from "./TopBAr";
import Footer from "./Footer";

export default function MainLayout() {
  return (
    <>
      <TopBar />
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
}