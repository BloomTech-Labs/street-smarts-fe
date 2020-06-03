import React from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import AppStyle from './AppStyle';
import CarDetails from './components/details';
import Dropdown from './components/search';
import { Layout, Menu } from 'antd';
import CostToOwn from './components/5-year-cost';

const { Header, Content, Footer } = Layout;


export const pageTransition = {
  in: {
    opacity: 1,
    y:0
  },
  out: {
    opacity: 0,
    y: "-100vh"
  }
}

function App() {
  let location = useLocation();
  
  return (
    <Router>
      <AppStyle>
        <Layout className='layout'>

          <Header className='header'>
            <h2 className='logo'>StreetSmarts</h2>
            <Menu className='menu' mode='horizontal'>
              <Menu.Item key='1'>
                <a href='https://www.streetsmarts.online/'>
                HOME
                </a></Menu.Item>
              <Menu.Item key='2'>SEARCH</Menu.Item>
              <Menu.Item key='3'>WHAT IS CO<sub>2</sub></Menu.Item>
              <Menu.Item key='4'>CONTACT</Menu.Item>
            </Menu>
          </Header>

          <Content className='content'>            
            <AnimatePresence exitBeforeEnter location={location} key={location.pathname}> 
              <Switch>
                <Route exact path = '/' component = {Dropdown} />
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