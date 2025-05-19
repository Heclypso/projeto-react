function App() {
  const nome = "Gabriel"

  function retornaNome() {
    return nome
  }

  const pessoa = {
    nome: "Maria"
  }

  let estaDeDia = false;

  return(
    <>
      <h1>Olá, {pessoa.nome}</h1>
      <h2>Subtitulo</h2>
      {estaDeDia? 'Bom dia' : "Boa tarde"}
    </>
  )
}

export default App
