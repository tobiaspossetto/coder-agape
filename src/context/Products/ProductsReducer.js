import {GET_PRODUCTS} from '../types'


//state trae como esta el estado 
//action trae la informacion de lo que quiero hacer, es un objeto
//type = nombre de la accion 
//payload = la data que me pasan 
export default (state, action) =>{
    const {payload, type} = action

    switch(type){
        case GET_PRODUCTS:
            return{
                ...state,
                products: payload

            }
    }
}