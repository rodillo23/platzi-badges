import React from 'react';
import BadgeNew from '../pages/BadgeNew'
import Badges from '../pages/Badges'
import NotFound from '../pages/NotFound'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import Layout from './Layout';
import HomePage from '../pages/HomePage';

function App(){
  return(
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/badges" component={Badges}/>
          <Route exact path="/badges/new" component={BadgeNew}/>
          <Route path="/404" component={NotFound}/>
          <Redirect from="*" to="/404"/>
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App