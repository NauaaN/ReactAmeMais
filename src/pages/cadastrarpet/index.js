import './index.scss';
import { Link } from 'react-router-dom';
import '../../common/common.scss';

export default function index() {

    return(
      
     
       <div className='loginm'>
            <div className='faixam'>
            <img className='logom' src='./images/IMG-20220418-WA0079_3.svg'/>
           

             <div className='hateem'>
             <Link className='textom' to='./landingpage'>Finalizar</Link>
             </div>
            </div>
        <div className='container1m'>
                <div>
                  <h1>Cadastrar Pet para Adoção</h1>
                  <p className='nova'>Animal:</p>
                </div>
          <div>
        <div className='testeem'>
              <div className='duchym' >
                 <div>
                   <div>
                    </div> 
                 </div>
               <div>
              <div> <input className='lolm Juh' type='text'/></div>
               </div>
            </div>
            
          <div className='campm'>
              <div>
                <div><p className='novaa'>Comentários Sobre (Doenças/Alergias):</p></div>
              </div>
              <div>
              <div><input className='carraram Juh' type='text'/></div>
              </div>
            <div>
              <div><p className='novaa'>Adicione Uma Imagem do Pet: </p></div>
            </div>
            <div><input className='doguinhom Juh' type='text'/> </div>
          </div>
        </div>
        
                    
                   
          <div  className='nom'>
            <div className='testem'>
              <div className='derivadam'><p>Espécie:</p></div> 
              <div className='pp'><p>Gênero:</p></div> 
            </div>
              <div className='trym'>
                <input className='lolom Juh' type='text'/>
                <input className='lulam Juh'type='text'/>
              </div> 
            </div>
        
          
            
              <div className='testem'>
                <div className='derivadam'><p>Nome:</p></div>
                <div className='uohhm'><p>Idade:</p></div>
              </div>  
        
          <div className='trym'>
            <input className='lolom Juh' type='text'/> 
            <input className='lulam Juh' type='text'/> 
                   
          </div>
            
        
            
              <div className='testem'>
                <div className='derivadam'><p>Peso:</p></div>
                <div><p className='ppp'>Altura:</p></div>
              </div>  
                <div className='trym'>
                  <input className='louisem Juh' type='text'/>
                  <input className='louvm Juh' type='text'/>
                </div>    
            
        
          <div>
             <p className='novaa'>Telefone para Contato:</p>
                <input className='enolam Juh' type='text'/>
             <p className='novaa'>Endereço:</p>
                <input className='enolam Juh temporario' type='text'/>
          </div>
        
          
          </div>
        </div>       
        </div>
        
    )
}