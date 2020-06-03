import React from 'react';
import './App.css';
import {Content, Drawer, Header, Layout, Navigation} from 'react-mdl'
import Main from "./components/main"
import {Link} from 'react-router-dom';

function App() {
  return (
      <div className="demo-big-content">
          <Layout>
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
