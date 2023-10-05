import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Rodape from './components/rodape';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Produto from './pages/pagina-produto';
import Sacola from './pages/sacola';
import Loginadm from './pages/admlogin';
import Cadastroproduto from './pages/cadastroproduto';
import Cadastrocliente from './pages/cadastrocliente';
import LoginCliente from './pages/logincliente';
<<<<<<< HEAD
import Homepage from './pages/pagina-inicio';

=======
>>>>>>> 78a3911b2299b864c05b78dd63e422aa65b073a4

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
      <Routes>
<<<<<<< HEAD
      <Route path='/' element={<Homepage/>}/>
        <Route path='/produtos' element={<Produto/>}/>
        <Route path='/sacola' element={<Sacola/>}/>
        <Route path='/loginadm' element={<Loginadm/>}/>
        <Route path='/cadastro/produto' element={<Cadastroproduto/>}/>
        <Route path='/cadastro/cliente' element={<Cadastrocliente/>}/>
        <Route path='/login/cliente' element={<LoginCliente/>}/>
=======
        <Route path='/' element={<Rodape/>}/>
        <Route path='/produtos' element={<Produto/>}/>
        <Route path='/sacola' element={<Sacola/>}/>
        <Route path='/loginadm' element={<Loginadm/>}/>
        <Route path='/cadastroproduto' element={<Cadastroproduto/>}/>
        <Route path='/cadastrocliente' element={<Cadastrocliente/>}/>
        <Route path='/logincliente' element={<LoginCliente/>}/>
>>>>>>> 78a3911b2299b864c05b78dd63e422aa65b073a4
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

