import React from "react";
// nodejs library that concatenates classes
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { Card, CardContent, CardActions, Typography, CardMedia, Button, CardHeader, IconButton, Badge, Divider, Avatar} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import styles from "../../assets/cardStyle";
import styles2 from '../../assets/newCard';

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback } from "react";
import getAllProducts from '../../store/actions/fetch/fetchProducts'
import util from '../../util';

const useStyles = makeStyles(styles);
const useStyles2 = makeStyles(styles2);

const ProductContainer = () => {
    const classes = useStyles();
    const classes2 = useStyles2();
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAllProducts());
    }, []);

    const products = useSelector(state => state.data.filteredProducts);



    return (
        <Grid container spacing={2}  style= {{paddingBottom:100}}justify="center">
        {products.map(product => (
        <Grid item lg={2} md={3} sm={12} xs={12} key={product.id}>      
      <Card className={classes2.card}>
          <CardMedia
            className={classes2.media}
            image={
              `http://localhost:8000/uploads/${product.img}`
            }
          />
          <CardContent className={classes2.content}>
            <Typography
              className={classes2.name}
              variant={"h6"}
              gutterBottom
            >
              {product.name}
            </Typography>
            <Typography
              className={classes2.price}
              variant={"h1"}
            >
             {util.formatCurrency(product.price)}
            </Typography>
          </CardContent>
        </Card>
            </Grid> 
        ))}
        </Grid>
    );
}
export default ProductContainer;