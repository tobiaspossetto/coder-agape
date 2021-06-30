import React from 'react'

require('./navbar.css')
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container-img" >
                <img src="https://i.imgur.com/Rx0LB4F.png"></img>
            </div>

            <div className="links">

                <a href="#"  className="links-a"> Inicio</a>
                <a href="#" className="links-a"> Ropa</a>
                <a href="#" className="links-a"> Accesorios</a>
                <a href="#" className="links-a"> Carrito</a>
            </div>
        </div>
    )
}

export default Navbar

