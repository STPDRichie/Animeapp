import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import store from './reducers/store';
import history from './history';

import HomePage from './pages/homePage';

function TrendingPage() {
    return <h2>Trending</h2>;
}

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter history={history}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/trending" element={<TrendingPage />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
