import { Router } from "express";
import { inserirUsuario, login } from "../repository/usuarioRepository.js";

const server= Router();


server.post('/usuario', async (req,resp)=>{
    try{
    const userNovo= req.body;
    if(!userNovo.nome)
    throw new Error('nome obrigatorio');
    if(!userNovo.cpf)
    throw new Error('cpf obrigatorio');
    if(!userNovo.email)
    throw new Error('email obrigatorio');
    if(!userNovo.senha)
    throw new Error('senha obrigatorio');
    if(!userNovo.sexo)
    throw new Error('sexo obrigatorio');
    if(!userNovo.endereco)
    throw new Error('endereço obrigatorio');
    if(!userNovo.telefone)
    throw new Error('telefone obrigatorio');

    const user= await inserirUsuario(userNovo);
    if(user===1)
    resp.status(204).send();
    else{
        throw new Error('não cadastrado')
    }

}catch(err){
    console.log(err)
    resp.status(400).send({
        erro:err.message
    });
}
})

server.post('/usuario/login', async (req, resp) => {
    try{
        const { email, senha } = req.body;
        const resposta = await login(email,senha);
        if (!resposta) throw new Error('Credenciais inválidas');
        resp.send(resposta)

    }catch(err) {
        resp.status(401).send({
            erro:err.message
        });
    }
})

export default server;