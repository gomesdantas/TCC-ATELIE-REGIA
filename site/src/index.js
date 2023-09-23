import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
<<<<<<< HEAD

=======
import Homepage from './pages/pagina-inicio/';
>>>>>>> 3d8cef6c8b82dc36163d43a076b09ceeb117cf2c
import Rodape from './components/rodape';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Produto from './pages/pagina-produto';
import Sacola from './pages/sacola';
import Loginadm from './pages/admlogin';
import Cadastroproduto from './pages/cadastroproduto';
<<<<<<< HEAD
import Cadastrocliente from './pages/cadastrocliente';
import LoginCliente from './pages/logincliente';
=======
>>>>>>> 3d8cef6c8b82dc36163d43a076b09ceeb117cf2c

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <BrowserRouter> 
      <Routes>
        <Route path='/' element={<Rodape/>}/>
=======

    <BrowserRouter> 

      <Routes>

        <Route path='/' element={<Homepage/>}/>
        <Route path='/rodape' element={<Rodape/>}/>
>>>>>>> 3d8cef6c8b82dc36163d43a076b09ceeb117cf2c
        <Route path='/produtos' element={<Produto/>}/>
        <Route path='/sacola' element={<Sacola/>}/>
        <Route path='/loginadm' element={<Loginadm/>}/>
        <Route path='/cadastroproduto' element={<Cadastroproduto/>}/>
<<<<<<< HEAD
        <Route path='/cadastrocliente' element={<Cadastrocliente/>}/>
        <Route path='/logincliente' element={<LoginCliente/>}/>
      </Routes>
    </BrowserRouter>
=======
      </Routes>

    </BrowserRouter>

>>>>>>> 3d8cef6c8b82dc36163d43a076b09ceeb117cf2c
  </React.StrictMode>
);

