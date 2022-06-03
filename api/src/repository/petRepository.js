import { con } from "./connection.js";

export async function inserirPet(pet){
    const comando=`INSERT INTO TB_PET(ID_USUARIO, NM_PET, DS_ANIMAL, DS_ESPECIE, DS_GENERO, NR_IDADE, VL_PESO, VL_ALTURA, DS_COMENTARIO, DS_ENDERECO,NR_CURTIDAS,DS_TELEFONE)
    VALUES( ?,?,?,?,?,?,?,?,?,?,0,?)
    `;
    
    const [resposta] = await con.query(comando, [pet.usuario, pet.nome, pet.animal, pet.especie, pet.genero, pet.idade, pet.peso, pet.altura, pet.comentario, pet.endereco, pet.telefone]);
    pet.id = resposta.insertId;

    return resposta;
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

export async function removerPet(id){
    const comando =`
     DELETE from TB_PET
    WHERE ID_PET = ? `;

}

export async function inserirPet(pet) {

const comando =

`

INSERT INTO TB_PET (id_pet, id_usuario, nm_pet, ds_animal, ds_especie, ds_genero, nr_idade, vl_peso, vl_altura, ds_comentario, ds_endereco, ds_telefone) 

VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ? )

`

const [resposta] = await con.query(comando, [pet.id, pet.nome, pet.animal, pet.especie, pet.genero, pet.idade, pet.peso, pet.altura, pet.comentario, pet.endereco, pet.telefone]);

pet.id = resposta.insertId;

return pet;

}

export async function alterarImagem(imagem, id) {
    const comando  = 
    `UPDATE TB_PET
        SET IMG_PET    = ?
    WHERE ID_PET       = ? `

    const [resposta] = await con.query(comando[imagem, id]);
    return resposta.affectedRows;
}
