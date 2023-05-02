import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing.jsx";
import Detail from "./components/Detail/Detail.jsx";
import About from "./components/About/About.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
