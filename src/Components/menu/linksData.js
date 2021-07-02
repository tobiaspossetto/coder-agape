import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'

import * as GiIcons from 'react-icons/gi'

export const linksData = [
    {
        title: 'Inicio',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Carrito',
        path: '/carrito',
        icon: <FaIcons.FaShoppingCart/>,
        cName: 'nav-text'
    },
    {
        title: 'Ropa',
        path: '/ropa',
        icon: <GiIcons.GiClothes/>,
        cName: 'nav-text'
    },
    {
        title: 'Accesorios',
        path: '/accesorios',
        icon: <GiIcons.GiDiamondRing/>,
        cName: 'nav-text'
    },
    
]