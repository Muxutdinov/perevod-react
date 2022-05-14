import React from "react";
import Advantages from "../components/Advantages";
import Cards from "../components/Cards";
import CardsSlider from "../components/CardsSlider";
import Clients from "../components/Clients";
import Formblock from "../components/Formblock";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Social from "../components/Social";
// import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Social />
      {/* <Cards/> */}
      {/* <Formblock/> */}
      <CardsSlider />
      <Advantages />
      <Clients />
      {/* <Map/> */}
      {/* <Footer/> */}
    </div>
  );
};

export default Home;
