import React from 'react'
import ItemDetail from './ItemDetail'
import ItemList from './ItemList'
require('../styles.css')
const ItemListContainer = () => {
    return (
        <div className="itemlistcontainer">
            <ItemList/>
            <ItemDetail/>
        </div>
    )
}

export default ItemListContainer
