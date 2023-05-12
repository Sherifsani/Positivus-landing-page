import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Partners from "./components/Partners";
import Services from "./components/Services";
import SecondHero from "./components/SecondHero";

export default function App() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <main className="">
      <Navbar toggleMenu={toggleMenu} openMenu={openMenu} />
      <HeroSection />
      <Partners />
      <Services />
      <SecondHero />
    </main>
  );
}
