import HomePage from "pages/HomePage";
import MettingRooms from "pages/MettingRooms";
import News from "pages/News";
import NewsArtical from "pages/NewsArtical";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="news" element={<News />} />
        <Route path="news-artical" element={<NewsArtical />} />
        <Route path="meeting-rooms" element={<MettingRooms />} />
      </Routes>
    </Router>
  );
}

export default App;
