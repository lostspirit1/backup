import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import loginPage from '../../assets/LoginPage';
import Grid from '@material-ui/core/Grid';
import Input, { InputLabel, InputAdornment } from "@material-ui/core";
import TextField from '@material-ui/core/TextField'
import PersonSharpIcon from '@material-ui/icons/PersonSharp';
import LockSharpIcon from '@material-ui/icons/LockSharp';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from 'react-router-dom';
import auth from '../../store/actions/Authentication/AuthAction';
// import { Container } from './styles';
const useStyles = makeStyles(loginPage)

const SignIn = (props) => {
  const { history } = props;
  const { push } = history;

  const classes = useStyles();
  const dispatch = useDispatch();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(auth(login, password,push))
  }
  return (
    <div className={classes.root}>

      <Grid container spacing={2} className={classes.gridMain}>

        <Grid item lg={12} md={12} sm={12} xs={12} align="center">

        </Grid>

        <Grid item lg={12} md={12} sm={12} xs={12} className={classes.TextField}>
          <form onSubmit={handleSubmit}>
            <TextField
              className={classes.input2}
              id="demo2"
              label="Usuário"
              variant="outlined"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
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
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonSharpIcon style={{ fontSize: 25, color: 'rgba(20, 176, 12,0.9)' }} />
                  </InputAdornment>
                )
              }}
            />
            <TextField
              className={classes.txtFd}
              id="demo2"
              label="Senha"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
                startAdornment: (
                  <InputAdornment position="start">
                    <LockSharpIcon style={{ fontSize: 25, color: 'rgba(20, 176, 12,0.9)' }} />
                  </InputAdornment>
                )
              }}
            />
            <ButtonBase variant="raised" disableFocusRipple="false" disableRipple="false" centerRipple="false">
              <Typography noWrap className={classes.labelForgot} variant="subtitle2">
                Esqueci minha senha
          </Typography>
            </ButtonBase>
            <Button type="submit" className={classes.button} variant="raised" disableFocusRipple="false" disableRipple="false" centerRipple="false">
              Entrar
        </Button>
          </form>
        </Grid>


        <Grid container spacing={24} className={classes.containerRegister} align="center">
          <Typography noWrap className={classes.typoText} variant="subtitle2">
            Não tem uma conta?
          </Typography>
          <ButtonBase className={classes.labelForgot} disableFocusRipple="false" disableRipple="false" centerRipple="false">
            <Typography noWrap className={classes.labelForgot} variant="subtitle2">
              Registre-se
          </Typography>
          </ButtonBase>
        </Grid>
      </Grid>

    </div>
  );
}

export default withRouter(SignIn);