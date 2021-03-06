import './index.scss';
import { Link, useNavigate } from 'react-router-dom';
import '../../common/common.scss';
import { useState,  useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { cadastrarPet, enviarImagemPet, buscarPorId, buscarImagem, alterarPete} from '../../api/petAPi'
import storage, { set } from 'local-storage'
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
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [comentario, setComentario] = useState('');
    const [imagem, setImagem] = useState();
    const [id, setId] = useState(0);

    const navigate = useNavigate();
    
    const {idParam} = useParams();    



    async function carregarPet(){
        const [resposta]= await buscarPorId(Number(idParam));
        setAnimal(resposta.animal);
        setEspecie(resposta.especie);
        setNome(resposta.nome);
        setGenero(resposta.genero);
        setIdade(resposta.idade);
        setPeso(resposta.peso);
        setAltura(resposta.altura);
        setTelefone(resposta.telefone);
        setEndereco(resposta.endereco);
        setComentario(resposta.comentario);
        
        setImagem(resposta.imagem);
        setId(resposta.id);
    }

    useEffect(() => {
        if(idParam !=0) {
            carregarPet();
        }
    }, [])
  

    async function salvarClick() {
        try {
            if (!imagem) throw new Error('Escolha a imagem do pet.');
            if (!nome ) throw new Error('O campo nome é obrigatório.');
            if (!genero || !genero.trim()) throw new Error('O campo gênero é obrigatório.');
            if (isNaN(idade) )throw new Error('O campo idade é obrigatório..');
            if (isNaN(peso)) throw new Error('O campo peso é obrigatório.');
            if (isNaN (altura)) throw new Error('O campo altura é obrigatório.');
            if (isNaN (telefone)) throw new Error('O campo telefone é obrigatório.');
            if (!endereco) throw new Error('O campo endereço é obrigatório.');


           
            const usuario = storage('usuario-logado').id;

            if (usuario === 0 )throw new Error('Você não é um usuario logado.');

            if(id === 0) {
            const novoPet = await cadastrarPet(animal, especie, nome, genero, idade, peso, altura, telefone, endereco, comentario, usuario);
            const r = await enviarImagemPet(novoPet.id, imagem);

            setId(novoPet.id);

            toast.success('Pet cadastrado com sucesso!');

            }
             else{
                await alterarPete(id,animal, especie, nome, genero, idade, peso, altura, telefone, endereco, comentario,usuario);
               
                if (typeof (imagem) == 'object')
                    await enviarImagemPet(id, imagem);

                toast.success('Pet alterado com sucesso!');
            }
           
        } catch (err) {
            if (err.response)
                toast.error(err.response.data.erro);

            else
                toast.error(err.message)
        }

       
    }
    function escolherImagem() {
        document.getElementById('imagemCapa').click();
    }
    function mostrarImagem() {
        if (typeof (imagem) == 'object'){
            return URL.createObjectURL(imagem);
        }
        else {
            return buscarImagem(imagem);
        }
        
    }

    useEffect(() => {
        if(!storage('usuario-logado')) {
            navigate('/login');
        }
      }, [])

      function novoClick(){
        setAnimal('');
        setEspecie('');
        setNome('');
        setGenero('');
        setPeso('');
        setAltura('');
        setIdade('');
        setTelefone('');
        setEndereco('');
        setComentario('');
        setImagem();
        
      }

    return (
        <div className='fundox'>

            <header className='faixav'>
                <img className='logov' src='../images/IMG-20220418-WA0079_3.svg' />
                <div className='juh'>
                    <Link to='/' className="botoesv">Voltar</Link>
                    <button onClick={salvarClick} className="botoesu"> {id === 0 ? 'Finalizar' : 'Alterar' } </button>
                    <button onClick={novoClick} className="botoesu">Resetar</button>


                    <ToastContainer />
                </div>
            </header>

            <div className='descricaov'><h1>Cadastrar Pet para Adoção</h1></div>

            <main className='containerv'>
                <section className='bloco1v'>
                    <div className='animalzinhov'>
                        <p className='letras'>Animal:</p>
                        <input className='primeirov' value={animal} maxLength={10} onChange={e => setAnimal(e.target.value)} />
                    </div>
                    <div className='especiev'>
                        <div>
                            <p className='letras'>Espécie:</p>
                            <input className='segundov' value={especie} maxLength={10} onChange={e => setEspecie(e.target.value)} />
                        </div>
                        <div className='testev'>
                            <p className='letras'>Gênero:</p>
                            <input className='terceirov' value={genero} onChange={e => setGenero(e.target.value)} />
                           
                        </div>
                    </div>

                    <div className='NOMEv'>
                        <div>
                            <p className='letras'>Nome:</p>
                            <input className='quartov' value={nome} maxLength={13} onChange={e => setNome(e.target.value)} />
                        </div>
                        <div className='testev'>
                            <p className='letras'>Idade:</p>
                            <input className='quintov' value={idade} maxLength={2} onChange={e => setIdade(e.target.value)} />
                        </div>
                    </div>

                    <div className='PESOv'>
                        <div>
                            <p className='letras'>Peso:</p>
                            <input className='sextov' value={peso} maxLength={4} onChange={e => setPeso(e.target.value)} />
                        </div>
                        <div className='testev'>
                            <p className='letras'>Altura:</p>
                            <input className='setimov' value={altura} maxLength={4} onChange={e => setAltura(e.target.value)} />
                        </div>
                    </div>

                    <div className='PhoneNumberv'>
                        <p className='letras'>Telefone para Contato:</p>
                        <input className='oitavov' value={telefone} maxLength={16} onChange={e => setTelefone(e.target.value)} />
                    </div>

                    <div className='CEPv'>
                        <p className='letras'>Endereço:</p>
                        <input className='nonov' value={endereco} maxLength={10} onChange={e => setEndereco(e.target.value)} />
                    </div>
                </section>

                <section className='bloco2v'>
                    <div className='Cometariosv'>
                        <p className='letras'>Coméntarios Sobre (Doenças/alergias):</p>
                        <input className='decimov' value={comentario} maxLength={35} onChange={e => setComentario(e.target.value)} />
                    </div>
                    
                        <div><p className='letras'>Adicione Uma Imagem do Pet:</p></div>

                    <div className='ImagemPetv' onClick={escolherImagem}>

                        {!imagem &&
                            <img className='ImagemPett' src="../images/upload (1).svg" />
                        }

                        {imagem &&
                            <img className='imagem-pet' src={mostrarImagem()} alt='' />
                        }

                        <input className='onzev' type="file" id='imagemCapa' onChange={e => setImagem(e.target.files[0])} />
                    </div>
                </section>

            </main>

        </div>

    )
}