import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import useToken from './hooks/useToken';

import store from './reducers/store';
import history from './history';

import ModalProvider from './components/General/Modal/ModalProvider';

import HomePage from './pages/homePage';
import TrendingPage from './pages/animePages/trending';
import LoginPage from './pages/auth/login';
import LoginCallbackPage from './pages/auth/loginCallback';
import SignupPage from './pages/auth/signup';
import ProfilePage from './pages/auth/profile';

function App() {
    const { token } = useToken();

    const isToken = token && token !== '' && token !== undefined;

    return (
        <Provider store={store}>
            <ModalProvider>
                <BrowserRouter history={history}>
                    <Routes>
                        <Route exact path="/" element={<HomePage />} />
                        <Route
                            exact
                            path="/trending"
                            element={<TrendingPage />}
                        />
                        <Route
                            exact
                            path="/login"
                            element={
                                isToken ? (
                                    <Navigate to="/profile" />
                                ) : (
                                    <LoginPage />
                                )
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
                                isToken ? (
                                    <ProfilePage />
                                ) : (
                                    <Navigate to="/login" />
                                )
                            }
                        />
                    </Routes>
                </BrowserRouter>
            </ModalProvider>
        </Provider>
    );
}

export default App;
