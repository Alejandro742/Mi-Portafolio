import React, { Fragment } from 'react';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Hero from './components/Hero';
import Servicios from './components/aboutme/Servicios';
import Proyectos from './components/portfolio/Proyectos';
import Footer from './components/Footer';


function App() {

    
  return (
    <Fragment>
      <Router>
        <Hero />
        <Switch>
          <Route exact path ="/aboutme" component={Servicios}/>
          {/* <Route exact path ="/portfolio" component={Proyectos}/> */}
        </Switch>
      </Router>
 

    <Footer/>
    </Fragment>
  );
}
export default App;