import React, {useEffect,useContext, useState} from 'react'
import Bienvenido from './Bienvenido'
import Productos from '../Productos'

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import ProductsContext from '../../../context/Products/ProductsContext'


require('../../pagesGlobal.css')
require('../pages.css')




const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: '90%',
      margin: 'auto'
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const Home = () => {

    const classes = useStyles();

    const {products,getProducts} = useContext(ProductsContext)

    const [filtro, setFiltro] = useState([]);

    const filtrando = () => {
      let filtrado = products.filter(i => i.id == 2)
      setFiltro(filtrado)
    }
    useEffect(() => {
      
     getProducts()
      
      
    },[])

    useEffect(() => {
      filtrando()
      
    }, [getProducts])
    


    return (
        <div className="container-pages home">
            <Bienvenido/>
            <h1 className=" productosh1 text-center mt-5 mb-5">Nuestros productos:</h1>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    { 
                      filtro.map(prod => (

                        <Grid key={prod.id} item xs={12} sm={6} md={4}>
                        <Productos name={prod.first_name} img={prod.avatar} categoria='ropa'/>
                        </Grid>
                     
                      ))
                      
                      
                    }
                      
                     
                    
                  

                   
                    
                    
                </Grid>
            </div>
           
            
        </div>
    )
}

export default Home
