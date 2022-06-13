import './index.scss'
export default function Index(props){

    return(
        <div className='cardpjj'>
             <div className='cardjj'>
             <div className='card1jjj'>
             
                    <div className='especiejj'>
                  <p className='ejj'>ESPÉCIE:</p>
                  <p className='avejj'>{props.item.animal}</p>
                  <div className='femininojj' >{props.item.genero} </div>
               </div>
               <div className='toninhajj'>
                   <img src='./images/toninhaa.svg' />
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
                  <img className='curtir' alt='' src='./images/Like.svg'/>
                  <p className='idadejj'>30</p>
              </div>
              
                 <div className='curtirirjj'> 
                   <p className='ed1jj'>{props.item.enderco}</p>
                   <p className='ed2jj'>{props.item.telefone}</p>
                 </div>
                 </div>
             
             </div>
           
    
           </div>
    )
}


