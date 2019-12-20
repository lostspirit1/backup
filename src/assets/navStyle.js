import { relative } from "path";
import { fade, makeStyles } from '@material-ui/core/styles';
import { flexbox } from "@material-ui/system";
const headerStyle = (muiBaseTheme => ({
  root:{
    justifyContent:'space-between',
    display: 'flex',
    width: '100%',
    background: "#1ed624",
    }, 
    appBar:{
      height: 50,
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

  
  export default headerStyle;

