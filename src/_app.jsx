import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import useToken from './hooks/useToken';

import store from './reducers/store';
import history from './history';

import HomePage from './pages/homePage';
import LoginPage from './pages/login';

function TrendingPage() {
    return <h2>Trending</h2>;
}

function ProfilePage() {
    return <h2>Profile</h2>;
}

function App() {
    const { token } = useToken();

    return (
        <Provider store={store}>
            <BrowserRouter history={history}>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/trending" element={<TrendingPage />} />
                    {!token && token !== '' && token !== undefined ? (
                        <React.Fragment>
                            <Route
                                exact
                                path="/profile"
                                element={<LoginPage />}
                            />
                            <Route
                                exact
                                path="/login"
                                element={<LoginPage />}
                            />
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <Route
                                exact
                                path="/profile"
                                element={<ProfilePage />}
                            />
                            <Route
                                exact
                                path="/login"
                                element={<ProfilePage />}
                            />
                        </React.Fragment>
                    )}
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
