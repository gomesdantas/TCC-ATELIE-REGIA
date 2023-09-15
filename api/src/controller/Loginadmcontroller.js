import {inserirLoginadm} from '../Repository/Loginadmrepository.js'

import { Router } from "express"

const server = Router();

server.post('/inserirloginadm', async (req, resp) => {

    try {
        const loginadmparainserir =req.body;

        const loginadminserido = inserirLoginadm(loginadmparainserir);

        
        if (!loginadmparainserir.email)
            throw new Error('O campo email é obrigatório ');

        if (!loginadmparainserir.senha)
            throw new Error('O campo senha é obrigatório ');

  
            resp.send(loginadminserido)
        } catch (err) {
            resp.status(400).send({
                erro: err.message
            })
        }
    })



export default server;