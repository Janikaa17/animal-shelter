import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-route-dom';
import Header from './components/Header';
import Home from './pages/Home';
import LoginSignup from './pages/LoginSignup';
import Shelters from './pages/Shelters';
import './App.css';

const App=()=> {
    return (
        <Router>
            <Header />
            <Switch>
            <Route exact path="/" components={Home} />
            <Route path="/login" components={LoginSignup} />
            <Route path="/shelters" components={Shelters} />
            </Switch>
        </Router>
    );
};

export default App;