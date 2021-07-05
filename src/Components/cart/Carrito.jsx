import React from 'react'
import Item from './Item'
import Formulario from './Formulario'
import * as FaIcons from 'react-icons/fa'
require('../pagesGlobal.css')
require('./carrito.css')
const Carrito = () => {
    return (
        <div className='container-pages'>
            <div className='container-titulo d-flex align-items-center justify-content-center'>
      
              <span className='titulo mb-0'>Carrito de compras</span>
              <FaIcons.FaShoppingBag  size={30}/>
                                
            </div>
            <div className='container-items'>

                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </div>
            
            <Formulario/>
        </div>
    )
}

export default Carrito
