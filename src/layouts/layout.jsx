import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header/Header';
import ModalPortal from '../components/General/Modal/ModalPortal';

import { childrenProps } from '../utils/constants';
import { makeClasses } from '../utils/functions';

function Layout(props) {
    const {
        title = 'Animeapp',
        mainContentClasses,
        layoutClass,
        children,
    } = props;

    useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <div className={`layout ${layoutClass}`}>
            <Header />
            <main className={`main-content ${makeClasses(mainContentClasses)}`}>
                <div className="layout__inner">{children}</div>
            </main>
            {/* <Footer /> */}
            <ModalPortal />
        </div>
    );
}

Layout.propTypes = {
    title: PropTypes.string,
    mainContentClasses: PropTypes.arrayOf(PropTypes.string),
    layoutClass: PropTypes.string,
    children: childrenProps,
};

export default Layout;
