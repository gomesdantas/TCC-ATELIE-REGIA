import { verificarEmailExistente } from '../Repository/LoginusRepository.js';
import { Router } from "express";

const server = Router();

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

export default server;
