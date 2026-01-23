// src/pages/Home.jsx

import Footer from "../component/Footer";
import HelpCard from "../component/helpcard";
import Hero from "../component/hero";

import Services from "./service";

// import HelpCard from "../components/HelpCard";

const Home = () => {
  return (
    <div className="relative h-screen w-full">
      <Hero />
      <HelpCard />
      <Services />
      <Footer/>
     
    </div>
  );
};

export default Home;
