import 'dotenv/config'

import Loginadmcontroller from './src/controller/Loginadmcontroller.js'

import express from 'express'
import cors from 'cors'

const server = express ();
server.use(cors());
server.use(express.json());

server.use(Loginadmcontroller);

server.listen(process.env.PORT, ()=> console.log(`API Conectada na Porta ${process.env.PORT}`));