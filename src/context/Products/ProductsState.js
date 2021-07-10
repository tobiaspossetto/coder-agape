import React, {useReducer} from 'react'
import ProductsReducer from './ProductsReducer'
import ProductsContext from './ProductsContext'
import axios from 'axios'

const ProductsState = (props) => {
   
    //Estado Inicial
    //_______________________
    const initialState = {
        products: []
    }



    const [state, dispatch] = useReducer(ProductsReducer, initialState)
   
   
    const getProducts = async () =>{
        const res = await axios.get('https://reqres.in/api/users')
        dispatch({
            type: 'GET_PRODUCTS',
            payload: res.data.data

        })
    }
   
   
   
   
   
   
    return (
        <ProductsContext.Provider value={{
           products: state.products,
           getProducts
          
        }}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export default ProductsState
