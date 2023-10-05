<<<<<<< HEAD
import { loginCliente, verificarEmailExistente } from '../Repository/LoginusRepository.js';
import { inserircadastrousuario } from '../Repository/CadastroRepository.js';

=======
import { verificarEmailExistente } from '../Repository/LoginusRepository.js';
>>>>>>> 78a3911b2299b864c05b78dd63e422aa65b073a4
import { Router } from "express";

const server = Router();

<<<<<<< HEAD

server.post('/login/cliente', async (req, resp) => {
    try {
      const loginparainserir = req.body;
  
      const emailExistente = await verificarEmailExistente(loginparainserir.email);
  
      if (emailExistente) {
    
        const logininserida = await inserircadastrousuario(loginparainserir);
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


=======
server.get('/usuario/email/:email', async (req, resp) => {
    try {
        const { email } = req.params;

        if (!email) {
            resp.status(400).send({ erro: 'O parâmetro email é obrigatório' });
            return;
        }

        const emailExiste = await verificarEmailExistente(email);

        if (!emailExiste) {
            resp.status(404).send({ erro: 'Email não encontrado' });
            return;
        }

        resp.send({ mensagem: 'Email encontrado' });
    } catch (err) {
        console.error('Erro na função verificarEmailExistente:', err);
        resp.status(500).send({ erro: 'Ocorreu um erro ao processar a requisição.' });
    }
});
>>>>>>> 78a3911b2299b864c05b78dd63e422aa65b073a4

export default server;
