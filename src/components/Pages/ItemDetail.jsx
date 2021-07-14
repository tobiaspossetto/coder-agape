import React ,{useState} from 'react'
import CountDetail from './CountDetail'
const ItemDetail = () => {

    const [count, setCount] = useState(1);

    const addItems = () => {
        if(count <5){
            setCount(count+1)
        }
    }
    const quitItems = () =>{
        if(count >1){
            setCount(count-1)
        }
    }
    return (
        <div className="itemdetail">
            {/* Esta a para volver se convertira en un Link que me lleve a la pagina de inicio */}
            <a href="#!">Volver</a>
            <div className="detail-img">
            <img src='https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/lavar-la-ropa-oscura-colgar-sin-perder-color.jpg'></img>
            </div>
            <h4>Este es el nombre del producto</h4>
            <p>Esta es la descripcion del producto. Es preferible que no contenga mucho texto</p>
           <div className='d-flex align-items-center justify-content-between'>
                <CountDetail valor ={count} sumar ={addItems} restar ={quitItems}/>
                 <button className='btn btn-warning'>Agregar al carrito</button>
           </div>
            
        </div>
    )
}

export default ItemDetail
