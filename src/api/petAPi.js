import axios from "axios";
const api = axios.create({
    baseURL : `http://localhost:5000`
})
 
export async function cadastrarPet (animal, especie, nome, genero, idade, peso, altura, telefone, endereco, comentario, usuario) {
    const resposta = await api.post(`/pet` ,{
    usuario: usuario,
    nome : nome,
    animal: animal,
    especie: especie,
    genero: genero,
    idade: idade,
    peso: peso,
    altura: altura,
    comentario: comentario,
    endereco: endereco,
    telefone: telefone })

    return resposta.data;
}


export async function enviarImagemPet(id, imagem) {
    const formData = new FormData();
    formData.append(`imagem` , imagem);

    const resposta = await api.put(`/pet/${id}/imagem`, formData, {
        headers: {
            "Content-Type" : "multipart/form-data"
        },
    });
    return resposta.status;
}

export async function alterarPete (id,animal, especie, nome, genero, idade, peso, altura, telefone, endereco, comentario,usuario) {
    const resposta = await api.put(`/pet/${id}` ,{
    animal: animal,
    especie: especie,
    nome : nome,
    genero: genero,
    idade: idade,
    peso: peso,
    altura: altura,
    comentario: comentario,
    endereco: endereco,
    telefone: telefone,})

    return resposta.status;
}



export async function listarTodosPets(){
    const resposta = await api.get(`/peta`);
    return resposta.data;
}

export async function filtrarPets(genero,animal){
    const resposta = await api.get(`/pet?genero=${genero}&animal=${animal}`);
    return resposta.data;
} 

export async function curtirPet(id){
    const resposta= await api.put(`/curtida/${id}`);
    return resposta.status;
}

export async function meusPets(idusu){
    const resposta= await api.get(`/petusu/${idusu}`);
    return resposta.data;
}


export async function deletarPet(id) {
    const resposta = await api.delete(`/pet/${id}`);
    return resposta.status;
}

export async function buscarPorId(id) {
    const resposta = await api.get(`/pet/${id}`);
    return resposta.data;
}

export function buscarImagem(imagem) {
    return `${api.getUri()}/${imagem}`
}



