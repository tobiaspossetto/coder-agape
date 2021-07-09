import React from 'react'
import LinksContainer from './LinkContainer'
import CardWidget from './CardWidget'
require('../styles.css')
const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar-img" >
                <img className="logo" src="https://i.imgur.com/C3zXSSv.png" alt="logo"></img>
            </div>
            <div className="navbar-links">
                <LinksContainer/>
                <CardWidget/>
            </div>
        </div>
    )
}

export default NavBar
