import React, {useState, useEffect} from 'react'

const ItemListContainer = (props) => {
    
    console.log(props)
    return (
        <div>
            <h1>Mi app</h1>
            <h1>{props.greeting}</h1>
        </div>
    )
}

export default ItemListContainer
