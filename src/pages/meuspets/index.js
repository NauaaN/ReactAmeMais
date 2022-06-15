import './index.scss';
import{ Link } from 'react-router-dom';
import {confirmAlert } from 'react-confirm-alert'
import '../../common/common.scss';
import { useEffect, useState } from 'react';
import { meusPets, deletarPet } from '../../api/petAPi';
import { toast } from 'react-toastify';
import storage from 'local-storage'

export default function Index() {

  
  const [pets, setPets] = useState([]);

  async function carregarMeusPets(){
    const resposta = await meusPets(storage('usuario-logado').id);
    setPets(resposta);
}

  useEffect(() => {
    carregarMeusPets();
  }, [])


  function mostrarImagem(imagem) {
    if (!imagem)
      return './images/toninhaa.svg'
    else
      return `http://localhost:5000/${imagem}`
  }



  async function deletarPetClick(id, nome) {
    
    confirmAlert({
      title: 'Remover Pet',
      message:`Deseja o remover pet ${nome}?`,
      button: [
        {
          label: 'Sim',
          onClick: async () => {
                const resposta = await deletarPet(id, nome);
               
            toast('Pet removido!');

          }
        },
        {
          label:'Não'
        }


      ]
    })
  }


  return(
     
    
    <div className='principaljj'>
            <div className='loginjj'>
              <div className='simbolojj'>
              <img className='lljj' src= '../images/IMG-20220418-WA0079_3.svg'/>
              
              <Link to='/filtrar'>
                <img className='filtrarongc' src= '../images/Component 1.svg'/>
              </Link>
              </div>
             <div className='login1jj'>
              <Link className="aajj" to='/cadastrarpet'>+ &nbsp; PET</Link>
              <p className='nomejj'>Nauan dos Santos
              </p>
              <img className='nauanjj' src='./images/nauanigual.svg'/>
              </div>
              
           </div>
           <div className='editarjj'>
             <img className='vectorjj' src='./images/homenzinho.svg'/>
             <p className='meusjj'>MEUS PETS:</p>
             </div>
      
          <div className='lucaojjn'>

          {pets.map(item =>
           <div className='cardpjj'>
             <div className='cardjj'>
             <div className='card1jjj'>
             
                    <div className='especiejj'>
                  <p className='ejj'>ESPÉCIE:</p>
                  <p className='avejj'>{item.animal},{item.especie}</p>
                  <div className='femininojj' >{item.genero} </div>
               </div>
               <div className='toninhajj'>
                   <img src={mostrarImagem(item.imagem)} />
               </div>
               <div className='textos2jj'>
                 <div className='nijj'>
                  <p className='najj'>{item.nome}</p>
                  <p className='idadejj'>IDADE: {item.idade}</p>
                 </div>
                 <div className='psjj'>
                  <div className='psijj'>
                    <p className='pijj'>PESO:</p>
                    <p className='dsjj'>{item.peso}</p>
                  </div>
                  <div className='psijj'>
                    <p className='pijj'>ALTURA:</p>
                    <p className='dsjj'>{item.altura}</p>
                  </div>
                 </div>
               </div>
               <div className='dsAjjj'>
                 <p>{item.comentario}</p>
               </div>
              <div className='bujj'>
              <p className='edjj'>EDITAR</p>
                </div>
        
                <div className='bujj'>
                    <p className='eddjj' onClick={() => deletarPetClick(item.id, item.nome)}>REMOVER</p>

                </div>
              
              
                 <div className='curtirirjj'> 
                   <p className='ed1jj'>{item.endereco}</p>
                   <p className='ed2jj'>{item.telefone}</p>
                 </div>
                 </div>
             
             </div>
           
    
           </div>
        
                )}
            </div>    
         
         
        </div>
      
  )
}

        
