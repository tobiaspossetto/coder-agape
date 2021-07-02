import React from 'react'
import CardWidget from './CardWidget'
require('./navbar.css')
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container-img" >
                <img src="https://i.pinimg.com/originals/fb/ee/ae/fbeeae2a6640b513daea297241ef13fb.jpg"></img>
            </div>

            <div className="links">

                <a href="#"  className="links-a"> Inicio</a>
                <a href="#" className="links-a"> Ropa</a>
                <a href="#" className="links-a"> Accesorios</a>
                <CardWidget/>
            </div>
        </div>
    )
}

export default Navbar

