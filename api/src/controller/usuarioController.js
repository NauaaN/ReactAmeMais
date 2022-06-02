import { Router } from "express";
import { inserirUsuario } from "../repository/usuarioRepository.js";

const server= Router();


server.post('/usuario', async (req,resp)=>{
    try{
    const userNovo= req.body;
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

export default server;