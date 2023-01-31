import LandingPage from "./pages/landing";
import { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./pages/homepage";
import Favourites from "./pages/Favourites";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/favourite" element={<Favourites />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
