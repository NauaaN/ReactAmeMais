import { con } from "./connection.js";

export async function cadastrarPet(Pet){
    const comando=`INSERT INTO TB_PET(ID_USUARIO, NM_PET, DS_ANIMAL, DS_ESPECIE, DS_GENERO, NR_IDADE, VL_PESO, VL_ALTURA, DS_COMENTARIO, DS_ENDERECO,NR_CURTIDAS,DS_TELEFONE)
    VALUES( ?,?,?,?,?,?,?,?,?,?,0,?)
    `;
}

export async function curtirPub(id){
    const comando= 
    `   UPDATE TB_PET 
	    SET NR_CURTIDAS= NR_CURTIDAS+1
        WHERE ID_PET=?
    `;
    const [resposta]= await con.query(comando, [id]);
    return resposta.affectedRows;
}