import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingHome from "./components/LandingHome/LandingHome";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<LandingHome />} />
          <Route path="/about" element={<About />} />

        </Routes>
      </header>
    </div>
  );
}

export default App;
