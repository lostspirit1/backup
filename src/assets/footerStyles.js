import { relative } from "path";
import { fade, makeStyles } from '@material-ui/core/styles';
import { flexbox } from "@material-ui/system";
const footer = (muiBaseTheme => ({
  root:{
    background: "#1ed624",
    }, 
    footer:{
      position:'',
      left: 0,
      bottom: 0,
      right: 0,
    },
    appBar:{
      height: 150,
      display: 'flex',
      justifyContent:'center',
      background: "#1ed624",
      boxShadow:
      "0 0px 0px 0 rgba(0, 0, 0, 0.0), 0 0px 0px 0px rgba(0, 0, 0, 0.2), 0 0px 0px 0 rgba(0, 0, 0, 0.0)",
    },
    button: {
      textDecoration: 'none',  
      height: "50px",
      borderRadius: 0,
      fontSize: 12,
      color: '#fff',
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: "#fff",      color: '#1ed624'
      }
    },
}))

  
  export default footer;

