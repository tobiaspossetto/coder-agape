import React from 'react'
import Bienvenido from './Bienvenido'
import Productos from './Productos'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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

    return (
        <div className="container-pages home">
            <Bienvenido/>
            <h1 className=" productosh1 text-center mt-5 mb-5">Nuestros productos:</h1>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                      <Productos/>
                    </Grid>
                    <Grid item xs={12}  sm={6} md={4}>
                        <Productos/>
                    </Grid>
                    <Grid item xs={12}  sm={6} md={4}>
                     <Productos/>
                    </Grid>
                    <Grid item xs={12}  sm={6} md={4}>
                     <Productos/>
                    </Grid>
                    <Grid item xs={12}  sm={6} md={4}>
                     <Productos/>
                    </Grid>
                    <Grid item xs={12}  sm={6} md={4}>
                     <Productos/>
                    </Grid>
                    
                </Grid>
            </div>
           
            
        </div>
    )
}

export default Home
