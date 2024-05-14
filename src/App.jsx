import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import MaiorMenor from './pages/MaiorMenor';
import Criminoso from './pages/Criminoso';
import Home from './pages/Home';
import CalculoArea from './pages/CalculoArea';
import './App.css';

const App = () => {
  return (
    <div className='App container-fluid'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home /> }></Route>
        <Route path='/CalculoArea' element={<CalculoArea />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path='/MaiorMenor' element={<MaiorMenor />}></Route>
        <Route path='/Criminoso' element={<Criminoso />}></Route>
      </Routes>

    </div>
  )
}

export default App;
