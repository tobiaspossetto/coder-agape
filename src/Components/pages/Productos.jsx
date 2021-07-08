import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: '90%',
    margin: 'auto'
  },
});


const Productos = (props) => {
    const classes = useStyles();
    return (
        <div>
             <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image="https://us.123rf.com/450wm/peshkov/peshkov1706/peshkov170600729/81099736-percha-de-madera-con-camiseta-blanca-vac%C3%ADa-colgando-sobre-fondo-de-hormig%C3%B3n-oscuro-concepto-de-venta-bosq.jpg?ver=6"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Remera Blanca
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Linda remera blanca para dormir o hacer lo que quieras.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className='d-flex justify-content-between pr-5'>
                        <Button size="large" color="secondary">
                        Ver Más
                        </Button>
                        <Typography variant="subtitle1" color="secondary" component="p">
                            {props.categoria}
                            {/* Aca va la categoria */}
                        </Typography>
                    </CardActions>
            </Card>
        </div>
    )
}

export default Productos
