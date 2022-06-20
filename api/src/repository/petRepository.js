import { con } from "./connection.js";

export async function inserirPet(pet){
    const comando=`INSERT INTO TB_PET(ID_USUARIO, NM_PET, DS_ANIMAL, DS_ESPECIE, DS_GENERO, NR_IDADE, VL_PESO, VL_ALTURA, DS_COMENTARIO, DS_ENDERECO,NR_CURTIDAS,DS_TELEFONE)
    VALUES( ?,?,?,?,?,?,?,?,?,?,0,?)
    `;
    
    const [resposta] = await con.query(comando, [pet.usuario, pet.nome, pet.animal, pet.especie, pet.genero, pet.idade, pet.peso, pet.altura, pet.comentario, pet.endereco, pet.telefone]);
    pet.id = resposta.insertId;

    return pet;
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

const [resposta] = await con.query (comando, [id]);
return resposta.affectedRows;
}

export async function filtrarPet(genero,animal){
    const comando=`
    SELECT ID_PET           id,
    NM_PET   nome,
    DS_ANIMAL   	animal,
    DS_ESPECIE		especie,
    DS_GENERO		genero,
    NR_IDADE 		idade,
    VL_PESO 		peso,
    VL_ALTURA		altura,
    DS_COMENTARIO 	comentario,
    DS_ENDERECO		endereco,
    NR_CURTIDAS     curtidas,
    DS_TELEFONE		telefone,
    IMG_PET         imagem
FROM TB_PET		
WHERE (? = 'todos' || DS_GENERO = ?)
 AND (? = 'todos' || DS_ANIMAL = ?)
`;

const [linhas]= await con.query(comando,[genero,genero,animal,animal]);
return linhas;

}

export async function alterarImagem(imagem,id){
    const comando= `
    UPDATE TB_PET 
    SET IMG_PET = ?
    WHERE ID_PET = ?`;

    const [resposta]= await con.query(comando, [imagem,id]);
    return resposta.affectedRows; 
}

export async function alterarPET(pet,id){
    const comando=
    `
    UPDATE TB_PET 
	SET NM_PET= ?,
		DS_ANIMAL= ?,
        DS_ESPECIE= ?,
        DS_GENERO= ?,
        NR_IDADE= ?,
        VL_PESO= ?,
        VL_ALTURA=?,
        DS_COMENTARIO= ?,
        DS_ENDERECO=?,
        DS_TELEFONE=?
    WHERE ID_PET =?`;

    const [resposta]= await con.query(comando, [ pet.nome, pet.animal, pet.especie, pet.genero, pet.idade, pet.peso, pet.altura, pet.comentario, pet.endereco, pet.telefone, id]);
    return resposta.affectedRows;
}

export async function petsCadastrados(){
    const comando=
    `
    SELECT ID_PET           id,
            NM_PET     		nome,
            DS_ANIMAL   	animal,
            DS_ESPECIE		especie,
            DS_GENERO		genero,
            NR_IDADE 		idade,
            VL_PESO 		peso,
            VL_ALTURA		altura,
            DS_COMENTARIO	comentario,
            DS_ENDERECO		endereco,
            NR_CURTIDAS     curtidas,
            DS_TELEFONE		telefone,
            IMG_PET         imagem
          FROM TB_PET
    `;
    const [linhas] = await con.query(comando);
    return linhas;
}


export async function meusPets(id){
    const comando=
    `
    SELECT ID_PET               id,
            NM_PET              nome,
            DS_ANIMAL          animal,
            DS_ESPECIE         especie,
            DS_GENERO          genero,
            NR_IDADE           idade,
            VL_PESO            peso,
            VL_ALTURA          altura,
            DS_COMENTARIO      comentario,
            DS_ENDERECO        endereco,
            DS_TELEFONE        telefone,
            IMG_PET            imagem,
            ID_USUARIO         idusu   
          FROM TB_PET
          WHERE (ID_USUARIO = ?)
          `
    ;
    const [linhas] = await con.query(comando,[ id ]);
    return linhas;
}


export async function buscarPorIdPet(id){
    const comando=
    `
    SELECT ID_PET               id,
            NM_PET              nome,
            DS_ANIMAL          animal,
            DS_ESPECIE         especie,
            DS_GENERO          genero,
            NR_IDADE           idade,
            VL_PESO            peso,
            VL_ALTURA          altura,
            DS_COMENTARIO      comentario,
            DS_ENDERECO        endereco,
            DS_TELEFONE        telefone,
            IMG_PET            imagem,
            ID_USUARIO         idusu   
          FROM TB_PET
          WHERE (ID_PET = ?)
          `
    ;
    const linhas = await con.query(comando,[ id ]);
    return linhas[0];
}