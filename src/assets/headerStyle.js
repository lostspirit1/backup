import { relative } from "path";
import { fade, makeStyles } from '@material-ui/core/styles';
import { flexbox } from "@material-ui/system";
const headerStyle = (muiBaseTheme => ({
  root:{
    justifyContent:'space-between',
    padding: 0,
    margin: 0,
    display: 'flex',
    width: '100%',
    background: "#fff",
    }, 
    appBar:{
      height: 150,
      justifyContent:'center',
      background: "#fff",
      boxShadow:
      "0 2px 2px 0 rgba(0, 0, 0, 0.0), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.0)",
    },
    divone:{
      display: 'flex',
    },
    search: {
      marginTop: 10,
      borderRadius: muiBaseTheme.shape.borderRadius,
      height: '100%',
      backgroundColor: fade(muiBaseTheme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(muiBaseTheme.palette.common.white, 0.25),
      },
      width: '100%',
      [muiBaseTheme.breakpoints.up('sm')]: {
        marginLeft: muiBaseTheme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      background: '#14e37c',
      display: 'flex',
      padding: '10px',
      alignItems:'center',
      width: muiBaseTheme.spacing(7),
      pointerEvents: 'none',
    },
    inputRoot: {
      color: '#000',
    },
    inputInput: {
      padding: muiBaseTheme.spacing(1, 1, 1, 7),
      transition: muiBaseTheme.transitions.create('width'),
      width: '100%',
      [muiBaseTheme.breakpoints.up('md')]: {
        width: 200,
      },
    },
}))

  
  export default headerStyle;

