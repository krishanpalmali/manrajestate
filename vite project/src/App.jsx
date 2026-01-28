// src/App.jsx
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import Signout from "./pages/Signout";
import Header from "./component/Header";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/admin.login";
import PrivateRoute from "./component/PrivateRoute";
import Contact from "./pages/Contect";
import Footer from "./component/Footer";
import Information from "./component/Information";

// Property system pages
import AddProperty from "./pages/AddProperty";
import PropertyDetail from "./pages/PropertyDetail";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<Signout />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/information" element={<Information />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Property Detail Page (for visitors) */}
        <Route path="/property/:id" element={<PropertyDetail />} />

        {/* User Protected Routes */}
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* Admin Protected Routes */}
        <Route element={<PrivateRoute adminOnly={true} />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/add-property" element={<AddProperty />} />
        </Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
