import React from 'react';
import PropTypes from 'prop-types';

import BlockContainer from '../General/BlockContainer/BlockContainer';

import { makeClasses, locate } from '../../utils/functions';
import useToken from '../../hooks/useToken';

function Header(props) {
    const { classes } = props;

    const { token } = useToken();

    return (
        <header className={`header ${makeClasses(classes)}`}>
            <BlockContainer classes={['header-block']}>
                <div className="header__title" onClick={() => locate('/')}>
                    Animeapp
                </div>
                <div className="header__nav header-nav">
                    {!token && (
                        <div className="header-nav__links">
                            <div
                                className="header-nav__link"
                                onClick={() => locate('/login')}
                            >
                                Log in
                            </div>
                            <div
                                className="header-nav__link"
                                onClick={() => locate('/signup')}
                            >
                                Sign up
                            </div>
                        </div>
                    )}
                    {token && (
                        <div className="header-nav__links">
                            <div
                                className="header-nav__link"
                                onClick={() => locate('/profile')}
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
