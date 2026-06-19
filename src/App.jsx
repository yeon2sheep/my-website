import "./App.css";

import Sidebar from "./components/Sidebar";

import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">

      <Sidebar />

      <main className="content">

        <AboutMe />

        <Skills />

        <Projects />

        <Gallery />

        <Footer />

      </main>

    </div>
  );
}

export default App;