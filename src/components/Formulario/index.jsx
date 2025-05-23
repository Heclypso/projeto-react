import { useState, useEffect } from "react"

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0)
    const [materiaB, setMateriaB] = useState(0)
    const [materiaC, setMateriaC] = useState(0)

    const [nome, setNome] = useState('')

    useEffect(() => {
        console.log("O componente foi montado")

        return (() => {
            console.log("O componente foi desmontado")
        })
    }, []) 

    useEffect(() => {
        console.log("O estado nome mudou")
    }, [nome]) 

    useEffect(() => {
        console.log("Matéria A mudou para: " + materiaA)
    }, [materiaA])

    const alteraNome = (evento) => {
        
        setNome(estadoAnterior => {
            // console.log(estadoAnterior)
            return evento.target.value
        })
    }

    const renderizaMedia = () => {
        const soma = materiaA + materiaB + materiaC
        const media = soma / 3

        if (media >= 7 ) {
            return (
                <p>Olá {nome}, você foi aprovado</p>
            )
        } else {
            return (       
                <p>Olá {nome}, você foi reprovado</p>
            )
        }
    }

    return (
        <form>
            <input type="text" placeholder="Seu nome" onChange={alteraNome}/>
            <input type="number" placeholder="Nota matéria A" onChange={({target}) => setMateriaA(parseInt(target.value))}/>
            <input type="number" placeholder="Nota matéria B" onChange={({target}) => setMateriaB(parseInt(target.value))}/>
            <input type="number" placeholder="Nota matéria C" onChange={({target}) => setMateriaC(parseInt(target.value))}/>
            {renderizaMedia()}
        </form>
    )
}

export default Formulario

