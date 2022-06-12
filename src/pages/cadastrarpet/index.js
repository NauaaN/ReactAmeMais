import './index.scss';
import { Link } from 'react-router-dom';
import '../../common/common.scss';
import { useState } from 'react';
import { cadastrarPet, enviarImagemPet} from '../../api/petAPi'
import storage from 'local-storage'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function Index() {
    const [animal, setAnimal] = useState('');
    const [especie, setEspecie] = useState('');
    const [nome, setNome] = useState('');
    const [genero, setGenero] = useState('');
    const [idade, setIdade] = useState('');
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [telefone, setTelefone ] = useState('');
    const [endereco, setEndereco] = useState('');
    const [comentario, setComentario] = useState('');
    const [imagem, setImagem] = useState('');


    
   async function salvarClick(){
        try{
            const usuario = storage('usuario-logado').id;
            const r = await cadastrarPet(animal, especie, nome, genero, idade, peso, altura, telefone, endereco, comentario, usuario );
  
            toast.error('Pet cadastrado com sucesso!');
            
        } catch (err){
            toast.error(err.message);
        }
    }
    
    return(
     <div className='fundox'>
          <ToastContainer />
     <header className='faixav'>
        <img className='logov' src='./images/IMG-20220418-WA0079_3.svg' />
        <div>
            <Link to='/'className="botoesv">Voltar</Link>
            <button onClick={salvarClick} className="botoesu">Finalizar</button>
        </div>
    </header>

    <div className='descricaov'><h1>Cadastrar Pet para Adoção</h1></div>

    <main className='containerv'>
        <section className='bloco1v'>
            <div className='animalzinhov'>
                <p className='letras'>Animal:</p>
                <input className='primeirov' value={animal} onChange= {e => setAnimal(e.target.value)}/>
            </div>
            <div className='especiev'>
             <div>
                 <p className='letras'>Espécie:</p>
                 <input className='segundov' value={especie} onChange= {e => setEspecie(e.target.value)}/>
             </div>
             <div className='testev'>
                 <p className='letras'>Gênero:</p>
                 <input className='terceirov' value={genero} onChange= {e => setGenero(e.target.value)}/>
             </div>
            </div>

            <div className='NOMEv'>
                <div>
                    <p className='letras'>Nome:</p>
                    <input className='quartov' value={nome} onChange= {e => setNome(e.target.value)}/>
                </div>
                <div className='testev'>
                    <p className='letras'>Idade:</p>
                    <input className='quintov' value={idade} onChange= {e => setIdade(e.target.value)}/>
                </div>
               </div>

               <div className='PESOv'>
                <div>
                    <p className='letras'>Peso:</p>
                    <input className='sextov' value={peso} onChange= {e => setPeso(e.target.value)}/>
                </div>
                <div className='testev'>
                    <p className='letras'>Altura:</p>
                    <input className='setimov' value={altura} onChange= {e => setAltura(e.target.value)}/>
                </div>
               </div>

               <div className='PhoneNumberv'>
                <p className='letras'>Telefone para Contato:</p>
                <input className='oitavov'  value={telefone} onChange= {e => setTelefone(e.target.value)} />
            </div>

            <div className='CEPv'>
                <p className='letras'>Endereço:</p>
                <input className='nonov'  value={endereco} onChange= {e => setEndereco(e.target.value)}/>
            </div>   
        </section>

        <section className='bloco2v'>
            <div className='Cometariosv'>
                <p className='letras'>Coméntarios Sobre (Doenças/alergias):</p>
                <input className='decimov'  value={comentario} onChange= {e => setComentario(e.target.value)}/>
            </div>

            <div className='ImagemPetv'>
                <p className='letras'>Adicione Uma Imagem do Pet:</p>
                <input type="file" className='onzev'  />
            </div>
        </section>

    </main>

     </div>
      
    )
}