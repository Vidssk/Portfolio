import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import Footer from './Components/Footer.js';
import HomePage from './pages/HomePage.js'
import ProjectsPage from './pages/ProjectsPage.js';
import AboutPage from './pages/AboutPage.js';
import ContactPage from './pages/ContactPage';


class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      title: 'Santiago Hernandez',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/'},
        {title: 'Contact', path: '/'},
        {title: 'Projects', path: '/'}
      ],
      home: {
        title: 'Be Relentless',
        subTitle: 'Projects that make a difference',
        text: 'Checkout my projects below',
      },
      about: {
        title: 'About Me',
      },
      contact: {
        title: 'Contact Me',
      },
      projects: {
        title: 'Let\'s talk',
      }
    }
      
  }
  render(){
    return(
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar id="Navbar" className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Santiago Hernandez</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"></Navbar.Toggle>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/projects">Projects</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/" render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>}/>
          
          <Route path="/about" exact render={() => <AboutPage title={this.state.about.title}/>}/>
          <Route path="/projects" exact render={() => <ProjectsPage title={this.state.projects.title}/>}/>
          <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title}/>}/>
              
          <Footer/>
        </Container>
      </Router>
    );
  }
}

export default App;
