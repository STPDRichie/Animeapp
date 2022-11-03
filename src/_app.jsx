import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import store from './reducers/store';

import HomePage from './pages';

function AboutPage() {
    return <h2>About</h2>;
}

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
