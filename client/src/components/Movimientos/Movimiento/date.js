import React from 'react'

const date = (props) => {
    
    const date = props.date.toString();

    const dateF = date.split('T')
    const anio = dateF[0]

    const anioOk = anio.split('-')
    return (
        <div>
            Fecha: {anioOk[2]}/{anioOk[1]}/{anioOk[0]}
        </div>
    )
}
export default date