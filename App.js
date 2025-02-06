import React from "react";
import Header from "./components/Header";
import AboutUs from "./components/About";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./components/Serices";
import Portfolio from "./components/Portfolio";
import Team from "./components/team";
import Pricing from "./components/pricing";
import ContactUs from "./components/Contact";

function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
