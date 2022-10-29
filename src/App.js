import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

import Home from './pages';

function About() {
    return <h2>About</h2>;
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/about' element={ <About /> } />
            </Routes>
        </Router>
    );
}

export default App;
