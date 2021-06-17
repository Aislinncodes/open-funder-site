import React from 'react';
import './App.css';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import About from './About';
import Features from './Features';
import Contact from './Contact';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="App">
            <Navbar />
            <Switch>
                <Route path="/" exact component={Hero}/>
                <Route path="/about" component={About}/>
                <Route path="/features" component={Features}/>
                <Route path="/contact" component={Contact}/>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
