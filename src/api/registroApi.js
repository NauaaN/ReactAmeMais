import axios from "axios";
const api = axios.create({
    baseURL : 'http://localhost:5000'
})

export async function cadastrarUsuario(usuario, nome, cpf, email, senha, sexo, endereco, telefone){
    const resposta= await api.post ('/usuario', {
        usuario : usuario,
        nome: nome,
        cpf: cpf,
        email: email,
        senha: senha,
        sexo: sexo,
        endereco: endereco,
        telefone: telefone
    });
 return resposta.data;
}