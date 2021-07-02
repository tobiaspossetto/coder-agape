import React from 'react'
import {linksData} from './linksData.js'

import * as AiIcons from 'react-icons/ai'



import {Link} from 'react-router-dom'

require('./menu.css')
const SideBar = (props) => {
    return (
     
              <nav className={props.sidebar ?'nav-menu active' : 'nav-menu'}>
                <ul className = 'nav-menu-items' onClick={props.showSidebar} >
                    <li className = 'navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose color='white'  size={30}>

                            </AiIcons.AiOutlineClose>
                        </Link>
                    </li>

                    {linksData.map((item,index) =>{
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                                
                            </li>
                        )
                    })}
                </ul>
            </nav>
            
    )
}

export default SideBar
