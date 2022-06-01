import './index.scss';
import { Link } from 'react-router-dom';
import '../../common/common.scss';

export default function index() {

    return(
      
     <div className='fundo'>
<header className='faixav'>
        <img className='logov' src='./images/IMG-20220418-WA0079_3.svg' />
        <div><button>Finalizar</button></div>
    </header>

    <div className='descricaov'><h1>Cadastrar Pet para Adoção</h1></div>
    <div>
      
    </div>

    <main className='containerv'>
        <section className='bloco1v'>
            <div className='animalzinhov'>
                <p>Animal</p>
                <input className='primeirov'/>
            </div>
            <div className='especiev'>
             <div>
                 <p>Espécie:</p>
                 <input className='segundov'/>
             </div>
             <div className='testev'>
                 <p>Gênero:</p>
                 <input className='terceirov'/>
             </div>
            </div>

            <div className='NOMEv'>
                <div>
                    <p>Nome:</p>
                    <input className='quartov'/>
                </div>
                <div className='testev'>
                    <p>Idade:</p>
                    <input className='quintov'/>
                </div>
               </div>

               <div className='PESOv'>
                <div>
                    <p>Peso:</p>
                    <input className='sextov'/>
                </div>
                <div className='testev'>
                    <p>Altura:</p>
                    <input className='setimov'/>
                </div>
               </div>

               <div className='PhoneNumberv'>
                <p>Telefone para Contato:</p>
                <input className='oitavov'/>
            </div>

            <div className='CEPv'>
                <p>Endereço:</p>
                <input className='nonov'/>
            </div>   
        </section>

        <section className='bloco2v'>
            <div className='Cometariosv'>
                <p>Coméntarios Sobre (Doenças/alergias):</p>
                <input className='decimov'/>
            </div>

            <div className='ImagemPetv'>
                <p>Adicione Uma Imagem do Pet:</p>
                <input className='onzev'/>
            </div>
        </section>

    </main>

     </div>
      
    )
}