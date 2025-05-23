import { useState } from 'react';

import Perfil from './components/Perfil';
import ReposList from './components/ReposList';

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('')

  return(
    <>
      <input type='text' placeholder='Insira um nome de usuário' onBlur={(e) => setNomeUsuario(e.target.value)}></input>
      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeDoUsuario={nomeUsuario}/>
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}
    </>
  )
}

export default App
