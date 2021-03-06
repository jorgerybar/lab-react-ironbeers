import React from 'react'
import {Route, Switch} from 'react-router-dom'
import NewBeer from './components/NewBeer';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import BeerDetail from './components/BeerDetail';


const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Beers} />
            <Route exact path="/new" component={NewBeer} />
            <Route exact path="/beers" component={Beers} />
            <Route exact path="/random" component={RandomBeer} />
            <Route exact path="/beers/:id" component={BeerDetail} />
        </Switch>
    )
}

export default Routes