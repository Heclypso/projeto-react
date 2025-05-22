import './perfil.css'

const Perfil = ({enderecoDaImagem, nomeDoUsuario}) => {

    return ( 
        <div>
            <img className='perfil-avatar' src={enderecoDaImagem} />  
            <h3 className='perfil-title'>{nomeDoUsuario}</h3>
        </div> 
    )
}

export default Perfil

