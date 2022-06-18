import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import 'react-confirm-alert/src/react-confirm-alert.css';

import App from './App';
import Ladingpage from './pages/ladingpage';
import Cadastrarpet from './pages/cadastrarpet';
import Login from './pages/login';
import Verpets from './pages/verpets';
import Meuspets from './pages/meuspets';
import Registrar from './pages/registrar';
import Filtrar from './pages/filtrar';
import { BrowserRouter, Routes, Route} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
  <Routes>
  <Route path='/registrar' element={<Registrar/>} /> 
  <Route path='/' element={<Ladingpage/>} />
  <Route path='/cadastrarpet' element={<Cadastrarpet/>} />
  <Route path='//alterar/:idParam' element={<Cadastrarpet/>} />
  <Route path='/login' element={<Login/>} />
  <Route path='/verpets' element={<Verpets/>} />
  <Route path='/meuspets' element={<Meuspets/>} />
  <Route path='/filtrar' element={<Filtrar/>} />
  </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

