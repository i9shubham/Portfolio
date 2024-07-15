import React from "react";
import NavPanel from "./Components/NavPanel";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/home";
import Projects from "./Pages/projects";
import TechStack from "./Pages/techStack";

function App() {
  return (
    <>
      <Home />
      <TechStack />
      <Projects />
      <NavPanel />
      <About />
      <Contact />
    </>
  );
}

export default App;
