import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import { makeClasses } from '../../../utils/functions';

export function InputNumber(props) {
    const {
        id,
        name,
        label,
        min = 0,
        max = 1000000,
        onChange = () => {},
        inputAttrs,
        defaultValue = 0,
        autoComplete = 'off',
        classes = [],
    } = props;

    const [value, setValue] = useState(defaultValue);

    const addValue = () => {
        let newValue = value + 1;
        newValue = newValue <= max ? newValue : value;
        setValue(newValue);
        onChange(newValue);
    };

    const subtractValue = () => {
        let newValue = value - 1;
        newValue = newValue >= Number(min) ? newValue : value;
        setValue(newValue);
        onChange(newValue);
    };

    const onKeyDown = (e) => {
        if (e.keyCode === 8) {
            const newValue = Math.trunc(value / 10);
            setValue(newValue);
        }
        if (e.keyCode === 38) {
            addValue();
        }
        if (e.keyCode === 40) {
            subtractValue();
        }
    };

    const classNames = ['input-number', ...classes];

    return (
        <div className={makeClasses(classNames)}>
            <div className="input-number-inner">
                {label && (
                    <label
                        htmlFor={id}
                        className="input-number__label input-label"
                        dangerouslySetInnerHTML={{ __html: label }}
                    ></label>
                )}
                <div className="input-number-inner__input">
                    <input
                        id={id}
                        type="text"
                        name={name}
                        value={value}
                        autoComplete={autoComplete}
                        onChange={onChange}
                        onKeyDown={onKeyDown}
                        {...inputAttrs}
                    />
                    <div className="add" onClick={addValue}>
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                    <div className="subtract" onClick={subtractValue}>
                        <FontAwesomeIcon icon={faMinus} />
                    </div>
                </div>
            </div>
        </div>
    );
}

InputNumber.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    name: PropTypes.string,
    onChange: PropTypes.func,
    inputAttrs: PropTypes.shape({}),
    defaultValue: PropTypes.number,
    autoComplete: PropTypes.string,
    classes: PropTypes.arrayOf(PropTypes.string),
};

export default InputNumber;
