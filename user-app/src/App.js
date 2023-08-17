import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import NavBar from './component/navBar';
import Signup from './pages/signUp';
import Login from './pages/login';
import Home from './pages/home';

const App = () => {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Signup />} exact />
        <Route path="/login" element={<Login />} />
        <Route path='/welcome' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;