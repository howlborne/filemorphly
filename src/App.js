import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ImageCompressor from './pages/ImageCompressor';

function Home() {
  return (
    <div className="text-center py-12">
      <h1 className="text-3xl font-bold">Welcome to FileMorphly</h1>
      <p className="mt-2 text-gray-600">Choose a tool to get started:</p>
      <Link to="/compress-image" className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">Compress Image</Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav className="bg-white shadow px-6 py-4 flex justify-between">
        <Link to="/" className="font-bold text-lg">FileMorphly</Link>
        <Link to="/compress-image" className="text-blue-600 font-medium">Compress Image</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compress-image" element={<ImageCompressor />} />
      </Routes>
    </Router>
  );
}

export default App;