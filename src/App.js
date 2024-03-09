import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import {
  Route,
  Routes,
  Navigate,
  BrowserRouter
} from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  return (
      <div className="App" >
        <BrowserRouter>
         <Routes>
          <Route path="/" element={<Navbar/>}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/"/>} />
          </Route>
        </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
