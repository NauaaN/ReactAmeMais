import './index.scss';
import{ Link } from 'react-router-dom';
import '../../common/common.scss';
import { cadastrarUsuario } from '../../api/registroApi';
import storage from 'local-storage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { useState } from 'react';

export default function Index() {

    const [nome, setNome]= useState('');
    const [cpf, setCpf]= useState('');
    const [endereco, setEndereco]= useState('');
    const [senha, setSenha]= useState('');
    const [senha2, setSenha2]= useState('');
    const [telefone, setTelefone]= useState('');
    const [sexo, setSexo]= useState('');
    const [email, setEmail]= useState('');


    async function salvarClick () {
        try{
        const usuario = storage('usuario-logado');
         const resposta = await cadastrarUsuario(usuario, nome, cpf,email,senha,sexo,endereco,telefone);
        
         toast.success('Usuario cadastrado com sucesso!');
        }
        catch(err){
            console.log(err);
            toast.error(err.message);
        }
       }

    return(
      <main className='faixa1'>
    <header className='faixa-cima'>
    <ToastContainer />
        <img className='img134' src=''/>
        <Link to='/' className='palavra'>Voltar</Link>
    </header>
    <section className='fundo'>
        <p className='registrar'>Informe seus dados, para te cadastrarmos em nosso site!</p>
        <div className='alinhamento'>
            <div lass='parte2'>
            <p className='informa'>Nome:</p>
                <input className='input1' type='text'  value={nome} onChange={ e => setNome(e.target.value)}/>
                <p className='informa'>CPF:</p>
                <input className='input1' type="text"  value={cpf} onChange={ e => setCpf(e.target.value)}/>
                <p className='informa'>Endereço:</p>
                <input className='input1' type="text"  value={endereco} onChange={ e => setEndereco(e.target.value)}/>
                <p className='informa'>Senha:</p>
                <input className='input1' type="password"  value={senha} onChange={ e => setSenha(e.target.value)}/>
            </div>
            <div className='parte2'>
            <p className='informa'>Telefone:</p>
                <input className='input1' type='text'  value={telefone} onChange={ e => setTelefone(e.target.value)}/>
                <p className='informa'> Sexo:</p>
                <input className='input1' type='text'  value={sexo} onChange={ e => setSexo(e.target.value)}/>
                <p className='informa'>Email:</p>
                <input className='input1' type='text'  value={email} onChange={ e => setEmail(e.target.value)}/>
                <p className='informa'>Confirme sua senha:</p>
                <input className='input1' type='password'  value={senha2} onChange={ e => setSenha2(e.target.value)}/>
            </div>
        </div>
        <div className='alinhamento'>
            <button className='butaorg' onClick={salvarClick}>Registrar-se</button>
        </div>
    </section>
</main>

  )
}