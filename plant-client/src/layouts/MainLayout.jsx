import { Outlet } from "react-router-dom";
import Navbar from "../components/customer/Navbar";
import Footer from "../components/customer/Footer";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;