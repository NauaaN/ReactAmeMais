import './index.scss';
import{ Link } from 'react-router-dom';
import '../../common/common.scss';
import '../ladingpage/index.js';
export default function index() {

    return(
 
    <main className ='login'>
        <div className= 'faixa'>
           <img className='logo' src='./images/IMG-20220419-WA0074_1.svg'/>
           <div className='bot15'>
               <Link to='./Ladingpage' className="textom">Voltar</Link>
           </div>
           </div>
            <div className='login2'>
                <div className='pa'>
            <div className='teste'> <p className='entra'>Entrar</p></div>
               
                <p className='ca'>EMAIL:</p>
                <input className='esp2' type="text"/>
                <p className='ca'>SENHA:</p>
                <input className ='esp2' type="text"/>
                <div className='conta'>
                    <p className='c1'>Ainda não tem uma conta? </p>
                    <Link to='./Registrar' className='c2'>Registre-se</Link>
                </div>
                <div className='L'>
                    <button className='botao t2'>
                     <Link to='./Landingpage' className='tamanho'>Login</Link>
                    </button>  
                </div>
                </div>
                </div> 
        </main>

    )
}