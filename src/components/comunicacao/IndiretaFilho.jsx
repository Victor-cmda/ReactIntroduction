import React from "react";

export default props => {
    const callBack = props.quandoClicar
    const [idadeMin, idadeMax] = [40, 80]
    const gerarIdade = _ => parseInt(Math.random() * (idadeMax - idadeMin) + idadeMin)
    const gerarNerd = _ => Math.random() > 0.5
    return (
        <div>
            <div>
                Filho
            </div>

            <button onClick={_ => callBack('Hugo', gerarIdade(), gerarNerd())}>
                Fornecer Informações
            </button>
        </div>
    )
}