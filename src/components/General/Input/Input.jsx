import React, { createRef } from 'react';
import PropTypes from 'prop-types';

import { makeClasses } from '../../../utils/functions';

function Input(props) {
    const {
        id,
        name,
        type = 'text',
        label,
        value,
        classes = [],
        onChange = () => {},
        isHidden,
        onKeyDown = () => {},
        inputAttrs = {},
        onBlur = () => {},
        onClick = () => {},
        autoComplete = 'off',
        floatPlaceholder,
        additionalRightText,
        autoFocus,
    } = props;

    const inputRef = createRef();

    const endlessType = isHidden ? 'hidden' : type;

    return (
        <div className={`input ${makeClasses(classes)}`}>
            <div className="input__inner">
                {!isHidden && label && (
                    <label
                        htmlFor={id}
                        className="input__label input-label"
                        dangerouslySetInnerHTML={{ __html: label }}
                    ></label>
                )}
                <input
                    id={id}
                    type={endlessType}
                    name={name}
                    value={value}
                    autoComplete={autoComplete}
                    onKeyDown={onKeyDown}
                    onBlur={onBlur}
                    onClick={onClick}
                    className="input__input"
                    ref={inputRef}
                    autoFocus={autoFocus}
                    onChange={(e) => onChange(e.target.value)}
                    {...inputAttrs}
                />
                {floatPlaceholder && (
                    <span className="input-float-placeholder">
                        {floatPlaceholder}
                    </span>
                )}
                {additionalRightText && (
                    <span
                        className="input-additional-right-text"
                        dangerouslySetInnerHTML={{
                            __html: additionalRightText,
                        }}
                    />
                )}
            </div>
        </div>
    );
}

Input.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    inputAttrs: PropTypes.shape({}),
    isHidden: PropTypes.bool,
    onKeyDown: PropTypes.func,
    onBlur: PropTypes.func,
    classes: PropTypes.arrayOf(PropTypes.string),
    errors: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.string,
    ]),
    hasErrors: PropTypes.bool,
    floatPlaceholder: PropTypes.string,
    additionalRightText: PropTypes.string,
    autoComplete: PropTypes.string,
    autoFocus: PropTypes.bool,
};

export default Input;
