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
            throw new Error('Usuário é obrigatório');
        if(!PetParaInserir.nome)
            throw new Error('Nome é obrigatório');
        if(!PetParaInserir.animal)
            throw new Error('Informar o animal é obrigatório');
        if(!PetParaInserir.especie)
            throw new Error('Informar a espécie é obrigatório');
        if(!PetParaInserir.genero)
            throw new Error('Informar o gênero é obrigatório');
        if(!PetParaInserir.idade)
            throw new Error(' Informar a idade é obrigatório');
        if(isNaN(PetParaInserir.idade))
            throw new Error(' Idade deve ser um número');
        if(!PetParaInserir.peso)
            throw new Error('Informar o peso é obrigatório');
            if(isNaN(PetParaInserir.peso))
            throw new Error('Peso deve ser um número');
        if(!PetParaInserir.altura)
            throw new Error('Altura é obrigatório');
            if(isNaN(PetParaInserir.altura))
            throw new Error('Altura deve ser um número');
        if(!PetParaInserir.endereco)
            throw new Error('Informar o endereço é obrigatório');
        if(!PetParaInserir.telefone)
            throw new Error('Telefone é obrigatório');
        if(PetParaInserir.genero === 'Macho' || PetParaInserir.genero === 'Fêmea'  || PetParaInserir.genero === 'Femea' || PetParaInserir.genero === 'femea' || PetParaInserir.genero === 'macho' || PetParaInserir.genero === 'masculino' || PetParaInserir.genero === 'feminino'){
        const pet = await inserirPet(PetParaInserir);
        resp.send (pet);
    }else{
        throw new Error('Gênero deve ser informado como Macho ou Fêmea ');
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
    if(!pet.nome)
       throw new Error('Nome é obrigatório');
    if(!pet.animal)
       throw new Error('Informar o animal é obrigatório');
    if(!pet.especie)
       throw new Error('Informar a espécie é obrigatório');
    if(!pet.genero)
       throw new Error('Informar o gênero é obrigatório');
    if(!pet.idade)
       throw new Error(' Informar a idade é obrigatório');
    if(isNaN(pet.idade))
       throw new Error(' Idade deve ser um número');
    if(!pet.peso)
       throw new Error('Informar o peso é obrigatório');
    if(isNaN(pet.peso))
       throw new Error('Peso deve ser um número');
    if(!pet.altura)
       throw new Error('Altura é obrigatório');
    if(isNaN(pet.altura))
       throw new Error('Altura deve ser um número');
    if(!pet.endereco)
       throw new Error('Informar o endereço é obrigatório');
    if(!pet.telefone)
       throw new Error('Telefone é obrigatório');

    if(pet.genero === 'Macho' || pet.genero === 'Fêmea'  || pet.genero === 'Femea' || pet.genero === 'femea' || pet.genero === 'macho' || pet.genero === 'masculino' || pet.genero === 'feminino' ){
       
        const resposta= await alterarPET(pet,id);
            if (resposta != 1) throw new Error('A alteração não pode ser salva.');

       resp.status(204).send()}

    else{
        throw new Error('Gênero deve ser informado como Macho ou Fêmea ');
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