import React from 'react'
// va a servir por si hay un mensaje de error pueda manipularlo
const Message = ({msg, bgColor}) => {
    let styles ={
        padding: "1rem",
        marginBottom:"1rem",
        textAlign:"center",
        color:"#fff",
        fontWeight:"bold",
        backgroundColor:bgColor,
    }
    return (
        <div style={styles}>
            <h2>Esta Cargando</h2>
            <p>{msg}</p>

        </div>
    )
}

export default Message
