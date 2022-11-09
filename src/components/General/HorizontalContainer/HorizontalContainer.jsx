import React from 'react';
import PropTypes from 'prop-types';

import { childrenProps } from '../../../utils/constants';
import { makeClasses } from '../../../utils/functions';

function HorizontalContainer(props) {
    const { children, classes } = props;

    return (
        <div className={`horizontal-container ${makeClasses(classes)}`}>
            {children}
        </div>
    );
}

HorizontalContainer.propTypes = {
    children: childrenProps,
    classes: PropTypes.arrayOf(PropTypes.string),
};

export default HorizontalContainer;
