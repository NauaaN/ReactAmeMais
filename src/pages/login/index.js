import axios from 'axios';
import { useState, useRef, useEffect } from 'react';

import './index.scss';

import{ Link, useNavigate } from 'react-router-dom';
import '../../common/common.scss';


export default function Index() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');

    const navigate = useNavigate();
    const ref= useRef();


    async function entrarClick() {
        try {
            const asnwer = await axios.post('http://localhost:5000/usuario/login', {
                email: email,
                senha: senha
            });

        navigate('/Verpets');

        } catch (err) {

            if (err.response.status === 401) {
                setErro(err.response.data.erro);
            }
        }
    
    }

    return (
    
    <main className ='logink'>
        <div className= 'faixak'>
           <img className='logok' src='./images/IMG-20220418-WA0079_3.svg'/>
           <div className='bot15'>
               <Link to='/ladingpage' className="textomk">Voltar</Link>
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
                    <button className='botaok t2' onClick={entrarClick}>Login</button>  
                </div>
                <div className='form-entrar'>{erro}</div>
                </div>
                </div>
        </main>

    )
}