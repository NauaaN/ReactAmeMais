import './index.scss'
import { Link } from 'react-router-dom'
import '../../common/common.scss'

export default function Index () {
    return (
        <div className='filtrarxx'>
        <div className='filtrar2xx'>
            <div className='funilxx'>
                <img src='/images/Union.svg' />
            </div>
            <div className='nominhoxx'>
                FILTRAR
            </div>
        <div className='t1'>
            	
&#709; Espécie
        </div>
        <div className='checkxx'>
         <input className='inputt' type='checkbox'/>
         <p className='txtxx'>Aves</p>
         </div>

         <div className='checkxx'>
            <input className='inputt' type='checkbox'/>
            <p className='txtxx'>cachorros</p>
            </div>

            <div className='checkxx'>
                <input className='inputt' type='checkbox'/>
                <p className='txtxx '>Gatos</p>
                </div>

                <div className='checkxx'>
                    <input className='inputt' type='checkbox'/>
                    <p className='txttxx'>Roedores</p>
                    </div>
                    <div className='t2xx'>
                    	
&#709; Gênero
                    </div>
     <div className='checkxx'>
     <input className='inputt' type='checkbox'/>
     <p className='txtxx'>Feminino</p>
     </div>

     <div className='checkxx'>
        <input className='inputt' type='checkbox'/>
        <p className='txttxx'>Masculino</p>
        </div>

        <div className='checkxx'>
        <input className='inputt' type='checkbox'/>
        <p className='txttxx'>Todos</p>
        </div>

    
      

     <div className='nxx'>
    <Link className='bxx' to='/verpets'>FILTRAR</Link>
    </div>

    <div className='nxx'>
        <Link className='bbxx' to='/'>Voltar ao menu</Link>
   </div> 

   <div className='nxx'>
    <Link className='bbbxx' to='/meuspets'>Editar &nbsp; +PETS</Link>
</div> 
   

      
    </div>
    

    <div className='principaljj'>
              <div className='loginjjj'>
                <div className='simbolojj'>
                <img className='lljj' src='./images/IMG-20220418-WA0079_1.svg' alt=''/>
                <Link to='/verpets'>
                  <img className='filtrarongcaa' src= '../images/Component 1.svg'/>
                </Link>
                </div>
               <div className='login1jj'>
                <Link className='aajj' to='/cadastrarpet'>+ &nbsp; PET</Link>
                <p className='nomejj'>Nauan dos Santos
                </p>
                <img className='nauanjj' src='./images/nauanigual.svg' alt=''/>
                </div>
             </div>
        
             <div className='editarjj'>
         
             </div>
            <div>
            
             </div>
        
            <div className='lucaojj'>
             <div className='cardpjj'>
               <div className='cardjj'>
               <div className='card1jjj'>
                 <div className='especiejj'>
                    <p className='ejj'>ESPECIE:</p>
                    <p className='avejj'>AVE, CALOPSITA</p>
                    <img className='femininojj' src='./images/mulhe.png' alt=''/>
                 </div>
                 <div className='toninhajj'>
                     <img src='./images/toninhaa.svg' alt=''/>
                 </div>
                 <div className='textos2jj'>
                   <div className='nijj'>
                    <p className='najj'>Toninha</p>
                    <p className='idadejj'>IDADE: 3</p>
                   </div>
                   <div className='psjj'>
                    <div className='psijj'>
                      <p className='pijj'>PESO:</p>
                      <p className='dsjj'>80 g</p>
                    </div>
                    <div className='psijj'>
                      <p className='pijj'>ALTURA:</p>
                      <p className='dsjj'>9 cm</p>
                    </div>
                   </div>
                 </div>
                 <div className='dsAjjj'>
                   <p>“ Toninha é totalmente saudavél, enérgica e está a procura de um lar cheio de amor”</p>
                 </div>
                <div className='bujj'>
                    <img className='curtir' alt='' src='./images/Like.svg'/>
                    <p className='idadejj'>30</p>
                </div>
        
                <div className='bujj'>
                
                </div>
                
                   <div className='curtirirjj'> 
                     <p className='ed1jj'>São paulo, Sp</p>
                     <p className='ed2jj'>(11) 9856-4537</p>
                   </div>
        
                   
                 </div>
                 <div className='card1jjjj'>
                  <div className='especiejj'>
                     <p className='ejj'>ESPÉCIE:</p>
                     <p className='avejj'>AVE, PAPAGAIO </p>
                     <img className='MAScULINOjj' src='./images/homi.png' alt=''/>
                  </div>
                  <div className='toninhajj'>
                      <img className='papagaiojj'src='./images/joaop.svg' alt=''/>
                  </div>
                  <div className='textos2jj'>
                    <div className='nijj'>
                     <p className='na2jj'>João paulo</p>
                     <p className='idadejj'>IDADE: 7</p>
                    </div>
                    <div className='psjj'>
                     <div className='psijj'>
                       <p className='pijj'>PESO:</p>
                       <p className='dsjj'>405 g</p>
                     </div>
                     <div className='psijj'>
                       <p className='pijj'>ALTURA:</p>
                       <p className='dsjj'>35 cm</p>
                     </div>
                    </div>
                  </div>
                  <div className='dsAjjj'>
                    <p>“ João paulo tem alguns problemas de alimentação e é bastante tímido, mas tem muito amor para dar”</p>
                  </div>
                 
                  <div className='bujj'>
                  <img className='curtir' alt='' src='./images/Like.svg'/>
                    <p className='idadejj'>30</p>
                </div>
        
                <div className='bujj'>
                    
                </div>
        
                    <div className='curtirirjj'> 
                      <p className='ed1jj'>Brasilia, GO</p>
                      <p className='ed2jj'>(11) 9856-4537</p>
                    </div>
               </div>
        
        
              </div>
              <div className='cardjj'>
                <div className='card11jjj'>
                  <div className='especiejj'>
                     <p className='ejj'>ESpÉcIE:</p>
                     <p className='aveejj'>AVE, PERIQUITO AUSTRALIANO</p>
                     <img className='femininoojjjx' src='./images/mulhe.png' alt=''/>
                  </div>
                  <div className='toninhajj'>
                      <img src='./images/ninotaa.svg' alt=''/>
                  </div>
                  <div className='textos2jj'>
                    <div className='nijj'>
                     <p className='najj'>Ninota</p>
                     <p className='idadejj'>IDADE: 2</p>
                    </div>
                    <div className='psjj'>
                     <div className='psijj'>
                       <p className='pijj'>PESO:</p>
                       <p className='dsjj'>40 g</p>
                     </div>
                     <div className='psijj'>
                       <p className='pijj'>ALTURA:</p>
                       <p className='dsjj'>18 cm</p>
                     </div>
                    </div>
                  </div>
                  <div className='dsAjjj'>
                    <p>“ Ninota é totalmente saudavél, enérgica e está a procura de um lar cheio de amor”</p>
                  </div>
                 
                  <div className='bujj'>
                  <img className='curtir' alt='' src='./images/Like.svg'/>
                    <p className='idadejj'>30</p>
                </div>
        
                <div className='bujj'>
                   
                </div>
        
        
                    <div className='curtirirjj'> 
                      <p className='ed1jj'>São paulo, Sp</p>
                      <p className='ed2jj'>(11) 9856-4537</p>
                    </div>
         
                    
                  </div>
        
                  <div className='card11jj'>
                   <div className='especiejj'>
                      <p className='ejj'>ESPÉCIE:</p>
                      <p className='avejj'>AVE, POMBO </p>
                      <img className='femininoojjj' src='./images/mulhe.png' alt=''/>
                   </div>
                   <div className='toninhajj'>
                       <img className='papagaiojj' src='./images/pomba.svg' alt=''/>
                   </div>
                   <div className='textos2jj'>
                     <div className='nijj'>
                      <p className='na2jj'>Bernarda</p>
                      <p className='idadejj'>IDADE: 3</p>
                     </div>
                     <div className='psjj'>
                      <div className='psijj'>
                        <p className='pijj'>PESO:</p>
                        <p className='dsjj'>80 g</p>
                      </div>
                      <div className='psijj'>
                        <p className='pijj'>ALTURA:</p>
                        <p className='dsjj'>9,2 cm</p>
                      </div>
                     </div>
                   </div>
                   <div className='dsAjjj'>
                     <p>“ Bernarda tem alguns problemas de alimentação e é bastante tímida, mas tem muito amor para dar”</p>
                   </div>
                   <div className='bujj'>
                   <img className='curtir' alt='' src='./images/Like.svg'/>
                    <p className='idadejj'>30</p>
                </div>
        
                <div className='bujj'>
                    
                </div>
                     <div className='curtirirjj'> 
                       <p className='ed1jj'>Brasilia, </p>
                       <p className='ed2jj'>(11) 9856-4537</p>
                     </div>
                </div>
              
              <div>
              </div>
              </div>
             </div>
           </div>
           </div>

    </div>
    )
}