import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppStyle from './AppStyle';
import { Layout, Menu } from 'antd';

import AppContent from '../src/components/app-content'

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <AppStyle>
        <Layout className='layout home'>

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
            <AppContent />
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