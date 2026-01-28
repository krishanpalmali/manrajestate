// src/pages/Home.jsx


import HelpCard from "../component/helpcard";
import Hero from "../component/hero";
import PropertyList from "../component/PropertyList";

import Services from "./service";

// import HelpCard from "../components/HelpCard";

const Home = () => {
  return (
    <div className="relative h-screen w-full">
      <Hero />
      <HelpCard />
      <PropertyList/>
      <Services />

      
     
    </div>
  );
};

export default Home;
