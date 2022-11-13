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
        modifier,
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
        disabled,
        inLoad,
    } = props;

    const inputRef = createRef();

    const endlessType = isHidden ? 'hidden' : type;

    return (
        <div
            className={`input ${
                modifier ? `input--${modifier}` : ''
            } ${makeClasses(classes)}`}
        >
            <div className="input__inner">
                {inLoad && (
                    <React.Fragment>
                        {!isHidden && (
                            <div className="input__label input-label input-label__loader" />
                        )}
                        <div className="input__input input__loader" />
                    </React.Fragment>
                )}
                {!inLoad && (
                    <React.Fragment>
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
                            disabled={disabled}
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
                    </React.Fragment>
                )}
            </div>
        </div>
    );
}

Input.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    classes: PropTypes.arrayOf(PropTypes.string),
    modifier: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    inputAttrs: PropTypes.shape({}),
    isHidden: PropTypes.bool,
    onKeyDown: PropTypes.func,
    onBlur: PropTypes.func,
    floatPlaceholder: PropTypes.string,
    additionalRightText: PropTypes.string,
    autoComplete: PropTypes.string,
    autoFocus: PropTypes.bool,
    disabled: PropTypes.bool,
    inLoad: PropTypes.bool,
};

export default Input;
