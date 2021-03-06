import './index.scss';
import{ Link } from 'react-router-dom';
import '../../common/common.scss';
import { useEffect, useState } from 'react';
import PetsCards from '../components/petsCard'
import { listarTodosPets } from '../../api/petAPi';
import { useNavigate } from 'react-router-dom';
import storage from 'local-storage'


export default function Index() {
  const [pets, setPets] = useState([]);
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState('');

async function carregarPets(){
      const resp = await listarTodosPets();
      console.log(resp);
      setPets(resp);
}


useEffect(() => {
  if(!storage('usuario-logado')) {
      navigate('/login');
  }else{
    const usuarioLogado= storage('usuario-logado');
    setUsuario(usuarioLogado.nome);
  }
}, [])

useEffect(() => {
  carregarPets();
}, [])

  return(
     
    
    <div className='principaljj'>
            <div className='loginjj'>
              <div className='simbolojj'>
              <Link to='/'>
                <img className='lljj' src= '../images/IMG-20220418-WA0079_3.svg'/>
              </Link>
              <Link to='/filtrar'>
                <img className='filtrarongc' src= '../images/Component 1.svg'/>
              </Link>
              </div>
             <div className='login1jj'>
              <Link className="aajj" to='/cadastrarpet'>+ &nbsp; PET</Link>
              <p className='nomejj'>{usuario}
              </p>
              <span className='nauanjj'> {usuario[0]}</span>
              </div>
           </div>
    
      
          <div className='lucaojjnverpets'>

          {pets.map(item =>
           <PetsCards item={item}  />
                )}
            </div>    
         
         
        </div>
      
  )
}