import React, {useState} from 'react'
import Header from './Header'
import SideBar from './SideBar'

require('./menu.css')

const Menu = () => {

    //state para abrir o cerrar el menu
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => {
        setSidebar(!sidebar)
    }
    return (
        <>

      
            {/* llamo al header y al sidebar con sus respectivos props */}
            <Header showSidebar={showSidebar}/>
            
            <SideBar sidebar={sidebar} showSidebar={showSidebar}/>
        
        </>
    )
}

export default Menu
