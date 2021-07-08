import React, { useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import * as IoIcons from 'react-icons/io'
import Input from './Input'


require('./carrito.css')
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '95%',
      },
    },
  }));
  
const Formulario = () => {
    const classes = useStyles();
    
    const [nombre, setNombre] = useState({campo:'', valido: null});
    const [apellido, setApellido] = useState({campo:'', valido: null});
    const [correo, setCorreo] = useState({campo:'', valido: null});
    const [correo2, setCorreo2] = useState({campo:'', valido: null});
    const [telefono, setTelefono] = useState({campo:'', valido: null});
    const [direccion, setDireccion] = useState({campo:'', valido: null});

    const [formularioValido, setFormularioValido] = useState(null)

    const expresiones = {
      usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
      nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
      password: /^.{4,12}$/, // 4 a 12 digitos.
      correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      telefono: /^\d{7,14}$/, // 7 a 14 numeros.,
      direccion: /^[0-9a-zA-Z. ]+$/
    }

    const validarCorreo2 = () => {
      if(correo.campo.length >0){
        if(correo2.campo !== correo.campo){
          setCorreo2((prevState) =>{
            return{...prevState, valido: 'incorrecto'}
          })
        }else{
          setCorreo2((prevState) =>{
            return{...prevState, valido: 'correcto'}
          })
        }
      }
    }


    const onSubmit= (e) => {
        e.preventDefault()
        if(
          nombre.valido === 'correcto' &&
          apellido.valido === 'correcto' &&
          correo.valido === 'correcto' &&
          correo2.valido === 'correcto' &&
          telefono.valido === 'correcto' &&
          direccion.valido === 'correcto'
        ){
          setFormularioValido(true)
          setNombre({campo: '', valido: null})
          setApellido({campo: '', valido: null})
          setCorreo({campo: '', valido: null})
          setCorreo2({campo: '', valido: null})
          setTelefono({campo: '', valido: null})
          setDireccion({campo: '', valido: null})
        }else{
          setFormularioValido(false)
        }
    }

    return (
        <div className='container-form'>
             <div className='container-precio d-flex align-items-center justify-content-center'>
      
                    <IoIcons.IoIosPricetags className='mr-2' color='ffa333' size={25}/>
                    <span className='form-precio m-0'>Total: $5952</span>
                        
            </div>  

            <br/>
            <h5 className='form-titulo'>Finalice su compra</h5>

        <form className={classes.root} onSubmit={onSubmit}>
          
           <Input estado={nombre} setEstado = {setNombre} className='mr-auto ml-auto mb-5 w-75 '
                  placeholder='Nombre'
                  type='text'
                  name='nombre'
                  mensajeError = 'Se requiere al menos 4 letras'
                  expresionRegular =  {expresiones.nombre}
                  valido = {nombre.valido}
            />

            <Input estado={apellido} setEstado = {setApellido} className='mr-auto ml-auto mb-5 w-75 '
                  placeholder='Apellido'
                  type='text'
                  name='apellido'
                  mensajeError = 'Se requiere al menos 4 letras'
                  expresionRegular = {expresiones.nombre}
                  valido = {apellido.valido}
            />
             <Input estado={correo} setEstado = {setCorreo} className='mr-auto ml-auto mb-5 w-75 '
                  placeholder='Correo1'
                  type='email'
                  name='email'
                  mensajeError = 'Ingrese un correo valido'
                  expresionRegular = {expresiones.correo}
                  valido = {correo.valido}
            />

             <Input estado={correo2} setEstado = {setCorreo2} className='mr-auto ml-auto mb-5 w-75 '
                  placeholder='Correo2'
                  type='email'
                  name='email2'
                  mensajeError = 'El correo no coincide'
                 // expresionRegular = {expresiones.correo}
                  funcion={validarCorreo2}
                  valido = {correo2.valido}
            />
            <Input estado={telefono} setEstado = {setTelefono} className='mr-auto ml-auto mb-5 w-75 '
                  placeholder='Correo2'
                  type='text'
                  name='telefono'
                  mensajeError = 'Este campo es requerido'
                  expresionRegular = {expresiones.telefono}
                  valido = {telefono.valido}
            />
            <Input estado={direccion} setEstado = {setDireccion} className='mr-auto ml-auto mb-5 w-75 '
                  placeholder='Direccion'
                  type='text'
                  name='direccion'
                  mensajeError = 'Este campo es requerido'
                  expresionRegular = {expresiones.direccion}
                  valido = {direccion.valido}
            />
          

          {formularioValido == false ? <h1>Complete el formulario</h1> : ''}

          <button type="submit" className="btn btn-danger">Enviar</button>
    </form>
        </div>
    )
}

export default Formulario
