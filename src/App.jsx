import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home';
import PostDetail from './PostDetail';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen ">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
