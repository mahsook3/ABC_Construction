import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Services from "./components/Services";
import Features from "./components/Features";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero id="hero" />
      <Banner />
      <Services id="services" />
      <Features id="features" />
      <Contact id="contact" />
      <About id="about" />
      <Footer />
    </>
  );
}

export default App;
