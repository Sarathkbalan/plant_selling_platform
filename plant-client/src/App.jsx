import { Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "./layouts/MainLayout";
import SellerLayout from "./layouts/SellerLayout";
import AdminLayout from "./layouts/AdminLayout";

// Public Pages
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

// Customer Pages
import Home from "./pages/Customer/Home";
import Plants from "./pages/Customer/Plants";
import PlantDetails from "./pages/Customer/PlantDetails";
import Cart from "./pages/Customer/Cart";

// Seller Pages
import Dashboard from "./pages/seller/Dashboard";
import SellerPlants from "./pages/seller/Plants";
import AddPlant from "./pages/seller/AddPlant";
import EditPlant from "./pages/seller/EditPlant";
import Orders from "./pages/seller/Orders";
import OrderDetails from "./pages/seller/Orderdetails";
import Inventory from "./pages/seller/Inventory";
import Profile from "./pages/seller/Profile";

// Admin Pages
import AdminDashboard from "./pages/Admin/Dashboard";
import Users from "./pages/Admin/User";
import Sellers from "./pages/Admin/Seller";
import Categories from "./pages/Admin/Categories";
import AdminPlants from "./pages/Admin/Plants";
import Reports from "./pages/Admin/Reports";
function App() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Customer */}
      <Route element={<MainLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/plants/:id" element={<PlantDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Route>

      {/* Seller */}
      <Route element={<SellerLayout />}>
        <Route path="/seller" element={<Dashboard />} />
        <Route path="/seller/plants" element={<SellerPlants />} />
        <Route path="/seller/add" element={<AddPlant />} />
        <Route path="/seller/plants/edit/:id" element={<EditPlant />} />
        <Route path="/seller/orders" element={<Orders />} />
        <Route path="/seller/orders/:id" element={<OrderDetails />} />
        <Route path="/seller/inventory" element={<Inventory />} />
        <Route path="/seller/profile" element={<Profile />} />
      </Route>

      {/* Admin */}
      <Route element={<AdminLayout />}>
        {/* Admin routes */}
          
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/sellers" element={<Sellers />} />
        <Route path="/admin/categories" element={<Categories />} />
        <Route path="/admin/plants" element={<AdminPlants />} />
        <Route path="/admin/reports" element={<Reports />} />
      
      </Route>
    </Routes>
  );
}

export default App;