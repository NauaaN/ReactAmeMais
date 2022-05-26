import './index.scss';
import { Link } from 'react-router-dom';
import '../../common/common.scss';

export default function index() {

    return(
      
     <div className='fundo'>
<header className='faixa'>
        <img className='logo' src='./images/IMG-20220418-WA0079_3.svg' />
        <div><button>Finalizar</button></div>
    </header>

    <div className='descricao'><h1>Cadastrar Pet para Adoção</h1></div>
    <div>
      
    </div>

    <main className='container'>
        <section className='bloco1'>
            <div className='animalzinho'>
                <p>Animal</p>
                <input className='primeiro'/>
            </div>
            <div className='especie'>
             <div>
                 <p>Espécie:</p>
                 <input className='segundo'/>
             </div>
             <div className='teste'>
                 <p>Gênero:</p>
                 <input className='terceiro'/>
             </div>
            </div>

            <div className='NOME'>
                <div>
                    <p>Nome:</p>
                    <input className='quarto'/>
                </div>
                <div className='teste'>
                    <p>Idade:</p>
                    <input className='quinto'/>
                </div>
               </div>

               <div className='PESO'>
                <div>
                    <p>Peso:</p>
                    <input className='sexto'/>
                </div>
                <div className='teste'>
                    <p>Altura:</p>
                    <input className='setimo'/>
                </div>
               </div>

               <div className='PhoneNumber'>
                <p>Telefone para Contato:</p>
                <input className='oitavo'/>
            </div>

            <div className='CEP'>
                <p>Endereço:</p>
                <input className='nono'/>
            </div>   
        </section>

        <section className='bloco2'>
            <div className='Cometarios'>
                <p>Coméntarios Sobre (Doenças/alergias):</p>
                <input className='decimo'/>
            </div>

            <div className='ImagemPet'>
                <p>Adicione Uma Imagem do Pet:</p>
                <input className='onze'/>
            </div>
        </section>

    </main>

     </div>
      
    )
}