import axios from "axios";
const api = axios.create({
    baseURL : 'http://localhost:5000'
})
 
export async function cadastrarPet (animal, especie, nome, genero, idade, peso, altura, telefone, endereco, comentario, usuario) {
    const resposta = await api.post('/pet' ,{
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
    const formData = new formData();
    formData.append('imagem' , imagem);
    const resposta = await api.put(`/pet/${id}/imagem ` , formData, {
        headers: {
            "Content-Type" : "multipart/form-data"
        },
    });
    return resposta.status;
}
export async function listarTodosPets(){
    const resposta = await api.get('/pet/:idusu');
    return resposta.data;
}