import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Welcome from "./components/Welcome";
import Specialities from "./components/Specialities";
import Doctors from "./components/Doctors";
import CareSpecialties from "./Carespecialist";
import Events from "./components/Events";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Card />
      <Welcome />
      <Specialities />
      <Doctors />
      <CareSpecialties /> 
      <Events />
    </div>
  );
}

export default App;
