import React from 'react';
import styled from 'styled-components';

const AppStyle = styled.div`
h1, h2, h3, p, a {
  color: #FFFFFF;
  font-family: 'Montserrat', sans-serif;
  margin: 0;
}
h1 {
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 2.5rem;
  text-transform: uppercase;
}
h2 {
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 2rem;
  text-transform: uppercase;
}
h3 {
  font-weight: bold;
  font-size: 1rem;
  line-height: 2rem;
  text-transform: uppercase;
}
p {
  font-size: 1rem;
  line-height: 1.5rem;
}
a {
  text-decoration: none!important;
}

  .layout {
    width: 100%;
    height: 100%;
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
      background-color: rgba(0,0,0,0);
      color: white;
  
      .menu {
        background-color: rgba(0,0,0,0);
        color: white;
        border: none;
      }
    }

    .content {
      width: 70%;
      display: flex;
      justify-content: space-evenly;
      background-color: rgba(0,0,0,0);
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
      background-color: rgba(0,0,0,0);
      p {
        font-size: .8rem
      }
    }
  }  
`;

export default AppStyle;