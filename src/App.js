import React from 'react';
import HeaderContainer from './containers/Base/HeaderContainer';
import Auth from 'pages/Auth';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <HeaderContainer />
      <Routes>
        <Route path="auth/*" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;