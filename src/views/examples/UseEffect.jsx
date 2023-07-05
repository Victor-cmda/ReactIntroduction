import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

function calcFatorial(num) {
    if (num === "") return 0
    const n = parseInt(num)
    if (n < 0) return -1;
    if (n === 0) return 1
    return calcFatorial(n - 1) * n
}

function verifyParOrImpar(num) {
    if (num === "") return 
    const n = parseInt(num)
    if (n & 1) {
        return "Impar"
    }
    else {
        return "Par"
    }
}

const UseEffect = (props) => {

    const [numb, setNumb] = useState(0)
    const [ParOrImpar, setParOrImpar] = useState("Par")

    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)

    useEffect(() => {
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(() => {
        if (fatorial == Infinity) {
            document.title = "Calma ai também né meu chapa"
        }
        else {
            document.title = "React App"
        }
    }, [fatorial])

    useEffect(() => {
        setParOrImpar(verifyParOrImpar(numb))
    }, [numb])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial === -1 ? "Não existe" : fatorial}</span>
                </div>
                <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)} />
            </div>
            
            <SectionTitle title="Exercício #02" />
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{ParOrImpar}</span>
                </div>
                <input type="number" className="input" value={numb} onChange={e => setNumb(e.target.value)} />
            </div>

        </div>
    )
}

export default UseEffect
