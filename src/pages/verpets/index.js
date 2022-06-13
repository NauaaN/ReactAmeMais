import './index.scss';
import{ Link } from 'react-router-dom';
import '../../common/common.scss';
import { useEffect, useState } from 'react';
import PetsCards from '../components/petsCard'
import { listarTodosPets } from '../../api/petAPi';
export default function Index() {
  const [pets, setPets] = useState([]);

async function carregarPets(){
      const resp = await listarTodosPets();
      console.log(resp);
      setPets(resp);
}



useEffect(() => {
  carregarPets();
}, [])

  return(
     
    
    <div className='principaljj'>
            <div className='loginjj'>
              <div className='simbolojj'>
              <img className='lljj' src= '../images/IMG-20220418-WA0079_3.svg'/>
              
              <Link to='/filtrar'>
                <img className='filtrarongc' src= '../images/Component 1.svg'/>
              </Link>
              </div>
             <div className='login1jj'>
              <Link className="aajj" to='/cadastrarpet'>+ &nbsp; PET</Link>
              <p className='nomejj'>Nauan dos Santos
              </p>
              <img className='nauanjj' src='./images/nauanigual.svg'/>
              </div>
           </div>
    
      
          <div className='lucaojjn'>

          {pets.map(item =>
           <PetsCards item={item} />
                )}
            </div>    
         
         
        </div>
      
  )
}