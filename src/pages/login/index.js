import './index.scss';
import{ Link } from 'react-router-dom';
import '../../common/common.scss';
import '../ladingpage/index.js';
export default function index() {

    return(
 
    <main className ='logink'>
        <div className= 'faixak'>
           <img className='logok' src='./images/IMG-20220418-WA0079_3.svg'/>
           <div className='bot15'>
               <Link to='./Ladingpage' className="textomk">Voltar</Link>
           </div>
           </div>
            <div className='login2k'>
                <div className='pak'>
            <div className='testek'> <p className='entrak'>Entrar</p></div>
               
                <p className='cak'>EMAIL:</p>
                <input className='esp2k' type="textk"/>
                <p className='cak'>SENHA:</p>
                <input className ='esp2k' type="textk"/>
                <div className='contak'>
                    <p className='c1k'>Ainda não tem uma conta? </p>
                    <Link to='./Registrar' className='c2k'>Registre-se</Link>
                </div>
                <div className='Lk'>
                    <button className='botaok t2'>
                     <Link to='./Landingpage' className='tamanhok'>Login</Link>
                    </button>  
                </div>
                </div>
                </div>
        </main>

    )
}