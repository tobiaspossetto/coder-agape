import React , {useState} from 'react'

const ItemCount = (props) => {

    const [valor, setValor] = useState(props.initial);

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
