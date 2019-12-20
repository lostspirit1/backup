import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import footerStyle from '../assets/footerStyles';
import Button from '@material-ui/core/Button'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Link from '@material-ui/core/Link';
// import { Container } from './styles';
const useStyles = makeStyles(footerStyle)

const  Footer = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
        <AppBar position="static" className={classes.appBar} >
          <Container maxWidth="lg">
        <Toolbar >

        </Toolbar>
        </Container>
      </AppBar>
      </div>
    );
}
export default withRouter(Footer);