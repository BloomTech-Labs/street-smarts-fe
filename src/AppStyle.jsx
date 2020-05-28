import React from 'react';
import styled from 'styled-components';

const AppStyle = styled.div`
  .layout {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center
    margin: auto;
    background-color: rgb(0,0,0);
    color: white;
    border: none;

    .header {
      width: 100%;
      display: flex;
      position: sticky;
      top: 0px;
      z-index: 1;
      justify-content: flex-end;
      background-color: rgb(0,0,0);
      color: white;
  
      .menu {
        background-color: rgb(0,0,0);
        color: white;
        border: none;
      }
    }

    .content {
      width: 70%;
      display: flex;
      justify-content: space-evenly;
      background-color: rgb(0,0,0);
      color: white;
      border: none;
      margin: auto;
    }
    
    .footer {
      width: 100%;
      display: flex;
      justify-content: center;
      position: sticky;
      bottom: 0px;
      z-index: 1;
      textAlign: center;
      color: white;
      background-color: rgb(0,0,0);
    }
  }
  h1, h2, h3, p, a {
    color: #FFFFFF;
    font-family: 'Montserrat', sans-serif;
  }
  
  h1 {
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 1.875rem;
  }
  h2 {
    font-weight: bold;
    font-size: 1.25rem;
    line-height: 1.3rem;
  }
  h3 {
    font-weight: bold;
    font-size: 1rem;
    line-height: 1.15rem;
  }
`;

export default AppStyle;