import React ,{useState} from 'react'
import CountDetail from './CountDetail'

import {Link} from 'react-router-dom';
const ItemDetail = ({product}) => {
    
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
           <Link to='/productos'>Volver</Link>
            <div className="detail-img">
            <img alt='img-detail' src={product.img}></img>
            </div>
            <h4>{product.name}</h4>
            <p>{product.description}</p>
           <div className='d-flex align-items-center justify-content-between'>
                <CountDetail valor ={count} sumar ={addItems} restar ={quitItems}/>
                 <button className='btn btn-warning'>Agregar al carrito</button>
           </div>
            
        </div>
    )
}

export default ItemDetail
