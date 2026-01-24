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
import Admin from "./pages/admin";
import AdminLogin from "./pages/admin.login";
import PrivateRoute from "./component/PrivateRoute";
import Contact from "./pages/Contact";
import Footer from "./component/Footer";
import Information from "./component/Information";


 // 👈 YAHI CHANGE

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<Signout />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/information" element={<Information />} />

        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route element={<PrivateRoute adminOnly={true} />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>


      <Footer/>
    </BrowserRouter>
   
)}

export default App;
