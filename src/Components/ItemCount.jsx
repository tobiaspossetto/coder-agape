import React, { useState } from 'react'

const ItemCount = (props) => {

    const [valor, setValor] = useState(props.initial);
    

    
    // [
//     {
//         "id": 1,
//         "name": "Remera Blanca",
//         "precio": 1450,
//         "descripcion": "Remera blanca para hombre",
//         "categoria": "hombre",
//         "stock": 4
//     },
//     {
//         "id": 2,
//         "name": "Remera azul",
//         "precio": 1450,
//         "descripcion": "Remera azul para hombre",
//         "categoria": "hombre",
//         "stock": 4
//     },
//     {
//         "id": 3,
//         "name": "Remera rosa",
//         "precio": 1450,
//         "descripcion": "Remera rosa para mujer",
//         "categoria": "mujer",
//         "stock": 4
//     },
//     {
//         "id": 4,
//         "name": "Remera lila",
//         "precio": 1450,
//         "descripcion": "Remera lila para mujer",
//         "categoria": "mujer",
//         "stock": 4
//     },
//     {
//         "id": 5,
//         "name": "Remera negra",
//         "precio": 1450,
//         "descripcion": "Remera negra para hombre",
//         "categoria": "hombre",
//         "stock": 4
//     },
//     {
//         "id": 6,
//         "name": "Remera verde",
//         "precio": 1450,
//         "descripcion": "Remera verde para hombre",
//         "categoria": "hombre",
//         "stock": 4
//     }
// ]


    const resta = () => {
        if(valor>1){
            setValor(valor-1)
        }
    }

    const suma = () => {
        if(valor+1<= props.stock ){
            setValor(valor+1)
        }
    }
    return (
        <div>
            <h1>Cantidad: {valor}</h1>

            <button onClick={resta}>-</button>
            <button onClick={suma}>+</button>
        </div>
    )
}

export default ItemCount
