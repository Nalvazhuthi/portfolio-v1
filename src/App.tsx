import Hero from "./components/hero";
import Nav from "./components/nav";
import "./style/main.scss";

const App = () => {
  return (
    <div className="content-container">
      <Nav />
      <Hero />
    </div>
  );
};

export default App;
