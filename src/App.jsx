import { useState } from 'react';

import Perfil from './components/Perfil';
import Formulario from './components/Formulario'

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)

  return(
    <>
      <Perfil nomeDoUsuario="gabriel" enderecoDaImagem="https://github.com/heclypso.png" />
      {formularioEstaVisivel && (
        <Formulario />
      )}
      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type='button'>Toggle form</button>
    </>
  )
}

export default App
