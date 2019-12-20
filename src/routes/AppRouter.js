import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import LandingPage from '../components/LandingPage/index';
import NotFoundPage from '../components/NotFoundPage';
import Container from '@material-ui/core/Container';
import PublicRoute from './PublicRouter';
import PrivateRoute from './PrivateRouter';
import Header from '../components/Header';
import Navigation from '../components/Navigation'
import About from '../components/About/index';
import AuthPage from '../components/SignRegister/index';
import AddProduct from '../components/DashBoard/AddProduct/index'
import Footer from '../components/Footer';
const AppRouter = () => (
  <BrowserRouter>
<div class="page-wrap">
   <Route path={['/']} exact component={Header} /> 
    <Route path={['/']} exact component={Navigation} /> 
    <Route path="/dashboard/addProduct" exact component={AddProduct} /> 
    <Container maxWidth="lg" >
      <Switch>
        <Route path="/" component={LandingPage} exact={true} /> 
        <Route path="/xd" component={AuthPage} exact={true} /> 
        <Route component={NotFoundPage} />
      </Switch>
      </Container>
</div>  
<footer class="site-footer">
<Footer/>
</footer>
  </BrowserRouter>
);

export default AppRouter;