import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import useToken from './hooks/useToken';

import store from './reducers/store';
import history from './history';

import HomePage from './pages/homePage';
import LoginPage from './pages/auth/login';
import LoginCallbackPage from './pages/auth/loginCallback';
import SignupPage from './pages/auth/signup';
import ProfilePage from './pages/auth/profile';

function TrendingPage() {
    return <h2>Trending</h2>;
}

function App() {
    const { token } = useToken();

    const isToken = token && token !== '' && token !== undefined;

    return (
        <Provider store={store}>
            <BrowserRouter history={history}>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/trending" element={<TrendingPage />} />
                    <Route
                        exact
                        path="/login"
                        element={
                            isToken ? <Navigate to="/profile" /> : <LoginPage />
                        }
                    />
                    <Route
                        exact
                        path="/login-callback/*"
                        element={<LoginCallbackPage />}
                    />
                    <Route
                        exact
                        path="/signup"
                        element={
                            isToken ? (
                                <Navigate to="/profile" />
                            ) : (
                                <SignupPage />
                            )
                        }
                    />
                    <Route
                        exact
                        path="/profile"
                        element={
                            isToken ? <ProfilePage /> : <Navigate to="/login" />
                        }
                    />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
