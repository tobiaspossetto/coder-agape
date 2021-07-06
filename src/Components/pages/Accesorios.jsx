import React from 'react'

import Productos from './Productos'

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

require('../pagesGlobal.css')
require('./pages.css')


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

const Accesorios = () => {

    const classes = useStyles();

    return (
        <div className="container-pages Accesorios">
           
            <h1 className=" accesoriosh1 text-center ">Nuestra selección de Accesorios:</h1>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                      <Productos categoria='accesorios'/>
                    </Grid>
                    <Grid item xs={12}  sm={6} md={4}>
                        <Productos categoria='accesorios'/>
                    </Grid>
                    <Grid item xs={12}  sm={6} md={4}>
                     <Productos categoria='accesorios'/>
                    </Grid>
                    <Grid item xs={12}  sm={6} md={4}>
                     <Productos categoria='accesorios'/>
                    </Grid>
                    <Grid item xs={12}  sm={6} md={4}>
                     <Productos categoria='accesorios'/>
                    </Grid>
                    <Grid item xs={12}  sm={6} md={4}>
                     <Productos categoria='accesorios'/>
                    </Grid>
                    
                </Grid>
            </div>
           
            
        </div>
    )
}

export default Accesorios
