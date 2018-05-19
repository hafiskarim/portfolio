import React, {Component} from 'react';
import './App.css';
import {
  Layout,
  Header,
  Navigation,
  Drawer,
  Content,
  Footer
} from 'react-mdl'
import Main from './components/main';
import {Link} from 'react-router-dom';
import 'typeface-roboto'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Header waterfall className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Home</Link>}scroll>
            <Navigation>
              <Link style={{color:'white', fontWeight:'bold'}} to="/resume">Resume</Link>
              <Link style={{color:'white', fontWeight:'bold'}} to="/project">Project</Link>
              <Link style={{color:'white', fontWeight:'bold'}} to="/contact">Contact</Link>
            </Navigation>
            
          </Header>
          <Drawer title="Hafizhul Karim" style={{backgroundColor: '#1D4350', color: 'white'}} >
            <Navigation> 
              <Link style={{color:'white', fontWeight:'bold'}} to="/">Home</Link>
              <Link style={{color:'white', fontWeight:'bold'}}  to="/resume">Resume</Link>
              <Link style={{color:'white', fontWeight:'bold'}}  to="/project">Project</Link>
              <Link style={{color:'white', fontWeight:'bold'}}  to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content"/>
            <Main/>
            <Footer className="footer-color" size="mega">
            <h6 style={{textAlign: "center", color:"white"}} >Copyright © 2018</h6>
            </Footer>
            
          </Content>

          </Layout>
        
        
      </div>
    );
  }
}
export default App;
