import React from 'react'
import ItemDetailContainer from './details/ItemDetailContainer'
import ItemList from './ItemList'
require('../styles.css')
const ItemListContainer = () => {
    return (
        <div className="itemlistcontainer">
            <ItemList/>
            <ItemDetailContainer/>
        </div>
    )
}

export default ItemListContainer
