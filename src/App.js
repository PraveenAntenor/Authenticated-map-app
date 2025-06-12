import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import MapPage from './components/MapPage';
import ProtectedRoute from './ProtectedRoute';
import 'leaflet/dist/leaflet.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/map" element={<ProtectedRoute><MapPage /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
