import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Ladingpage from './pages/ladingpage';
import Cadastrarpet from './pages/cadastrarpet';
import Login from './pages/login';
import Meuspets from './pages/meuspets';
import Verpets from './pages/verpets';
import Registrar from './pages/registrar';
import { BrowserRouter, Routes, Route} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
  <Routes>
  <Route path='/registrar' element={<Registrar/>} /> 
  <Route path='/ladingpage' element={<Ladingpage/>} />
  <Route path='/cadastrarpet' element={<Cadastrarpet/>} />
  <Route path='/login' element={<Login/>} />
  <Route path='/meuspets' element={<Meuspets/>} />
  <Route path='/verpets' element={<Verpets/>} />
  </Routes>
  </BrowserRouter>
    <App />
  </React.StrictMode>
);

