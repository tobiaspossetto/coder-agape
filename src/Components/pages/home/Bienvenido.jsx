import React from 'react'

import * as BsIcons from 'react-icons/bs'
require('../../pagesGlobal.css')
require('../pages.css')
const bienvenido = () => {
    return (
        
            <div className="titulo-container">
                <div className="container-secundario">

                    <div className="titulo-icons">

                        <BsIcons.BsCircleFill className='icon' color='white' size={25}/>
                        <BsIcons.BsCircleFill className='icon'color='#ffa333' size={25}/>
                        <BsIcons.BsCircleFill className='icon' color='rgb(224, 58, 58)' size={25}/>
                    </div>
                    <h5 className='titulo-h5'>A G Á P E</h5>
                    <hr className='divisor'></hr>
                </div>
                <div className="bienvenidoContainer">

                    <h3 className='bienvenidoH3'>Bienvenido</h3>
                </div>
            </div>
        
    )
}

export default bienvenido