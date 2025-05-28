import About from "./components/about";
import Contact from "./components/contact";
import Hero from "./components/hero";
import Nav from "./components/nav";
import Skills from "./components/skills";
import Works from "./components/works";
import "./style/main.scss";

const App = () => {
  return (
    <div className="content-container">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Works />
      <Contact />
    </div>
  );
};

export default App;
