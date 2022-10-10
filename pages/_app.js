import { Herosection } from "./Herosection";
import { Navbar } from "./Navbar";
import { Work } from "./Work";
import "../styles/main.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Herosection className="Herosection" />
      <Work />
    </div>
  );
}

export default App;
