import { useEffect, useState } from "react";

import styles from './ReposList.module.css'

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([])
    const [estaCarregando, setEstaCarregando] = useState(true)
    const [deuErro, setDeuErro] = useState(false)

    useEffect(()=>{
        setEstaCarregando(true)
        setDeuErro(false)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => {
            if (res.status === 404) {
                throw new Error("Usuario não encontrado");
            }
            return res.json()
        })
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false)
                setRepos(resJson)
            }, 3000);
        }) 
        .catch(e =>{
            setEstaCarregando(true)
            setDeuErro(true)
        }) 
    }, [nomeUsuario])

    return (
        <div className="container">
            {deuErro ? (
                <h2>Usuário não encontrado, verifique o nome do usuário e tente novamente</h2>
            ) : !deuErro && estaCarregando ?  (
                <h2>Carregando lista...</h2>
            ) : (
                <ul className={styles.list}>
                    {repos.map(({id, name, language, html_url}) => (
                        <li className={styles.listItem} key={id}>
                            <div className={styles.itemName}>
                                <b>Nome: </b> 
                                {name}
                            </div>

                            <div className={styles.itemLanguage}>
                                <b>Linguagem: </b>
                                {language}
                            </div>
                            <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no Github</a>
                        </li> 
                    ))}
                </ul>
            )}
        </div>
    )
}

export default ReposList;