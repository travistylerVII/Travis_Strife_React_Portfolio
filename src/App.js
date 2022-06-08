import { useState, useEffect } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const [modalBlurr, setModalBlurr] = useState(false);

  const [showBg, setShowBg] = useState(true);
  const controlBg = () => {
    if (window.scrollY > 200) {
      setShowBg(false);
    } else {
      setShowBg(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", controlBg);
    return () => {
      window.removeEventListener("scroll", controlBg);
    };
  }, []);
  return (
    <div className={modalBlurr === true ? "blurr" : ""}>
      <div
        className={
          "bg-hero " + (showBg === true ? "bg-fade-in" : "bg-fade-out")
        }
      ></div>
      <Navbar />
      <Home />
      <Portfolio setValue={setModalBlurr} />
      <About />
      <Contact />
      <div className="footer text-center text-white py-10">
        © 2022 Moore Media LLC All Rights Reserved
      </div>
    </div>
  );
}

export default App;
