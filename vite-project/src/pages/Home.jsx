// src/pages/Home.jsx

import { useEffect, useState } from "react";
import axios from "axios";

import HelpCard from "../component/helpcard";
import Hero from "../component/hero";
import PropertyList from "../component/PropertyList";
import ExploreProperties from "./exploreProperty";
import ManrajHero from "./manrajHero";
import Services from "./service";
import ManrajFAQ from "./ManrajFAQ";
import ManrajUpdates from "./ManrajUpdates";
import FeedbackSlider from "./FeedbackSlider";

const Home = () => {
  const [properties, setProperties] = useState([]);

  // ✅ SINGLE API CALL
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get("/api/property/all", {
          withCredentials: true,
        });

        if (Array.isArray(res.data)) {
          setProperties(res.data);
        } else {
          setProperties([]);
        }
      } catch (error) {
        console.log(error);
        setProperties([]);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      {/* HERO */}
      <Hero />
      <HelpCard />

       {/* <div className="relative z-0 mt-20">
        <HelpCard />
      </div> */}

      <div className="relative z-0 mt-20">
        <PropertyList properties={properties} />
      </div>

      <div className="relative z-0 mt-24">
        <ManrajHero properties={properties} />
      </div>

      <div className="relative z-0 mt-24">
        <ExploreProperties properties={properties} />
      </div>
      <ManrajFAQ/>
      <ManrajUpdates/>
      <FeedbackSlider/>

      <Services />
    </div>
  );
};

export default Home;
