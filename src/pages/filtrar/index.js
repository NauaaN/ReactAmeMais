import './index.scss'
import { Link } from 'react-router-dom'
import '../../common/common.scss'
import PetsCards from '../components/petsCard'
import { filtrarPets, listarTodosPets } from '../../api/petAPi'
import { useEffect, useState } from 'react'
import storage from 'local-storage'
import { useNavigate } from 'react-router-dom';


export default function Index() {
  const [pets, setPets] = useState([]);
  const [usuario, setUsuario] = useState('');
  const [filtroGenero, setFiltroGenero] = useState('');
  const [filtroAnimal, setFiltroAnimal] = useState('');


  async function filtrando() {
    const resposta = await filtrarPets(filtroGenero, filtroAnimal);
    setPets(resposta);
  }

  async function carregarPets() {
    const resp = await listarTodosPets();
    console.log(resp);
    setPets(resp);
  }

  function estaMarcadoAnimal(filtro) {
    return filtro == filtroAnimal;
  }

  function marcarAnimal(filtro) {
    setFiltroAnimal(filtro);
  }

  
  function estaMarcadoGenero(filtro) {
    return filtro == filtroGenero;
  }

  function marcarGenero(filtro) {
    setFiltroGenero(filtro);
  }


  useEffect(() => {    if(!storage('usuario-logado')) {
    navigate('/');
}else{
   const usuarioLogado= storage('usuario-logado');
     setUsuario(usuarioLogado.nome);
}
    
    carregarPets();
  }, [])

  const navigate = useNavigate();
  function sairClick(){
      storage.remove('usuario-logado');
      navigate('/')
  }
  
  

  return (
    <div className='filtrarxx'>
      <div className='filtrar2xx'>
        <div className='funilxx'>
          <img src='/images/Union.svg' />
        </div>
        <div className='nominhoxx'>
          FILTRAR
        </div>
        <div className='t1'>

          &#709; Espécie
        </div>
        <div className='checkxx'>
          <form>
            <input type="checkbox" id="fruit1" name="fruit-1" checked={estaMarcadoAnimal('Ave')} onChange={e => e.target.checked && marcarAnimal('Ave')} />
            <label for="fruit1">Aves</label>

            <input type="checkbox" id="fruit2" name="fruit-2" checked={estaMarcadoAnimal('Cachorro')} onChange={e => e.target.checked && marcarAnimal('Cachorro')} />
            <label for="fruit2">Cachorros</label>

            <input type="checkbox" id="fruit3" name="fruit-3" checked={estaMarcadoAnimal('Gato')} onChange={e => e.target.checked && marcarAnimal('Gato')} />
            <label for="fruit3">Gatos</label>

            <input type="checkbox" id="fruit4" name="fruit-4" checked={estaMarcadoAnimal('Roedor')} onChange={e => e.target.checked && marcarAnimal('Roedor')} />
            <label for="fruit4">Roedores</label>

            <input type="checkbox" id="fruittt3" name="fruit-3" checked={estaMarcadoAnimal('Todos')} onChange={e => e.target.checked && marcarAnimal('Todos')} />
            <label for="fruittt3">Todos</label>
          </form>

        </div>
        <div className='t2xx'>
          &#709; Gênero
        </div>
        <div className='checkxx'>
          <form>
            <input type="checkbox" id="fruitt1" name="fruit-1"checked={estaMarcadoGenero('macho')} onChange={e => e.target.checked && marcarGenero('macho')}/>
            <label for="fruitt1">Macho</label>
            <input type="checkbox" id="fruitt2" name="fruit-2"checked={estaMarcadoGenero('femea')} onChange={e => e.target.checked && marcarGenero('femea')}/>
            <label for="fruitt2">Femêa</label>
            <input type="checkbox" id="fruitt3" name="fruit-3"checked={estaMarcadoGenero('todos')} onChange={e => e.target.checked && marcarGenero('todos')}/>
            <label for="fruitt3">Todos</label>

          </form>
        </div>




        <div className='nxx'>
          <button className='bxx' onClick={filtrando}>FILTRAR</button>
        </div>

        <div className='nxx' >
          <Link className='bbxx' to='/'>Voltar ao menu</Link>
        </div>

        <div className='nxx'>
          <Link className='bbbxx' to='/meuspets'>Editar &nbsp; +PETS</Link>
        </div>
     
        <div className='alinharbj' onClick={sairClick}>
               <div className='botaosair1'>
                <img alt='' src='/images/Logout.svg' />
                <p className='textobotaoj'>&nbsp;SAIR</p>
                </div>
            </div>
            </div>


      <div className='principaljj'>
        <div className='loginjjj'>
          <div className='simbolojj'>
          <Link to='/verpets'>
            <img className='lljj' src='./images/IMG-20220418-WA0079_1.svg' alt='' />
              <img className='filtrarongcaa' src='../images/Component 1.svg' />
            </Link>
          </div>
          <div className='login1jj'>
            <Link className='aajj' to='/cadastrarpet'>+ &nbsp; PET</Link>
            <p className='nomejj'>{usuario}
            </p>
            <span className='nauanjj'> {usuario[0]}</span>
          </div>
        </div>

        <div className='editarjj'>

        </div>
        <div>

        </div>

        <div className='lucaojjn'>
          {pets.map(item =>
            <PetsCards item={item} />
          )}
        </div>
      </div>

    </div>
  )
}