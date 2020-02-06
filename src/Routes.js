import React from 'react';
import { Switch, Route, Router } from 'react-router-dom'
import Auth from './pages/Auth'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import ProductsContainer from './containers/ProductsContainer'
import Cart from './pages/Cart';


const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/products' component={ProductsContainer} />
            <Route path='/cart' component={Cart} />
            <Route path='/auth' component={Auth} />

        </Switch>
    );
};

export default Routes;
