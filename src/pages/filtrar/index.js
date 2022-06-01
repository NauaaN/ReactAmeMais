import './index.scss';
import { Link } from 'react-router-dom';
import '../../common/common.scss';

export default function index () {
    return (
        <div class="filtrarxx">
        <div class="filtrar2xx">
            <div class="funilxx">
                <img src="../../assets/images/Union.svg"/>
            </div>
            <div class="nominhoxx">
                FILTRAR
            </div>
        <div class="t1">
            - Espécie
        </div>
        <div class="checkxx">
         <input class="inputt" type="checkbox"/>
         <p class="txtxx">Aves</p>
         </div>

         <div class="checkxx">
            <input class="inputt" type="checkbox"/>
            <p class="txtxx">Cachorros</p>
            </div>

            <div class="checkxx">
                <input class="inputt" type="checkbox"/>
                <p class="txtxx ">Gatos</p>
                </div>

                <div class="checkxx">
                    <input class="inputt" type="checkbox"/>
                    <p class="txttxx">Roedores</p>
                    </div>
                    <div class="t2xx">
                    - Gênero
                    </div>
     <div class="check">
     <input class="inputt" type="checkbox"/>
     <p class="txtxx">Feminino</p>
     </div>

     <div class="checkxx">
        <input class="inputt" type="checkbox"/>
        <p class="txttxx">Masculino</p>
        </div>

        <div class="t2xx">
            - Idade
         </div>

         <div class="checkxx">
            <input class="inputt" type="checkbox"/>
            <p class="txtxx">Idoso</p>
            </div>

            <div class="checkxx">
                <input class="inputt" type="checkbox"/>
                <p class="txtxx">Adulto</p>
                </div>

                <div class="check">
                    <input class="inputt" type="checkbox"/>
                    <p class="txt">Jovem</p>
                    </div>

                    <div class="check">
                        <input class="inputt" type="checkbox"/>
                        <p class="txttt">Filhote</p>
                        </div>

     <div class="n">
    <a class="b" href="../home/index.html">FILTRAR</a>
    </div>

    <div class="n">
        <Link class="bb" href="/landingpage">Voltar ao menu</Link>
   </div> 

   <div class="n">
    <Link class="bbb" href="/cadastrarpet">Editar &nbsp; +pETS</Link>
</div> 
   

      
    </div>
    

    <div className='principaljj'>
              <div className='loginjj'>
                <div className='simbolojj'>
                <img className='lljj' src='./images/IMG-20220418-WA0079 6 (1).svg'/>
                
                <Link to='/filtrar'>
                  <img className='filtrarjj' src='./images/menu.svg'/>
                </Link>
                </div>
               <div className='login1jj'>
                <Link className="aajj" to='/ladingpage'>+ &nbsp; pET</Link>
                <p className='nomejj'>Nauan dos Santos
                </p>
                <img className='nauanjj' src='./images/nauanigual.svg'/>
                </div>
             </div>
        
             <div className='editarjj'>
             <img className='vectorjj' src='./images/homenzinho.svg'/>
             <p className='meusjj'>MEUS pETS:</p>
             </div>
            <div>
             <Link className='bbjj' to='/ladingpage'>VOLTAR</Link>
             </div>
        
            <div className='lucaojj'>
             <div className='cardpjj'>
               <div className='cardjj'>
               <div className='card1jjj'>
                 <div className='especiejj'>
                    <p className='ejj'>ESpÉCIE:</p>
                    <p className='avejj'>AVE, CALOpSITA</p>
                    <img className='femininojj' src='./images/mulhe.png' />
                 </div>
                 <div className='toninhajj'>
                     <img src='./images/toninhaa.svg' />
                 </div>
                 <div className='textos2jj'>
                   <div className='nijj'>
                    <p className='najj'>Toninha</p>
                    <p className='idadejj'>IDADE: 3</p>
                   </div>
                   <div className='psjj'>
                    <div className='psijj'>
                      <p className='pijj'>pESO:</p>
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
                    <p className='edjj'>EDITAR</p>
                </div>
        
                <div className='bujj'>
                    <p className='eddjj'>REMOVER</p>
                </div>
                
                   <div className='curtirirjj'> 
                     <p className='ed1jj'>São paulo, Sp</p>
                     <p className='ed2jj'>(11) 9856-4537</p>
                   </div>
        
                   
                 </div>
                 <div className='card1jjjj'>
                  <div className='especiejj'>
                     <p className='ejj'>ESpÉCIE:</p>
                     <p className='avejj'>AVE, pApAGAIO </p>
                     <img className='MASCULINOjj' src='./images/homi.png' />
                  </div>
                  <div className='toninhajj'>
                      <img className='papagaiojj'src='./images/joaop.svg' />
                  </div>
                  <div className='textos2jj'>
                    <div className="nijj">
                     <p className='na2jj'>João paulo</p>
                     <p className='idadejj'>IDADE: 7</p>
                    </div>
                    <div className='psjj'>
                     <div className='psijj'>
                       <p className='pijj'>pESO:</p>
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
                    <p className='edjj'>EDITAR</p>
                </div>
        
                <div className='bujj'>
                    <p className='eddjj'>REMOVER</p>
                </div>
        
                    <div className='curtirirjj'> 
                      <p className='ed1jj'>Brasilia, MG</p>
                      <p className='ed2jj'>(11) 9856-4537</p>
                    </div>
               </div>
        
        
              </div>
              <div className='cardjj'>
                <div className='card11jjj'>
                  <div className='especiejj'>
                     <p className='ejj'>ESpÉCIE:</p>
                     <p className='aveejj'>AVE, pERIGUITO AUSTRALIANO</p>
                     <img className='femininoojjjx' src="./images/mulhe.png" />
                  </div>
                  <div className='toninhajj'>
                      <img src='./images/ninotaa.svg'/>
                  </div>
                  <div className='textos2jj'>
                    <div className='nijj'>
                     <p className='najj'>Ninota</p>
                     <p className='idadejj'>IDADE: 2</p>
                    </div>
                    <div className='psjj'>
                     <div className='psijj'>
                       <p className='pijj'>pESO:</p>
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
                    <p className='edjj'>EDITAR</p>
                </div>
        
                <div className='bujj'>
                    <p className='eddjj'>REMOVER</p>
                </div>
        
        
                    <div className='curtirirjj'> 
                      <p className='ed1jj'>São paulo, Sp</p>
                      <p className='ed2jj'>(11) 9856-4537</p>
                    </div>
         
                    
                  </div>
        
                  <div className='card11jj'>
                   <div className='especiejj'>
                      <p className='ejj'>ESpÉCIE:</p>
                      <p className='avejj'>AVE, pOMBO </p>
                      <img className='femininoojjj' src='./images/mulhe.png' />
                   </div>
                   <div className='toninhajj'>
                       <img className='papagaiojj' src='./images/pomba.svg' />
                   </div>
                   <div className='textos2jj'>
                     <div className='nijj'>
                      <p className='na2jj'>Bernarda</p>
                      <p className='idadejj'>IDADE: 3</p>
                     </div>
                     <div className='psjj'>
                      <div className='psijj'>
                        <p className="pijj">pESO:</p>
                        <p className="dsjj">80 g</p>
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
                    <p className='edjj'>EDITAR</p>
                </div>
        
                <div className='bujj'>
                    <p className='eddjj'>REMOVER</p>
                </div>
                     <div className='curtirirjj'> 
                       <p className='ed1jj'>Brasilia, MG</p>
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