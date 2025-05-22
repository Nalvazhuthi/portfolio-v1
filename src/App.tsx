import About from "./components/about";
import Contact from "./components/contact";
import Hero from "./components/hero";
import Nav from "./components/nav";
import Works from "./components/works";
import "./style/main.scss";

const App = () => {
  return (
    <div className="content-container">
      {/* <Nav /> */}
      <Hero />
      <About />
      <Works />
      {/* <Contact /> */}
    </div>
  );
};

export default App;
