import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import CarDetails from "./components/details";
import Dropdown from "./components/search";
import { Layout, Menu } from "antd";
import styled from "styled-components";

const AppStyle = styled.div`
  .header {
    display: flex;
    position: "fixed";
    z-index: 1;
    width: "100%";
    justify-content: flex-end;
  }
`;

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <AppStyle>
        <Layout>
          <Header className="header">
            <div className="logo" />
            <Menu className="menu" mode="horizontal">
              <Menu.Item key="1">Home</Menu.Item>
              <Menu.Item key="2">Search</Menu.Item>
              <Menu.Item key="3">What is CO2</Menu.Item>
              <Menu.Item key="3">Contact</Menu.Item>
            </Menu>
          </Header>

          <Content className="site-layout" style={{ padding: "0 50px", marginTop: 64 }}>
            <div className="AppMain" style={{ padding: 24, minHeight: 380 }}>
              <Route exact path="/" component={Dropdown} />
              <Route
                exact
                path="/details/:make/:model/:id"
                component={CarDetails}
              />
            </div>
          </Content>

          <Footer style={{ textAlign: "center" }}>Streetsmarts ©2020</Footer>
        </Layout>
      </AppStyle>
    </Router>
  );
}

export default App;

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Dropdown />
//         <Route exact path="/:make/:model" component={Results} />
//         <Route exact path="/:make/:model/:year" component={Results} />
//         <Route exact path="/details/:make/:model/:id" component={CarDetails} />
//       </div>
//     </Router>
//   );
// }
