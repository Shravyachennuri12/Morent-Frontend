<<<<<<< HEAD
=======
import React from "react";
>>>>>>> 2384c91 (26/03/2025)
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import SearchForm from "../components/LocationSelector"; // SearchForm is LocationSelector
import CarList from "../components/CarList";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

<<<<<<< HEAD
const Home = () => {
  return (
    <div>
      <Header />
=======
const Home = ({ isGuest }) => {
  return (
    <div>
      <Header isGuest={isGuest} />
>>>>>>> 2384c91 (26/03/2025)
      <HeroSection />
      <SearchForm />
      <CarList />
      <Footer />
    </div>
  );
};
<<<<<<< HEAD
=======

>>>>>>> 2384c91 (26/03/2025)
export default Home;