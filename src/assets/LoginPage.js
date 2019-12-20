
import {
    fade,
    ThemeProvider,
    withStyles,
    makeStyles,
    createMuiTheme,
  } from '@material-ui/core/styles';
const loginStyle = (muiBaseTheme => ({
    root:{
        backgroundSize: 'cover', 
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        justifyContent:'center', 
        overflow: 'hidden',
    },
    labelForgot:{
        color: 'rgba(20, 176, 12,1)',
        backgroundColor: "transparent",
        paddingLeft: 2,
        "&:hover": {
         color: 'rgb(57, 232, 48)',
         backgroundColor: "transparent",
          }
    },
    labelRegister:{
        justifyContent:'center', 
        alignItems: 'center',
    },
    gridMain:{
        margin: '0 auto',
        maxWidth: 300,
    },
    button:{
        backgroundColor: 'rgba(20, 176, 12,0.9)',
        color:'#fff',
        width: '100%',
        "&:hover": {
          backgroundColor: "rgb(57, 232, 48)",
           }
    },
    logo:{
        width: '100%',
        background: '#000',
        alignItems: 'center', 
    },
    register:{
       direction: 'row'
    },
    cssOutlinedInput: {
      "&:hover:not($disabled):not($cssFocused):not($error) $notchedOutline": {
        borderColor: "#ffaf0f", //hovered
        color:'#000',
      },
      "&$cssFocused $notchedOutline": {
        borderColor: "#ffaf0f", //focused
        color:'#000',
      }
    },
    label: {
      "&$focusedLabel": {
        color: "#ffaf0f"
      },
      "&$erroredLabel": {
        color: "orange"
      }
    },
    focusedLabel: {},
    erroredLabel: {},
    underline: {
      "&$error:after": {
        borderBottomColor: "orange"
      },
      "&:after": {
        borderBottom: `2px solid cyan`
      }
    },
    error: {},
    notchedOutline: {},
    cssFocused: {},
    error: {},
    disabled: {},
    containerRegister:{
      justifyContent:'center', 
      alignItems: 'center',
      padding:10
    },
    input2:{
      paddingBottom:30,
      marginTop:20
    }
}));
export default loginStyle;