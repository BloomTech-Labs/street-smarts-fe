import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import CarDetails from '../details';
import Home from '../home';
import CostToOwn from '../5-year-cost';
import CompareStart from '../compare-start';
import Compare from '../compare';

const AppContent = () => {
  let location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter location={location} key={location.pathname}> 
            <Switch>
                <Route exact path = '/' component = {Home} />
                <Route exact path='/details/:make/:model/:id' component={CarDetails} />
                <Route exact path='/details/:make/:model/:id/cost-to-own' component = {CostToOwn} />
                <Route exact path='/compare/:id' component={CompareStart} />
                <Route exact path='/compare/:id/to/:make/:model' component={Compare}/>
            </Switch>
      </AnimatePresence>
    )
};

export default AppContent;