<<<<<<< HEAD
import {inserirLoginadm, verificarEmailExistente } from '../Repository/Loginadmrepository.js'
=======
import {inserirLoginadm} from '../Repository/Loginadmrepository.js'
>>>>>>> 3d8cef6c8b82dc36163d43a076b09ceeb117cf2c

import { Router } from "express"

const server = Router();

<<<<<<< HEAD
server.post('/login', async (req, resp) => {
  try {
    const loginparainserir = req.body;

    const emailExistente = await verificarEmailExistente(loginparainserir.email);

    if (emailExistente) {
   
      const logininserida = await inserirLoginadm(loginparainserir);
      resp.send(logininserida);
    } else {
      
      throw new Error('Este email não está cadastrado.');
    }

  } catch (err) {
    resp.status(400).send({
      erro: err.message
    });
  }
});

server.get('/login/email/:email', async (req, resp) => {
  try {
    const { email } = req.params;

    if (!email) {
      resp.status(400).send({ erro: 'O parâmetro email é obrigatório' });
      return;
    }

    const resposta = await buscaremail(email);

    if (!resposta) {
      resp.status(404).send({ erro: 'Email não encontrado' });
      return;
    }

    resp.send(resposta);
  } catch (err) {
    console.error('Erro na função emaillogin:', err);
    resp.status(500).send({ erro: 'Ocorreu um erro ao processar a requisição.' });
  }
});


server.post('/inserirloginadm', async (req, resp) => {
  try {
    const loginadmparainserir = req.body;

    const emailinserido = await inserirLoginadm(loginadmparainserir);

    const loginadminserido = [];
    loginadminserido.push(loginadmparainserir.email);

    resp.send(loginadminserido);
  } catch (err) {
    resp.status(400).send({
      erro: err.message
    });
  }
});
=======
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
>>>>>>> 3d8cef6c8b82dc36163d43a076b09ceeb117cf2c



export default server;