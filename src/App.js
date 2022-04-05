import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import Header from './components/Header';
import Dashboard from './pages/admin/Dashboard'
import Login from './pages/guest/Login'
import Register from './pages/guest/Register'


function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path='/' element={< Dashboard />} />
            <Route path='/login' element={< Login />} />
            <Route path='/register' element={< Register />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
