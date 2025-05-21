import './perfil.css'

const Perfil = () => {
    const usuario = {
        nome: 'Gabriel',
        avatar: 'https://github.com/heclypso.png'
    }

    return ( 
        <div>
            <img className='perfil-avatar' src={usuario.avatar} />  
            <h3 className='perfil-title'>{usuario.nome}</h3>
        </div> 
    )
}

export default Perfil

