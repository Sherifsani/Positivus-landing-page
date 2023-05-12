import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Partners from "./components/Partners";
import Services from "./components/Services";
import SecondHero from "./components/SecondHero";
import Case from "./components/Case";

export default function App() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <main className=" flex-col gap-10">
      <Navbar toggleMenu={toggleMenu} openMenu={openMenu} />
      <HeroSection />
      <Partners />
      <Services />
      <SecondHero />
      <Case/>
    </main>
  );
}
