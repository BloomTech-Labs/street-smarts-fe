import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import CarDetails from '../../components/details';
import Home from '../../components/home';
import Cost from '../../components/cost';
import Compare from '../../components/compare';
import ReactGA from "react-ga";

const AppContent = () => {
  let location = useLocation();

  useEffect(() => {
    ReactGA.initialize('UA-169437425-1');
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

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
