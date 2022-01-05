import React from 'react';
import HeaderContainer from './containers/common/HeaderContainer';
import { Routes, Route } from 'react-router-dom';
import SignUpPage from 'pages/SignupPage';
import LoginPage from 'pages/LoginPage';
import DirectoryPage from 'pages/DirectoryPage';

function App() {
  return (
    <div>
      <HeaderContainer />
      <Routes>
        <Route element={<LoginPage />} path="login" />
        <Route element={<SignUpPage />} path="signup" />
        <Route element={<DirectoryPage />} path="directory" />
      </Routes>
    </div>
  );
}


export default App;