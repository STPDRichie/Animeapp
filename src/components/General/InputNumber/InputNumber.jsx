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
        value = 0,
        autoComplete = 'off',
        classes = [],
        inLoad,
    } = props;

    const [currentValue, setCurrentValue] = useState(value || min);

    const onValueChange = (e) => {
        if (Number.isInteger(parseInt(e.target.value))) {
            if (parseInt(e.target.value) > max) {
                setCurrentValue(max);
                onChange(max);
            } else if (parseInt(e.target.value) < min) {
                setCurrentValue(min);
                onChange(min);
            } else {
                setCurrentValue(parseInt(e.target.value));
                onChange(parseInt(e.target.value));
            }
        }
    };

    const addValue = () => {
        let newValue = currentValue + 1;
        newValue = newValue <= max ? newValue : currentValue;
        setCurrentValue(newValue);
        onChange(newValue);
    };

    const subtractValue = () => {
        let newValue = currentValue - 1;
        newValue = newValue >= Number(min) ? newValue : currentValue;
        setCurrentValue(newValue);
        onChange(newValue);
    };

    const onKeyDown = (e) => {
        if (e.keyCode === 8) {
            const newValue = Math.trunc(currentValue / 10);
            setCurrentValue(newValue);
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
                {inLoad && (
                    <React.Fragment>
                        <div className="input-number__label input-label input-label__loader" />
                        <div className="input-number-inner__input input__loader" />
                    </React.Fragment>
                )}
                {!inLoad && (
                    <React.Fragment>
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
                                value={currentValue}
                                autoComplete={autoComplete}
                                onChange={onValueChange}
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
                    </React.Fragment>
                )}
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
    value: PropTypes.number,
    autoComplete: PropTypes.string,
    classes: PropTypes.arrayOf(PropTypes.string),
    inLoad: PropTypes.bool,
};

export default InputNumber;
