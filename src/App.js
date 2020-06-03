import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import AppStyle from './AppStyle';
import { Layout, Menu } from 'antd';

import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import CarDetails from './components/details';
import Search from './components/search';
import CostToOwn from './components/5-year-cost';
// import AppContent from '../src/components/app-content'

const { Header, Content, Footer } = Layout;

function App() {
  let location = useLocation();

  return (
    <Router>
      <AppStyle>
        <Layout className='layout home'>

          <Header className='header'>
            <h2 className='logo'>StreetSmarts</h2>
            <Menu className='menu' mode='horizontal'>
              <Menu.Item key='1'>
                <NavLink to="/">HOME</NavLink>
              </Menu.Item>
              <Menu.Item key='2'>
                <NavLink to="/">SEARCH</NavLink>
              </Menu.Item>
              <Menu.Item key='3'>
                <NavLink to="/about">WHAT IS CO<sub>2</sub></NavLink>
              </Menu.Item>
              <Menu.Item key='4'>
                <NavLink to="/contact">Contact</NavLink>
              </Menu.Item>
            </Menu>
          </Header>

          <Content className='content'>
            {/* <AppContent /> */}
            <AnimatePresence exitBeforeEnter location={location} key={location.pathname}> 
              <Switch>
                <Route exact path = '/' component = {Search} />
                <Route exact path='/details/:make/:model/:id' component={CarDetails} />
                <Route exact path='/details/:make/:model/:id/cost-to-own' component = {CostToOwn} />
              </Switch>
            </AnimatePresence>
          </Content>

          <Footer className='footer'>
            <p>Streetsmarts ©2020</p>
          </Footer>

        </Layout>
      </AppStyle>
    </Router>
  );
}

export default App;