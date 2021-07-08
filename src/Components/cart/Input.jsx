import React from 'react'

const Input = (props) => {

    const onChange = (e) => {
       props.setEstado({...props.estado, campo: e.target.value})
    }

    const validaciones = () => {
        if(props.expresionRegular){
           
            if(props.expresionRegular.test(props.estado.campo)){
                props.setEstado({...props.estado, valido: 'correcto'})
            }else{
                console.log('input incorrecto')
                props.setEstado({...props.estado, valido: 'incorrecto'})
            }
        }

        if(props.funcion){
            props.funcion()
        }
        
    }

    return (
        <div className="d-block mr-auto ml-auto  w-75 ">
             <input className={'w-100 ' + props.valido}
                    type={props.type}
                     placeholder={props.placeholder}
                     id={props.id} 
                     name={props.name}
                     value={props.estado.campo}
                     onChange={onChange}
                     onKeyUp={validaciones}
                     onBlur={validaciones}
                     
                     >
                         
            </input>
            
            <span className={'leyenda-defecto '+ 'leyenda-'+props.valido}>{props.mensajeError}</span>
        </div>
    )
}

export default Input
