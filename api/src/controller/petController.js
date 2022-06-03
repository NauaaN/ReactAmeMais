import multer from "multer";
import { Router } from "express";
import { curtirPub, filtrarPet, inserirPet, removerPet, alterarImagem, alterarPET } from "../repository/petRepository.js";


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



server.post ('/pet', async (req, resp) => {

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

server.put('/pet/:id/imagem', upload.single('imagem'), async (req, resp) => {
    try {
        const { id } = req.params;
        const imagem = req.file.path;

        const resposta = await alterarImagem(imagem, id);
        if (resposta != 1) throw new Error('A imagem não pode ser salva.');

        resp.status(204).send();
    }catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
})


server.put('/pet/:id', async (req, resp)=>{
    try{
       const {id}= req.params;
       const pet= req.body;
       const resposta= await alterarPET(pet,id);
          if (resposta != 1) throw new Error('A alteração não pode ser salva.');
       resp.status(204).send()
   }catch(err){
       resp.status(400).send({
           erro: err.message
       });
   }
   })



server.get('/pet', async (req,resp)=>{
   try{
    const {genero}= req.query;
    const {animal}= req.query;

    const resposta= await filtrarPet(genero,animal);
    resp.send(resposta);
}catch(err){
   console.log(err)
}
})

server.delete ('/pet:id', async (req, resp) => {
    try{
    const { id } = req.params;

    const resposta = await removerPet(id);
    if( resposta != 1)
    throw new Error ('pet não foi removido!');

    resp.status(204).send();
    }
    catch(err){

      resp.status(400).send({
          erro : err.message
      })
    }
})



export default server;



