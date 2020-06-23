import React from "react";
import { NavLink } from 'react-router-dom';
import { Layout, Menu } from "antd";

const { Header } = Layout;

const Navigation = () => {
  const nav = document.querySelector('.menu');

  const handleClick = () => {
    nav.classList.toggle('nav-active');
  }



  return (
    <Header className="header">
      <NavLink to="/">
        <h2 className="logo">StreetSmarts</h2>
      </NavLink>
      <ul className="menu">
        <li>
          <NavLink className="navlink" to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="/compare">COMPARE</NavLink>
        </li>
        <li>
          <NavLink className="navlink" to="/articles/about">
            ABOUT
          </NavLink>
        </li>
        <li key="4">
          <NavLink className="navlink" to="/articles/co2">
            WHAT IS CO<sub>2</sub>?
          </NavLink>
        </li>
        <li key="5">
          <NavLink className="navlink" to="/contact">Contact</NavLink>
        </li>
      </ul>
    {}

      <div className = 'burger' onClick = {handleClick}>
        <div className = 'line1'></div>
        <div className = 'line2'></div>
        <div className = 'line3'></div>
      </div>
    </Header>
  );
};

export default Navigation;