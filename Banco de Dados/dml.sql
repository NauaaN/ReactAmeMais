use sistemaAmeMais;

--inserir usuário
INSERT INTO TB_USUARIO(NM_USUARIO, DS_CPF, DS_EMAIL, DS_SENHA, DS_SEXO, DS_ENDERECO, DS_TELEFONE)
VALUES("Matheus","485-192-235-15","matheusservulo4@gmail.com","SENHA1234","MASCULINO","AVENIDA BELMIRA MARIM-13","(11)-963306065");

--login do usuario
SELECT ID_USUARIO 		id,
       NM_USUARIO		nome,
       DS_EMAIL			email
  FROM TB_USUARIO
 WHERE DS_EMAIL 		= 'matheusservulo4@gmail.com'
   AND DS_SENHA			= 'SENHA1234';
   
   
--cadastrar pet
INSERT INTO TB_PET(ID_USUARIO, NM_PET, DS_ANIMAL, DS_ESPECIE, DS_GENERO, NR_IDADE, VL_PESO, VL_ALTURA, DS_COMENTARIO, DS_ENDERECO,DS_TELEFONE)
VALUES( 1, "BRUNINHO","AVE","CALOPSITA","MACHO", 1, 2.5,0.6,"NÃO CONTÉM DOENÇAS, TOTALMENTE SAUDEVEL","SÃO PAULO, SP", "(11) 987955422");


--adicionar imagem
UPDATE TB_PET 
   SET IMG_PET     = '/storage/foto/asdfasdf.jp'
 WHERE ID_PET = 1;

-- curtir publicação
 UPDATE TB_PET 
	SET NR_CURTIDAS= NR_CURTIDAS+1
 WHERE ID_PET=1;


--apagar pet 
DELETE FROM TB_PET
	WHERE ID_PET =1;

--alerar pet    
UPDATE TB_PET 
	SET NM_PET= "PEDRINHO",
		DS_ANIMAL= "AVE",
        DS_ESPECIE= "MURUCUTU",
        DS_GENERO= "AVE",
        NR_IDADE= 1,
        VL_PESO= 3.0,
        VL_ALTURA="1.0",
        DS_COMENTARIO= "DIABETES",
        DS_ENDERECO="RIO DE JANEIRO, RJ",
        DS_TELEFONE="(21) 959632145"
    WHERE ID_PET =1;
    
--filtrar pet por categorias    
SELECT NM_PET     		nome,
		DS_ANIMAL   	animal,
        DS_ESPECIE		especie,
        DS_GENERO		genero,
        NR_IDADE 		idade,
        VL_PESO 		peso,
        VL_ALTURA		altura,
        DS_COMENTARIO 	comentarios,
        DS_ENDERECO		endereco,
        DS_TELEFONE		telefone
	FROM TB_PET		
   WHERE ("FÊMEA" = 'TODOS' || DS_GENERO = "FÊMEA")
     AND ("TODOS" = 'TODOS' || DS_ANIMAL = "TODOS");
 