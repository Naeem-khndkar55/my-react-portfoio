import "./App.css";
import About from "./components/about/About";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import Qualifications from "./components/qualifications/Qualifications";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Contact from "./components/conatact/Contact";
function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualifications />
        <Contact />
      </main>
    </>
  );
}

export default App;
