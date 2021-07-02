import React from 'react'
import {Link} from 'react-router-dom'
import * as FiIcons from 'react-icons/fi'
require('./menu.css')
const Header = (props) => {
    return (
        <div>
            <div className="navbar">
                <Link to='#' className='menu-bars'>
                  
                    <FiIcons.FiAlignLeft  size={35} color='white' onClick={props.showSidebar}/>
                </Link>
                <div className="navbar-logo">
                    <img alt='logo' src='https://i.imgur.com/C3zXSSv.png'></img>
                </div>
            </div>
        </div>
    )
}

export default Header
