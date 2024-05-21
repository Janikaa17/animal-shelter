import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import LoginSignup from './pages/LoginSignup';
import Shelters from './pages/Shelters';
import './components/App.css';

const App=()=> {
    return (
        <Router>
            <Header />
            <Routes>
            <Route exact path="/" components={Home} />
            <Route path="/login" components={LoginSignup} />
            <Route path="/shelters" components={Shelters} />
            </Routes>
        </Router>
    );
};

export default App;