CREATE DATABASE sistemaAmeMais;
USE sistemaAmeMais;

CREATE TABLE TB_USUARIO(
  ID_USUARIO        int primary key auto_increment,
  NM_USUARIO        VARCHAR(200),
  DS_CPF            VARCHAR(20),
  DS_EMAIL          VARCHAR(200),
  DS_SENHA          VARCHAR(200),
  DS_SEXO           VARCHAR(200),
  DS_ENDERECO       VARCHAR(200),
  DS_TELEFONE       VARCHAR(20)
);

CREATE TABLE TB_PET (
ID_PET                     int primary key auto_increment,
NM_PET                        VARCHAR(200),
DS_ANIMAL                     VARCHAR(200),
DS_ESPECIE                    VARCHAR(200),
DS_GENERO                     VARCHAR(200),
NR_IDADE                      INT,
VL_PESO                       DECIMAL(15,2),
VL_ALTURA                     DECIMAL(15,2),
DS_COMENTARIO                 VARCHAR(200),
IMG_PET                       VARCHAR(800),
DS_ENDERECO                   VARCHAR(200),
NR_CURTIDAS                   INT,
DS_TELEFONE                   VARCHAR(20),
ID_USUARIO                    int,
 FOREIGN KEY (ID_USUARIO) REFERENCES TB_USUARIO (ID_USUARIO)
);
