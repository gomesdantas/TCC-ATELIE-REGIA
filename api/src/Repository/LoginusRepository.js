import { con } from './connection.js';

export async function verificarEmailExistente(email) {
    try {
      const [linhas, campos] = await con.execute('SELECT * FROM tb_cadastrocliente WHERE ds_email = ?', [email]);
  
      return linhas.length > 0;
    } catch (err) {
      console.error('Erro ao verificar email existente:', err);
      return false;
    }
  }
  