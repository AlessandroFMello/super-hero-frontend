import './App.css';

import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import SuperHeroPage from './pages/SuperHeroPage';

function App() {
  return (
    <Routes>
      <Route
        path=""
        element={ <SuperHeroPage /> }
      />
      <Route
        path="*"
        element={ <Navigate to="/" /> }
      />
    </Routes>
  );
}

export default App;
