import React from "react";

import { NavLink } from 'react-router-dom';

import { Layout, Menu } from "antd";

const { Header } = Layout;

const Navigation = () => {
  return (
    <Header className="header">
      <h2 className="logo">StreetSmarts</h2>
      <Menu className="menu" mode="horizontal">
        <Menu.Item key="1">
          <NavLink to="/">HOME</NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to="/">SEARCH</NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <NavLink to="/about">
            WHAT IS CO<sub>2</sub>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="4">
          <NavLink to="/contact">Contact</NavLink>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navigation;
