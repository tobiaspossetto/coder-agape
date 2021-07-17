import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail'


require('../../styles.css')

const ItemDetailContainer = () => {
  
    const { id } = useParams();
    const [prod, setProd] = useState([])

    const getById = async () => {
        const data = await axios.get(`http://localhost:4000/product/${id}`)
         setProd([])
         setProd(...data.data)
       
        
       
    }

    useEffect(() => {
        // if(render.current == true){
        //     getById()
          
        //     render.current = false
           
            
        // }
       getById()
    },[id]);


    return (
        <div className='pages'>
            <ItemDetail product={prod}/>
        </div>
    )
}

export default ItemDetailContainer
