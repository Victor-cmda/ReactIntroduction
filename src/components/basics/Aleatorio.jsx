import React from "react";

export default (props) =>{
    const {min,max} = props
    const random = parseInt(Math.random() * (min, max) + min)
    return (
        <React.Fragment>
            <h2>Numero entre {min} à {max}</h2>
            <h1>O escolhido foi {random}</h1>
        </React.Fragment>
    )
}