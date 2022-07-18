import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import Landing from "./Page/Landing";

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
