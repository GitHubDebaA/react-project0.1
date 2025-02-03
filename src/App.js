import React from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Homepage from "./Homepage/Homepage";
import AboutUs from "./AboutUs/AboutUs";
import Services from "./Services/Services";
import ContactUs from "./ContactUs/ContactUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/about" exact element={<AboutUs />} />
          <Route path="/services" exact element={<Services />} />
          <Route path="/contact" exact element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;