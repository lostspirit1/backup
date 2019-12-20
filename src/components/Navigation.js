import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import headerStyle from '../assets/navStyle';
import Button from '@material-ui/core/Button'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Link from '@material-ui/core/Link';
// import { Container } from './styles';
const useStyles = makeStyles(headerStyle)

const  Navigation = (props) => {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.appBar} >
          <Container maxWidth="lg">
        <Toolbar >
<Button className={classes.button} onClick={() => props.history.push('/')} variant="raised" disableFocusRipple="false"  disableRipple="false"  centerRipple="false"  color="secondary">
   Home
</Button>
<Button className={classes.button} onClick={() => props.history.push('/xd')} variant="raised"  disableFocusRipple="false"  disableRipple="false"  centerRipple="false" color="secondary">
  Login
</Button>
<Button className={classes.button} variant="raised" disableFocusRipple="false"  disableRipple="false"  centerRipple="false" color="secondary">
  Infos
</Button>
<Button className={classes.button} variant="raised" disableFocusRipple="false"  disableRipple="false"  centerRipple="false" color="secondary">
  Products
</Button>
        </Toolbar>
        </Container>
      </AppBar>
    );
}
export default withRouter(Navigation);