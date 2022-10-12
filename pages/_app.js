import { Herosection } from "./Herosection";
import { Navbar } from "./Navbar";
import { Work } from "./Work";
import "../styles/main.css";
import Aboutme from "./Aboutme";
import Connect_section from "./Connect";

function App() {
  return (
    <div className="App">
      <div className="animating_background"></div>
      <Navbar />
      <Herosection className="Herosection" />
      <Work />
      <Aboutme />
      <Connect_section />
    </div>
  );
}

export default App;
