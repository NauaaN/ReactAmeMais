import multer from "multer";
import { Router } from "express";
import { meusPets,curtirPub, filtrarPet, inserirPet, removerPet, alterarImagem, alterarPET, petsCadastrados, buscarPorIdPet } from "../repository/petRepository.js";


const server= Router();
const upload= multer({dest: 'storage/fotosPets'});

server.put('/curtida/:id', async (req,resp)=>{
    try{
    const {id}= req.params;
        
        if(!id)
            throw new Error('pulbicação inexistente');

    const resposta= await curtirPub(id);
        if(resposta === 1)
    resp    .status(204).send();
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
        if(!PetParaInserir.usuario)
            throw new Error('usuario é obrigatorio');
        if(!PetParaInserir.nome)
            throw new Error('nome é obrigatorio');
        if(!PetParaInserir.animal)
            throw new Error('informar o animal é obrigatorio');
        if(!PetParaInserir.especie)
            throw new Error('informar a especie é obrigatorio');
        if(!PetParaInserir.genero)
            throw new Error('informar o genero é obrigatorio');
        if(!PetParaInserir.idade)
            throw new Error(' informar a idade é obrigatorio');
        if(isNaN(PetParaInserir.idade))
            throw new Error(' informar a idade é obrigatorio');
        if(!PetParaInserir.peso)
            throw new Error('informar o peso é obrigatorio');
        if(!PetParaInserir.altura)
            throw new Error('altura é obrigatorio');
        if(!PetParaInserir.endereco)
            throw new Error('informar o endereco é obrigatorio');
        if(!PetParaInserir.telefone)
            throw new Error('telefone é obrigatorio');
        if(PetParaInserir.genero === 'Macho' || PetParaInserir.genero === 'Femea'){
        const pet = await inserirPet(PetParaInserir);
        resp.send (pet);
    }else{
        throw new Error('genero deve ser informado como Macho ou Femea ');
    }
}catch(err){
    resp.status(400).send({
        erro : err.message
})

}

})

server.put('/pet/:id/imagem', upload.single('imagem'), async (req, resp) => {
    try {
        if (!req.file)
            throw new Error('Escolha a imagem do pet.');

        const { id } = req.params;
        const imagem = req.file.path;

        const resposta = await alterarImagem(imagem, id);
            if (resposta != 1)  throw new Error('A imagem não pode ser salva.');

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
       if(pet.genero === 'Macho' || pet.genero === 'Femea'){
       const resposta= await alterarPET(pet,id);
            if (resposta != 1)   
             throw new Error('A alteração não pode ser salva.');
       resp.status(204).send()}
       else{
        throw new Error('genero deve ser informado como Macho ou Femea ');
    }
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

server.delete ('/pet/:id', async (req, resp) => {
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

server.get('/peta', async(req,resp)=>{
    try{
        const final= await petsCadastrados();

        resp.send(final)
    }catch(err){

        resp.status(400).send({
            erro : err.message
        })
    }
})


export default server;



server.get('/petusu/:idusu', async(req,resp)=>{
    try{
        const id= req.params.idusu; 
        const final= await meusPets(id);

        resp.send(final)
    }catch(err){

        resp.status(400).send({
            erro : err.message
        })
    }
})

server.get('/pet/:id', async (req,resp)=>{
    try{
        const {id} = req.params;
        const final = await buscarPorIdPet(id)

        resp.send(final);

    }catch(err){

        resp.status(400).send({
            erro : err.message
        })
    }
})