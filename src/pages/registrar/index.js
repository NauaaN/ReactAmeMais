
import './index.scss';
import{ Link } from 'react-router-dom';
import '../../common/common.scss';

export default function index() {

    return(
      <main className='faixa1'>
    <header className='faixa-cima'>
        <img className='img134' src=''/>
        <Link to='/ladingpage' className='palavra'>Voltar</Link>
    </header>
    <section className='fundo'>
        <p className='registrar'>Informe seus dados, para te cadastrarmos em nosso site!</p>
        <div className='alinhamento'>
            <div lass='parte2'>
                <p className='informa'>Nome:</p>
                <input className='input1' type='text'/>
                <p className='informa'>CPF:</p>
                <input className='input1' type="text"/>
                <p className='informa'>Endereço:</p>
                <input className='input1' type="text"/>
                <p className='informa'>Senha:</p>
                <input className='input1' type="password"/>
            </div>
            <div className='parte2'>
                <p className='informa'>Telefone:</p>
                <input className='input1' type='text'/>
                <p className='informa'> Sexo:</p>
                <input className='input1' type='text'/>
                <p className='informa'>Email:</p>
                <input className='input1' type='text'/>
                <p className='informa'>Confirme sua senha:</p>
                <input className='input1' type='password'/>
            </div>
        </div>
        <div className='alinhamento'>
            <Link to="/Login" className='butaorg'>Registrar-se</Link>
        </div>
    </section>
</main>

  )
}