import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppStyle from './AppStyle';
import AppContent from './render/app-content'
import Navigation from './components/sections/header';
import { Layout } from "antd";

const { Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <AppStyle>
        <Layout className='layout home'>

          <Navigation className='header' />

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
};

export default App;