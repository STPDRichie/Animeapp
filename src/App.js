import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from 'react-router-dom';

import HomePage from './pages';

function AboutPage() {
    return <h2>About</h2>;
}

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={ <HomePage /> } />
                <Route path='/about' element={ <AboutPage /> } />
            </Routes>
        </Router>
    );
}

export default App;
