import './index.scss'
import {curtirPet} from'../../../api/petAPi'
import { useState } from 'react'


export default function Index(props){

  const heart = document.querySelector(".heart");
  const animationheart =  document.querySelector(".animation-heart");

  heart.addEventListener('click', () => {
    animationheart.classList.add('animation');
    heart.classList.add('fill-color');
  });

  animationheart.addEventListener('click', () => {
    animationheart.classList.remove('animation');
    heart.classList.remove('fill-color');
  });

  const [curtidas, setCurtidas] = useState(props.item.curtidas);

  async function curtindo(){
    await curtirPet(props.item.id)
    setCurtidas(curtidas+1);
  }


  function mostrarImagem(imagem) {
    if (!imagem)
      return './images/toninhaa.svg'
    else
      return `http://localhost:5000/${imagem}`
  }



    return(
        <div className='cardpjja'>
             <div className='cardjj'>
             <div className='card1jjj'>
             
                    <div className='especiejj'>
                  <p className='ejj'>ESPÉCIE:</p>
                  <p className='avejj'>{props.item.animal},{props.item.especie}</p>
                  <div className='femininojj' >{props.item.genero} 
                  {props.item.genero  === 'macho' &&
                            <img src="./images/homi.png" />
                        }

                  {props.item.genero &&
                          <img src="./images/mulhe.png" /> 
                        }
                  </div>
               </div>
               <div className='toninhajj'>
                   <img src={mostrarImagem(props.item.imagem)} />
               </div>
               <div className='textos2jj'>
                 <div className='nijj'>
                  <p className='najj'>{props.item.nome}</p>
                  <p className='idadejj'>IDADE: {props.item.idade}</p>
                 </div>
                 <div className='psjj'>
                  <div className='psijj'>
                    <p className='pijj'>PESO:</p>
                    <p className='dsjj'>{props.item.peso}</p>
                  </div>
                  <div className='psijj'>
                    <p className='pijj'>ALTURA:</p>
                    <p className='dsjj'>{props.item.altura}</p>
                  </div>
                 </div>
               </div>
               <div className='dsAjjj'>
                 <p>{props.item.comentario}</p>
               </div>
              <div className='bujj'>
                  <div className='heart' onClick={curtindo}> </div>
                  <div className='animation-heart' onClick={curtindo}> </div>
                  <p className='idadejj'>{curtidas}</p>
              </div>
              
                 <div className='curtirirjj'> 
                   <p className='ed1jj'>{props.item.endereco}</p>
                   <p className='ed2jj'>{props.item.telefone}</p>
                 </div>
                 </div>
             
             </div>
           
    
           </div>
    )
}


