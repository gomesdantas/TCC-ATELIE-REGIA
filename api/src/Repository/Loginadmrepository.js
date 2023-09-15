import {con} from './connection.js'

export async function inserirLoginadm(loginadm) {
    
    const comando= 
    
    `INSERT INTO tb_admin (id_admin, ds_email, ds_senha   )
    values( ?, ?, ?) `;
  
    const [resposta] = await con.query(comando, [loginadm.admin, loginadm.email, loginadm.senha]);
    loginadm.id = resposta.insertId;

    return loginadm;

}