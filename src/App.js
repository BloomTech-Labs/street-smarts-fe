import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AppStyle from './AppStyle';
import AppContent from './render/app-content'
import Navigation from './components/sections/header';
import { Layout } from "antd";

const { Content, Footer } = Layout;

function App() {
  const [ URL, setURL ] = useState('')

  let location = useLocation();

  useEffect(() => {
    let path = location.pathname
    if(path !== '/') {
      return setURL('layout')
    } else {
      return setURL('layout home')
    }
  }, [location]);


  return (
      <AppStyle className = 'main-container'>
        <Layout className= { URL }>

          <Navigation className='header' />

          <Content className='content'>
            <AppContent />
          </Content>

          <Footer className='footer'>
            <p>Streetsmarts ©2020</p>
          </Footer>

        </Layout>
      </AppStyle>
  );
};

export default App;