import multer from "multer";
import { Router } from "express";
import { curtirPub } from "../repository/petRepository.js";
import { inserirPet } from '../repository/petRepository.js';

const server= Router();
const upload= multer({dest: 'storage/fotosPets'});

server.put('/curtida/:id', async (req,resp)=>{
    try{
    const {id}= req.params;
        
    if(!id)
    throw new Error('pulbicação inexistente');

    const resposta= await curtirPub(id);
    if(resposta === 1)
    resp.status(204).send();
    else
    throw new Error('Falha em curtir');
}catch(err){
    resp.status(404).send(
        {
        
        erro: err.message
    });
}
})



server.post ('/adicionarpet', async (req, resp) => {

try{

const PetParaInserir = req.body;

const pet = await inserirPet(PetParaInserir);

resp.send (pet);

}

catch(err){

resp.status(400).send({

erro : err.message

})

}

})

export default server;

