export default function ComParametro(props){
    const status = props.nota >= 7 ? "Aprovado" : "Reprovado"
    return(
        <div>
            <h2>{props.titulo}</h2>
            <h3>{props.subtitulo}</h3>
            <h3>O Aluno {props.aluno} </h3>
            <h3>Tem nota {props.nota} </h3>
            <h3>E está {status}</h3>
            
        </div>
    )
}