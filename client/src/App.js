import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Landing from "./Page/Landing";
import Details from "./Page/Details";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Home/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
