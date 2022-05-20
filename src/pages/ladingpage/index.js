import './index.scss';
import{ Link } from 'react-router-dom';
import '../../common/common.scss';

export default function index() {

    return(
        <main className="faixaS">
        <header className="faixa-cimaS">
            <img className="logoS" src= '../images/IMG-20220418-WA0079_3.svg'/>
            <Link to='/Login'className="palavraS">LOGIN</Link>
        </header>
        <section className="faixina1S">
            <div className="cassioS">
                <h1 className="txt1S">Quer adotar um Pet?</h1>
                <p className="txt2S">Bom então veio ao lugar  certo,
                    temos diversos Pets que necessitam 
                    de uma moradia em nosso site,
                    todos esperando por você.</p>
                <h3 className="txt3S">Não os deixe esperando!!!</h3>
                <img src='./images/unsplash_aPvB8KMIh5w.svg' />
            </div>
            <div className="cassio2S">
                <h1 className="txt4S">Pronto para escolher o seu novo amigo?</h1>
                <div className="cassio3S">
                    <Link to='/Registrar'className="AI bot2S">REGISTRAR-SE</Link>
                    <Link to='/meuspets' className="AI bot2S">VER PETS</Link>
                </div>
            </div>
        </section>
        <section className="faixina2S">
            <img className='imgcat' src='/images/gato-abandonado_1.svg'/>
            <div className="cassio1S">
                <p className="txt5S">Quer adicionar um animal para adoção?</p>
                <p className="txt6S">Você pode adicioná-lo ao nossa rede, 
                    colocando suas informações básicas<br/> 
                    para que o encontrem de forma rápida!
                     </p>
                <Link to='/Cadastrarpet'className="bot4S">Cadastrar PET </Link>
            </div>
        </section>
  
        
      
        <section className="faixae">
            
             <div>
                 <h1 className="tituloe">Por quê decidimos</h1>
                 <h1 className="titulo2e"> criar? </h1>
    
            </div>
            <div>
                <p className="pe">   Decidimos criar esse projeto pois percebemos o quão precario e não muito lembrado é o sistema de adoção, alem da alta demanda de animais desabrigados na rua, abrigos não dão conta de abrigar todos. 
                    Achamos que todos mercem uma segunda chance inclusive nossos bichinhos.</p>
            </div>
            <div>
                <img className="img2e" src='./images/ifalou.svg'/>
            </div>
        </section>


        <div className='tamanhoo'>
        
        <div className="principaljc">
             <div  className='tecto'>
            <div className="titulojc">
                TEM CURIOSIDADE EM SABER <br/> SOBRE O QUE ESTÃO <br/>COMENTANDO SOBRE NÓS?
            </div>
            <div className="titulo2jc">
                Tutor que ja adotou e deseja <br/>compartilhar sua experiência, aqui <br/> esta um espaço próprio para você!
            </div>
          </div>
        </div>
        
        <div className="cardjc">
            <div className="juntarjc">
            <div className="c2jc">
                <div>
                    <img className="img1jc" src='./images/273410313_4693674064082409_4992127923868059192_n_1.svg' />
                </div>
              
                <div>
                    <p className="nomejc">Eliza Ferreira Xavier</p>
                    <p className="tutorajc">Tutora de Cookie</p>
                </div>
                </div>
    
                <div className="cejc">
                    <p className="prjc">“ A adoção foi  tranquila, Cookie é tranquilo, um cachorrinho muito tranquilo, não me arrependi de ter o adotado.”
                    </p>
                    <div>
                        <div className="starjc">
                        <img src='./images/Star_1.svg' />
                        <img src='/images/Star_1.svg' />
                        <img src='/images/Star_1.svg' />
                        <img src='/images/Star_1.svg' />
                        <img src='/images/Star_1.svg' />
                        </div>
                    </div>
                </div>
                </div>
    
                <div className="juntarjc">
                <div className="c2jc">
                    <div>
                        <img className="img1jc" src='/images/calopsitas-criancas_1.svg' />
                    </div>
                  
                    <div>
                        <p className="nomejc">Juliana Fatima F. Mota</p>
                        <p className="tutorajc">Tutora de Chicota</p>
                    </div>
                    </div>
        
                    <div className="cejc">
                        <p className="prjc">“ Amei conhecer a chicotinha, muito amorosa e carinhosa, adotei ela para fazer companhia ao tody e adorei.”
                        </p>
                        <div>
                            <div className="starjc">
                            <img src='./images/Star_1.svg'/>
                            <img src='./images/Star_1.svg' />
                            <img src='./images/Star_1.svg' />
                            <img src='./images/Star_1.svg' />
                            <img src='./images/Star_1.svg' />
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    <div/> 
    </div>   
    

        <div className="faixan">
            <div className="house">
                <div>
                    <img className="img2" src=' images/IMG-20220419-WA0074_1.svg'/>
                </div>
                 <div>
                    <img className="imagens" src= './images/Subtract.svg'/>
                    <img className="imagens" src= './images/Twitter.svg'/>
                    <img className="imagens" src= './images/Facebook (1).svg'/>
                    <img className="imagens" src= './images/Whatsapp.svg'/>
                 </div>
            </div>
        
        
        <div className="content">
            <div className="home">
                <div className="bt"><Link to='/Ladingpage' className="button" >Home</Link> </div>
                <div className="bt"><Link to='/Meuspets' className="button" >Adote um pet</Link> </div>
                <div className="bt"><Link to='/Verpets' className="button" >Acessar pets cadastrados</Link></div>
                </div>
        
           <div className="pretend"><button className="holdon">Entre em contato conosco</button></div>
        
             <div className="meet">
            <div className="bt"><Link to='/Cadastrarpet' className="button">Cadastre seu pet</Link></div>
                <div className="bt"><Link to='/Login' className="button">Faça seu login</Link></div>
                <div className="bt"><Link to='/Ladingpage' className="button">Conheça nosso projeto</Link></div>
             </div>
        </div>
    </div>
    
    </main>
    )
}