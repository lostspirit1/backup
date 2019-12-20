import React from "react";
import api from '../../../services/api';
import { useState , useMemo} from "react";
import { useDispatch } from "react-redux";
import { withRouter } from 'react-router-dom';
// nodejs library that concatenates classes
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import productAdd from '../../../assets/dashboard/addProduct';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem'
import Input, {  InputAdornment } from "@material-ui/core";
import TextField from '@material-ui/core/TextField'
import camera from '../../../assets/components/images/camera.svg'
import './style.css'
const useStyles = makeStyles(productAdd)
const AddProduct = (props) => {
    const classes = useStyles();
    const [subCategory, setSubCategory] = useState('');
    const [exterior, setExterior] = useState('');
    const [type, setType] = useState('');
    const [name, setName] = useState('');
    const [float, setFloat] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [productImg, setProductImg] = useState(null);

    const productPreview = useMemo(() => {
        return productImg ? URL.createObjectURL(productImg):null
    },[productImg])

    const { history } = props;

    async function handleSubmit(e){
        try {
            e.preventDefault();
            const data = new FormData();
            data.append('subcategory_id', subCategory)
            data.append('exterior_id', exterior)
            data.append('type_id', type)
            data.append('name', name)
            data.append('float', float)
            data.append('price', price )
            data.append('img_product', productImg)
            data.append('description', description)
            await api.post('/products/add', data)
            history.push('/dashboard/addProduct');
        } catch (error) {
            console.error(error) 
        }
    }
    return (
        <div className={classes.root}>
        <Grid container spacing={10} className={classes.gridMain} justify="center">

        <Grid item lg={12} md={12} sm={12} xs={12} align="center">

        </Grid>
        <form onSubmit={handleSubmit} align="center">
        <label 
        id="product" 
        style={{backgroundImage: `url(${productPreview})`}}
        className={productImg ? 'productImg' : ''}
        >
            <input type="file"  onChange={e => setProductImg(e.target.files[0])} />
            <img src={camera} alt="Img"/>
        </label>
        <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
        <Select
          labelId="Categoria"
          id="subCategory"
          value={subCategory} 
          onChange={(e) => setSubCategory(e.target.value)}
          >    
          <MenuItem value={1}>Knife</MenuItem>
        </Select>
        <InputLabel id="demo-simple-select-label">Exterior</InputLabel>
        <Select
          labelId="Exterior"
          id="Exterior"
          value={exterior}
          onChange={(e) => setExterior(e.target.value)}
          >
          <MenuItem value={1}>Factory New</MenuItem>
          <MenuItem value={2}>Minimal Wear</MenuItem>
          <MenuItem value={3}>Field-Tested</MenuItem>
          <MenuItem value={4}>Well-Worn</MenuItem>
          <MenuItem value={5}>Battle-Scarred</MenuItem>
        </Select>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          labelId="Categoria"
          id="subCategory"
          value={type} 
          onChange={(e) => setType(e.target.value)}
          >
          <MenuItem value={2}>StatTrek</MenuItem>
          <MenuItem value={1}>Normal</MenuItem>
 
        </Select>
        <Grid item lg={12} md={12} sm={12} xs={12} align="center">
        <TextField
              className={classes.input2}
              id="demo2"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              InputLabelProps={{
                classes: {
                    root: classes.label,
                    focused: classes.focusedLabel,
                    error: classes.erroredLabel
                },

              }}
            />
                    <TextField
              className={classes.input2}
              id="demo2"
              label="Float"
              value={float}
              onChange={(e) => setFloat(e.target.value)}
              InputLabelProps={{
                classes: {
                  root: classes.label,
                  focused: classes.focusedLabel,
                  error: classes.erroredLabel
                }
              }}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },

              }}
            />
                    <TextField
              className={classes.input2}
              id="demo2"
              label="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              InputLabelProps={{
                classes: {
                  root: classes.label,
                  focused: classes.focusedLabel,
                  error: classes.erroredLabel
                }
              }}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },

              }}
            />
            <TextField
              className={classes.input2}
              id="demo2"
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              InputLabelProps={{
                classes: {
                  root: classes.label,
                  focused: classes.focusedLabel,
                  error: classes.erroredLabel
                }
              }}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },

              }}
            />
            </Grid>
            <Button type="submit" className={classes.button} variant="raised" disableFocusRipple="false" disableRipple="false" centerRipple="false">
              Cadastrar
        </Button>
        </form>
        </Grid>
        </div>
    );
}
export default withRouter(AddProduct);