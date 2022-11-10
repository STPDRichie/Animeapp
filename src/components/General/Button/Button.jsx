import React, { createRef } from 'react';
import PropTypes from 'prop-types';

import { makeModifiers } from '../../../utils/functions';
import { childrenProps } from '../../../utils/constants';

function Button(props) {
    const { children, modifiers, disabled, onClick } = props;

    const buttonRef = createRef();

    return (
        <div
            onClick={(e) => {
                if (!disabled) {
                    onClick(e);
                }
            }}
            ref={buttonRef}
            className={`button ${
                disabled ? 'button--disabled' : ''
            } ${makeModifiers('button', modifiers)}`}
        >
            <div className="button__inner">{children}</div>
        </div>
    );
}

Button.propTypes = {
    children: childrenProps,
    modifiers: PropTypes.arrayOf(PropTypes.string),
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};

export default Button;
