import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <h1>Ame Mais</h1>
      <Link to= '/ladingpage'>Lading page</Link>
      <Link to= '/login'>Login</Link>
      <Link to= '/registar'>registar</Link>
      <Link to= '/cadastrarpet'>Cadastrar pet</Link>
      <Link to= '/verpets'>Ver pets</Link>
      <Link to= '/meuspets'>Meus pets</Link>
    </div>
  );
}

export default App;
