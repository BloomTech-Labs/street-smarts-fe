import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppStyle from './AppStyle';
import CarDetails from './components/details';
import Dropdown from './components/search';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

function App() {
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
            <Route exact path = '/' component = {Dropdown} />
            <Route exact path='/details/:make/:model/:id' component={CarDetails} />
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