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
                        image={props.img}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                           {props.name}
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
