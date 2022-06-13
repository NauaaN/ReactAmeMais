import './index.scss'
import { Link } from 'react-router-dom'
import '../../common/common.scss'
import PetsCards from '../components/petsCard'
import {filtrarPets, listarTodosPets} from '../../api/petAPi'
import { useEffect, useState } from 'react'
import { set } from 'local-storage'

export default function Index () {
    const [pets, setPets] = useState([]);
    const [genero , setGenero]= useState('');
    const [animal , setAnimal]= useState('');
    const [checado , setChecado]= useState(false);


    async function filtrando(){
      const resposta= await filtrarPets(genero,animal);
      setPets(resposta);
    }

    useEffect(()=>{
      filtrando();
    }, [])


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
  <input type="checkbox" id="fruit1" name="fruit-1" value={animal} checked={checado} onChange={e=> setChecado(e.target.checked) && setAnimal(e.target.value)} />
  <label for="fruit1">Aves</label>
  <input type="checkbox" id="fruit2" name="fruit-2" value={animal}checked={checado} onChange={e=> setChecado(e.target.checked) && setAnimal(e.target.value)} />
  <label for="fruit2">Cachorros</label>
  <input type="checkbox" id="fruit3" name="fruit-3" value={animal} checked={checado} onChange={e=> setChecado(e.target.checked) && setAnimal(e.target.value)} />
  <label for="fruit3">Gatos</label>
  <input type="checkbox" id="fruit4" name="fruit-4" value={animal} checked={checado} onChange={e=> setChecado(e.target.checked) && setAnimal(e.target.value)}/>
  <label for="fruit4">Roedores</label>
  <input type="checkbox" id="fruittt3" name="fruit-3" value={animal} checked={checado} onChange={e=> setChecado(e.target.checked) && setAnimal(e.target.value)}/>
  <label for="fruittt3">Todos</label>
</form>
         
         </div>
                    <div className='t2xx'>                  	
&#709; Gênero
                    </div>
     <div className='checkxx'>
     <form>
  <input type="checkbox" id="fruitt1" name="fruit-1" value={genero} checked={checado} onChange={e=> setChecado(e.target.checked) && setGenero(e.target.value)} />
  <label for="fruitt1">Masculino</label>
  <input type="checkbox" id="fruitt2" name="fruit-2" value={genero} checked={checado} onChange={e=> setChecado(e.target.checked) && setGenero(e.target.value)} />
  <label for="fruitt2">Feminino</label>
  <input type="checkbox" id="fruitt3" name="fruit-3" value={genero} checked={checado} onChange={e=> setChecado(e.target.checked) && setGenero(e.target.value)}  />
  <label for="fruitt3">Todos</label>
 
</form>
        </div>

    
      

     <div className='nxx'>
    <Link className='bxx' to='/verpets'>FILTRAR</Link>
    </div>

    <div className='nxx' >
        <Link className='bbxx' to='/'>Voltar ao menu</Link>
   </div> 

   <div className='nxx'>
    <Link className='bbbxx' to='/meuspets'>Editar &nbsp; +PETS</Link>
</div>   
    </div>
    

    <div className='principaljj'>
              <div className='loginjjj'>
                <div className='simbolojj'>
                <img className='lljj' src='./images/IMG-20220418-WA0079_1.svg' alt=''/>
                <Link to='/verpets'>
                  <img className='filtrarongcaa' src= '../images/Component 1.svg'/>
                </Link>
                </div>
               <div className='login1jj'>
                <Link className='aajj' to='/cadastrarpet'>+ &nbsp; PET</Link>
                <p className='nomejj'>Nauan dos Santos
                </p>
                <img className='nauanjj' src='./images/nauanigual.svg' alt=''/>
                </div>
             </div>
        
             <div className='editarjj'>
         
             </div>
            <div>
            
             </div>
        
            <div className='lucaojj'>
             {pets.map(item=>
                <PetsCards item={item} />
             )}
           </div>
          </div>

    </div>
    )
}