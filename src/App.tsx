import "./style/main.scss";
import Nav from "./components/nav";
import Home from "./components/home";
import Skills from "./components/skills";

const App = () => {
  return (
    <div className="content-container">
      {/* <Nav /> */}
      <Home />
      <Skills />
    </div>
  );
};

export default App;
