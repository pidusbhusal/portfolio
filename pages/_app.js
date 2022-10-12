import { Herosection } from "./Herosection";
import { Navbar } from "./Navbar";
import { Work } from "./Work";
import "../styles/main.css";
import Aboutme from "./Aboutme";

function App() {
  return (
    <div className="App">
      <div className="animating_background">
        
      </div>
      <Navbar />
      <Herosection className="Herosection" />
      <Work />
      <Aboutme/>
    </div>
  );
}

export default App;
