import { con } from "./connection.js";

export async function inserirUsuario(usuario){
    const comando= 
    `INSERT INTO TB_USUARIO( NM_USUARIO, DS_CPF, DS_EMAIL, DS_SENHA, DS_SEXO, DS_ENDERECO, DS_TELEFONE)
                    VALUES(?,?,?,?,?,?,?)`
    
    const[usuarionew]=  await con.query(comando,[usuario.nome, usuario.cpf,usuario.email, usuario.senha,usuario.sexo, usuario.endereco, usuario.telefone]);
    usuario.id =usuarionew.insertId; 

    return usuarionew.affectedRows;
}

export async function login (email, senha) {
   
    const comando = 
 `SELECT ID_USUARIO 		   id,
        NM_USUARIO	         nome,
        DS_EMAIL		     email
    FROM TB_USUARIO
  WHERE DS_EMAIL 	        = ?
    AND DS_SENHA	        = ? `
    
    const [linhas] = await con.query(comando, [email, senha])

    return linhas[0];
}