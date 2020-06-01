import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl'
import Main from "./components/main"
import {Link} from 'react-router-dom';

function App() {
  return (
      <div className="demo-big-content">
          <Layout style={{background: 'url(https://lh3.googleusercontent.com/pw/ACtC-3faM2z12Q-Es3xTwYeUjDyw9nXJxf3x0SOv9YyOImLoxMXt9mIJeI7_DTICPSxPxGNokh0zKp5BUl1RXswvJK3ct2EtHOOFJ1j1TL8S9AjVY1nsSuY0mjsoy7AbK10Auw5RLLcvUIu6dYewTDL-hbq84w=w1191-h794-no?authuser=0) center / cover'}}>
              <Header className="header-color" title="Dale Reyes" scroll>
                  <Navigation>
                      <Link to="/resume">Resume</Link>
                      <Link to="/aboutme">About Me</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/contact">Contact</Link>
                  </Navigation>
              </Header>
              <Drawer title="Dale Reyes">
                  <Navigation>
                      <Link to="/resume">Resume</Link>
                      <Link to="/aboutme">About Me</Link>
                      <Link to="/projects">Projects</Link>
                      <Link to="/contact">Contact</Link>

                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <Main/>

              </Content>
          </Layout>
      </div>
  );
}

export default App;
