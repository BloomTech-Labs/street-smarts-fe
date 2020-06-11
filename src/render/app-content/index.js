import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import CarDetails from '../../components/details';
import Home from '../../components/home';
import Cost from '../../components/cost';
import Compare from '../../components/compare';

const AppContent = () => {
  let location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter location={location} key={location.pathname}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/details/:id' component={CarDetails} />
        <Route exact path='/details/:id/cost-to-own' component={Cost} />
        <Route exact path='/compare' component={Compare} />
        <Route exact path='/compare/:id' component={Compare} />
        <Route exact path='/compare/:id/to/:carID' component={Compare} />
        <Route exact path='/compare/:id/to/:carID/to/:carID2' component={Compare} />
      </Switch>
    </AnimatePresence>
  )
};

export default AppContent;