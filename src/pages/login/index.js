import { login } from '../../api/loginApi'
import { useState, useRef, useEffect } from 'react';
import './index.scss';
import LoadingBar from 'react-top-loading-bar';
import{ Link, useNavigate } from 'react-router-dom';
import storage from 'local-storage'
import '../../common/common.scss';


export default function Index() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState(false);

    const navigate = useNavigate();
    const ref= useRef();
    
    useEffect(() => {
        if(storage('usuario-logado')) {
           
        }
    })

    async function entrarClick() {
        ref.current.continuousStart()
        setCarregando(true);

        try {
            
            const asnwer = await login(email, senha);
            storage('usuario-logado', asnwer);
            console.log(storage('usuario-logado'))

            setTimeout(() =>{
                navigate('/verpets');
            }, 2000);
       

        } catch (err) {
            ref.current.complete();
            setCarregando(false);
            if (err.response.status === 401) {
                setErro(err.response.data.erro);
            }
        }
    
    }

    return (
    
    <main className ='logink'>

        <LoadingBar color='rgba(254, 193, 138, 1)' ref={ref} />
        <div className= 'faixak'>
           <img className='logok' src='./images/IMG-20220418-WA0079_3.svg'/>
           <div className='bot15'>
               <Link to='/' className="textomk">Voltar</Link>
           </div>
           </div>
            <div className='login2k'>
                <div className='pak'>
            <div className='testek'> <p className='entrak'>Entrar</p></div>
               
                <p className='cak'>EMAIL:</p>
                <input className='esp2k' type="textk" placeholder='Insira seu Email' value={email} onChange={e => setEmail(e.target.value)}/>
                <p className='cak'>SENHA:</p>
                <input className ='esp2k' type="password" placeholder='Insira sua Senha'value={senha} onChange={e => setSenha(e.target.value)}/>
                <div className='contak'>
                    <p className='c1k'>Ainda não tem uma conta? </p>
                    <Link to='/Registrar' className='c2k'>Registre-se</Link>
                </div>
                <div className='Lk'>
                    <button className='botaok t2' onClick={entrarClick} disabled={carregando}>Login</button>  
                </div>
                <div className='form-entrar'>{erro}</div>
                </div>
                </div>
        </main>

    )
}