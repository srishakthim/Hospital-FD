import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Specialities from "./pages/Specialities";
import FindDoctor from "./pages/Find-Doctor";
import Academics from "./pages/Academics";
import Patient from "./pages/Patient-Care";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/specialities" element={<Specialities />} />
        <Route path="/find-doctor" element={<FindDoctor />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/patient-care" element={<Patient />} />





      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
