import './index.scss';
import{ Link } from 'react-router-dom';
import '../../common/common.scss';

export default function index() {

    return(
       
      
      <div className='principal'>
              <div className='login'>
                <div className='simbolo'>
                <img className='ll' src='./images/IMG-20220418-WA0079 6 (1).svg'/>
                
                <Link to='./filtrar'>
                  <img className='filtrar' src='./images/menu.svg'/>
                </Link>
                </div>
               <div className='login1'>
                <Link className="aa" to='./ladingpage'>+ &nbsp; PET</Link>
                <p className='nome'>Nauan dos Santos
                </p>
                <img className='nauan' src='./images/homem-e-cao-2 4.svg'/>
                </div>
             </div>
        
             <div className='editar'>
             <img className='vector' src='./images/Vector.svg'/>
             <p className='meus'>MEUS PETS:</p>
             </div>
            <div>
             <Link className='bb' to='./ladingpage'>VOLTAR</Link>
             </div>
        
            <div className='lucao'>
             <div className='cardp'>
               <div className='card'>
               <div className='card1'>
                 <div className='especie'>
                    <p className='e'>ESPÉCIE:</p>
                    <p className='ave'>AVE, CALOPSITA</p>
                    <img className='feminino' src='./images/transferir.png' />
                 </div>
                 <div className='toninha'>
                     <img src='./images/cb2c7d2c-9562-4f4a-a4bf-f28de4ed1fe6 8.svg' />
                 </div>
                 <div className='textos2'>
                   <div className='ni'>
                    <p className='na'>Toninha</p>
                    <p className='idade'>IDADE: 3</p>
                   </div>
                   <div className='ps'>
                    <div className='psi'>
                      <p className='pi'>PESO:</p>
                      <p className='ds'>80 g</p>
                    </div>
                    <div className='psi'>
                      <p className='pi'>ALTURA:</p>
                      <p className='ds'>9 cm</p>
                    </div>
                   </div>
                 </div>
                 <div className='dsA'>
                   <p>“ Toninha é totalmente saudavél, enérgica e está a procura de um lar cheio de amor”</p>
                 </div>
                <div className='bu'>
                    <p className='ed'>EDITAR</p>
                </div>
        
                <div className='bu'>
                    <p className='edd'>REMOVER</p>
                </div>
                
                   <div className='curtirir'> 
                     <p className='ed1'>São Paulo, SP</p>
                     <p className='ed2'>(11) 9856-4537</p>
                   </div>
        
                   
                 </div>
                 <div className='card1'>
                  <div className='especie'>
                     <p className='e'>ESPÉCIE:</p>
                     <p className='ave'>AVE, PAPAGAIO </p>
                     <img className='MASCULINO' src='./images/c5a58b83a85c6bf12fe6efe72cf06e67-simbolo-masculino.png' />
                  </div>
                  <div className='toninha'>
                      <img className='papagaio'src='./images/papagaio1 4.svg' />
                  </div>
                  <div className='textos2'>
                    <div className="ni">
                     <p className='na2'>João Paulo</p>
                     <p className='idade'>IDADE: 7</p>
                    </div>
                    <div className='ps'>
                     <div className='psi'>
                       <p className='pi'>PESO:</p>
                       <p className='ds'>405 g</p>
                     </div>
                     <div className='psi'>
                       <p className='pi'>ALTURA:</p>
                       <p className='ds'>35 cm</p>
                     </div>
                    </div>
                  </div>
                  <div className='dsA'>
                    <p>“ João Paulo tem alguns problemas de alimentação e é bastante tímido, mas tem muito amor para dar”</p>
                  </div>
                 
                  <div className='bu'>
                    <p className='ed'>EDITAR</p>
                </div>
        
                <div className='bu'>
                    <p className='edd'>REMOVER</p>
                </div>
        
                    <div className='curtirir'> 
                      <p className='ed1'>Brasilia, MG</p>
                      <p className='ed2'>(11) 9856-4537</p>
                    </div>
               </div>
        
        
              </div>
              <div className='card'>
                <div className='card11'>
                  <div className='especie'>
                     <p className='e'>ESPÉCIE:</p>
                     <p className='avee'>AVE, PERIGUITO AUSTRALIANO</p>
                     <img className='feminino2' src="./images/transferir.png" />
                  </div>
                  <div className='toninha'>
                      <img src='./images/295EBA8218365E46334C355E463303 2.svg'/>
                  </div>
                  <div className='textos2'>
                    <div className='ni'>
                     <p className='na'>Ninota</p>
                     <p className='idade'>IDADE: 2</p>
                    </div>
                    <div className='ps'>
                     <div className='psi'>
                       <p className='pi'>PESO:</p>
                       <p className='ds'>40 g</p>
                     </div>
                     <div className='psi'>
                       <p className='pi'>ALTURA:</p>
                       <p className='ds'>18 cm</p>
                     </div>
                    </div>
                  </div>
                  <div className='dsA'>
                    <p>“ Ninota é totalmente saudavél, enérgica e está a procura de um lar cheio de amor”</p>
                  </div>
                 
                  <div className='bu'>
                    <p className='ed'>EDITAR</p>
                </div>
        
                <div className='bu'>
                    <p className='edd'>REMOVER</p>
                </div>
        
        
                    <div className='curtirir'> 
                      <p className='ed1'>São Paulo, SP</p>
                      <p className='ed2'>(11) 9856-4537</p>
                    </div>
         
                    
                  </div>
        
                  <div className='card11'>
                   <div className='especie'>
                      <p className='e'>ESPÉCIE:</p>
                      <p className='ave'>AVE, POMBO </p>
                      <img className='femininoo' src='./images/transferir.png' />
                   </div>
                   <div className='toninha'>
                       <img className='papagaio' src='./images/thumbnail-for-569174_1582401607 2.svg' />
                   </div>
                   <div className='textos2'>
                     <div className='ni'>
                      <p className='na2'>Bernarda</p>
                      <p className='idade'>IDADE: 3</p>
                     </div>
                     <div className='ps'>
                      <div className='psi'>
                        <p className="pi">PESO:</p>
                        <p className="ds">80 g</p>
                      </div>
                      <div className='psi'>
                        <p className='pi'>ALTURA:</p>
                        <p className='ds'>9 cm</p>
                      </div>
                     </div>
                   </div>
                   <div className='dsA'>
                     <p>“ Bernarda tem alguns problemas de alimentação e é bastante tímida, mas tem muito amor para dar”</p>
                   </div>
                   <div className='bu'>
                    <p className='ed'>EDITAR</p>
                </div>
        
                <div className='bu'>
                    <p className='edd'>REMOVER</p>
                </div>
                     <div className='curtirir'> 
                       <p className='ed1'>Brasilia, MG</p>
                       <p className='ed2'>(11) 9856-4537</p>
                     </div>
                </div>
              
              <div>
              </div>
              </div>
             </div>
           </div>
           </div>

        
    )
}