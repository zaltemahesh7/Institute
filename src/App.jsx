import { useState } from "react";
import NavBar from "./Navbar/Navbar";
import Footer from './Footer/Footer'
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import CircularMenu from "./CircularMenu";
import AnimatedMug from "./components/AnimatedMug";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      {/* <CircularMenu /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
      </Routes>
      {/* <AnimatedMug /> */}
      <Footer />
    </>
  );
}

export default App;
