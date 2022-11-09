import React from 'react';
import PropTypes from 'prop-types';

import { childrenProps } from '../../../utils/constants';
import { makeClasses } from '../../../utils/functions';

function BlockContainer(props) {
    const { children, classes } = props;

    return (
        <div className={`block-container ${makeClasses(classes)}`}>
            {children}
        </div>
    );
}

BlockContainer.propTypes = {
    children: childrenProps,
    classes: PropTypes.arrayOf(PropTypes.string),
};

export default BlockContainer;
