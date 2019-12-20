import React,{Component} from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/config/index';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {theme} from './theme/theme';
import AppRouter from './routes/AppRouter';

const store = configureStore();

class App extends Component {

  render(){
    return (
      <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <AppRouter />
      </MuiThemeProvider>
      </Provider>
    )
  }
}

export default App;
