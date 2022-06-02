import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "../src/style.scss";
import Home from "./pages/index.js";
import Form from "./pages/form.js";
import Resume from "./pages/resume.js";
  
function App() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<Form />} />
            <Route path="/resume" element={<Resume />} />
            {/* <Route path="/surat" element={<Surat />} />
            <Route path="/ayat/:surat" element={<Ayat />} /> */}
        </Routes>
      </Router>
    </div>
  );
}
  
export default App;