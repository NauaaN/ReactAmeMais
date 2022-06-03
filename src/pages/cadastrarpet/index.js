import './index.scss';
import { Link } from 'react-router-dom';
import '../../common/common.scss';

export default function index() {

    return(
     <div className='fundox'>
<header className='faixav'>
        <img className='logov' src='./images/IMG-20220418-WA0079_3.svg' />
         <Link to='/ladingpage'className="botoesv">Voltar</Link>
        <Link to='/verpets'className="botoesu">Finalizar</Link>
    </header>

    <div className='descricaov'><h1>Cadastrar Pet para Adoção</h1></div>
    <div>
      
    </div>

    <main className='containerv'>
        <section className='bloco1v'>
            <div className='animalzinhov'>
                <p className='letras'>Animal</p>
                <input className='primeirov'/>
            </div>
            <div className='especiev'>
             <div>
                 <p className='letras'>Espécie:</p>
                 <input className='segundov'/>
             </div>
             <div className='testev'>
                 <p className='letras'>Gênero:</p>
                 <input className='terceirov'/>
             </div>
            </div>

            <div className='NOMEv'>
                <div>
                    <p className='letras'>Nome:</p>
                    <input className='quartov'/>
                </div>
                <div className='testev'>
                    <p className='letras'>Idade:</p>
                    <input className='quintov'/>
                </div>
               </div>

               <div className='PESOv'>
                <div>
                    <p className='letras'>Peso:</p>
                    <input className='sextov'/>
                </div>
                <div className='testev'>
                    <p className='letras'>Altura:</p>
                    <input className='setimov'/>
                </div>
               </div>

               <div className='PhoneNumberv'>
                <p className='letras'>Telefone para Contato:</p>
                <input className='oitavov'/>
            </div>

            <div className='CEPv'>
                <p className='letras'>Endereço:</p>
                <input className='nonov'/>
            </div>   
        </section>

        <section className='bloco2v'>
            <div className='Cometariosv'>
                <p className='letras'>Coméntarios Sobre (Doenças/alergias):</p>
                <input className='decimov'/>
            </div>

            <div className='ImagemPetv'>
                <p className='letras'>Adicione Uma Imagem do Pet:</p>
                <input className='onzev'/>
            </div>
        </section>

    </main>

     </div>
      
    )
}