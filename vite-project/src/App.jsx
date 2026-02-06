// src/App.jsx
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./component/Header";
import Footer from "./component/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
import Contact from "./pages/Contect";
import Information from "./component/Information";
import SignIn from "./pages/SignIn";
import Signout from "./pages/Signout";
import Profile from "./pages/Profile";

// ✅ FIXED IMPORT

import AddProperty from "./pages/AddProperty";

// Admin
import Admin from "./pages/admin";
import AdminLogin from "./pages/admin.login";

// Route protection
import PrivateRoute from "./component/PrivateRoute";


function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/information" element={<Information />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<Signout />} />

        {/* ✅ PROPERTY VIEW */}
        
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="/admin/login" element={<AdminLogin />} />

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
