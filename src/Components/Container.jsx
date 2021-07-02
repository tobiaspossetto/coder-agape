import React, { Component } from 'react'
import ItemListContainer from './ItemListContainer'
export default class Container extends Component {
    constructor(props) {
        super(props)
        this.greeting = 'hola bienvenido'
    }
    
    render() {

        console.log(this.greeting)
        return (
            <div>
                <ItemListContainer greeting={this.greeting}/>
            </div>
        )
    }
}
