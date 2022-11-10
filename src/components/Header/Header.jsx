import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import PropTypes from 'prop-types';

import BlockContainer from '../General/BlockContainer/BlockContainer';

import { makeClasses } from '../../utils/functions';
import useToken from '../../hooks/useToken';

function Header(props) {
    const { classes } = props;

    const { token } = useToken();
    const dispatch = useDispatch();

    return (
        <header className={`header ${makeClasses(classes)}`}>
            <BlockContainer classes={['header-block']}>
                <div
                    className="header__title"
                    onClick={() => dispatch(push('/'))}
                >
                    Animeapp
                </div>
                <div className="header__nav header-nav">
                    {!token && (
                        <div className="header-nav__links">
                            <div
                                className="header-nav__link"
                                onClick={() => dispatch(push('/login'))}
                            >
                                Log in
                            </div>
                            <div
                                className="header-nav__link"
                                onClick={() => dispatch(push('/signup'))}
                            >
                                Sign up
                            </div>
                        </div>
                    )}
                    {token && (
                        <div className="header-nav__links">
                            <div
                                className="header-nav__link"
                                onClick={() => dispatch(push('/profile'))}
                            >
                                Profile
                            </div>
                        </div>
                    )}
                </div>
            </BlockContainer>
        </header>
    );
}

Header.propTypes = {
    classes: PropTypes.arrayOf(PropTypes.string),
};

export default Header;
