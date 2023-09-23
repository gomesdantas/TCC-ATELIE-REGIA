import 'dotenv/config'

import Loginadmcontroller from './src/controller/Loginadmcontroller.js'
<<<<<<< HEAD
import ProdutosController from './src/controller/Produtocontroller.js';
import CadastroController from './src/controller/CadastroController.js'
import LoginusController from './src/controller/LoginusController.js'
=======
>>>>>>> 3d8cef6c8b82dc36163d43a076b09ceeb117cf2c

import express from 'express'
import cors from 'cors'

<<<<<<< HEAD

=======
>>>>>>> 3d8cef6c8b82dc36163d43a076b09ceeb117cf2c
const server = express ();
server.use(cors());
server.use(express.json());

server.use(Loginadmcontroller);
<<<<<<< HEAD
server.use(ProdutosController);
server.use(CadastroController);
server.use(LoginusController);


server.listen(process.env.PORT, ()=> console.log(`API Conectada na Porta ${process.env.PORT}`));
=======

server.listen(process.env.PORT, ()=> console.log(`API Conectada na Porta ${process.env.PORT}`));
>>>>>>> 3d8cef6c8b82dc36163d43a076b09ceeb117cf2c
