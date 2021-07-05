import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import * as IoIcons from 'react-icons/io'
import TextField from '@material-ui/core/TextField';
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

    return (
        <div className='container-form'>
             <div className='container-precio d-flex align-items-center justify-content-center'>
      
                    <IoIcons.IoIosPricetags className='mr-2' color='ffa333' size={25}/>
                    <span className='form-precio m-0'>Total: $5952</span>
                        
            </div>  
            
            <br/>
            <h5 className='form-titulo'>Finalice su compra</h5>
        <form className={classes.root}   noValidate autoComplete="off">
      
      <TextField 
       className='input'
        label="Nombre"
        name="nombre"
        variant="outlined"
        color="secondary"
      />
      <TextField 
       
       label="Apellido"
       name="apellido"
       variant="outlined"
       color="secondary"
     />
     <TextField 
       
       label="Telefono"
       name="telefono"
       variant="outlined"
       color="secondary"
     />
      <TextField 
       
       label="email"
       name="email"
       variant="outlined"
       color="secondary"
     />
     <TextField 
       
       label="Repetir email"
       name="email"
       variant="outlined"
       color="secondary"
     />
     <TextField 
       
       label="Dirección"
       name="direccion"
       variant="outlined"
       color="secondary"
     />

     <button type="submit" className="btn btn-danger">Enviar</button>
    </form>
        </div>
    )
}

export default Formulario
{/* <form method="post">
                <p>Ingrese su nombre</p>
                <input type="text" placeholder="Nombre" name="nombre"/ >
                <p>Ingrese su apellido</p>
                <input type="text" placeholder="Apellido" name="apellido"/ >
                <p>Ingrese un correo</p>
                <input type="email" placeholder="Correo" name="email"/ >
                <p>Repita su correo</p>
                <input type="email" placeholder="Correo" name="email"/ >
                <p>Ingrese su dirección</p>
                <input type="text" placeholder="Dirección" name="direccion"/ >
                <p>Ingrese su celular</p>
                <input type='text' placeholder="Número de celular" name="celular"/ >
            </form> */}