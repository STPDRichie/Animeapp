import React, { useState, useEffect } from 'react';
import { Calendar } from 'react-calendar';
import PropTypes from 'prop-types';

import Input from '../Input/Input';

import { getStringDate } from '../../../utils/functions';

function InputDate(props) {
    const {
        label,
        value,
        modifiersClass,
        onChange = () => {},
        isHidden,
        inputAttrs = {},
        inLoad,
    } = props;

    const [currentDate, setCurrentDate] = useState(value || '');

    const [calendarOpened, setCalendarOpened] = useState(false);

    const classNames = ['input-date', modifiersClass];

    const onChangeDate = (value) => {
        onChange(value);
    };

    useEffect(() => {
        if (value) {
            setCurrentDate(value);
        }
    }, [value]);

    return (
        <div
            className={classNames.join(' ')}
            onBlur={() => setTimeout(() => setCalendarOpened(false), 300)}
        >
            {inLoad && (
                <React.Fragment>
                    {!isHidden && (
                        <div className="input-date__label input-label input-label__loader" />
                    )}
                    <div className="input-date__input input__loader" />
                </React.Fragment>
            )}
            {!inLoad && (
                <React.Fragment>
                    {!isHidden && label && (
                        <label
                            className="input-date__label input-label"
                            dangerouslySetInnerHTML={{ __html: label }}
                        ></label>
                    )}
                    <div className="input-date__inner">
                        <Input
                            value={getStringDate(currentDate)}
                            modifier="light-blue"
                            classes={['input-date__input']}
                            onClick={() => setCalendarOpened(true)}
                        />
                    </div>
                    {calendarOpened && (
                        <Calendar
                            value={value}
                            onChange={onChangeDate}
                            locale="en-US"
                            className="input-date__calendar"
                            tileClassName={({ date }) => {
                                if (
                                    date.toString() === currentDate.toString()
                                ) {
                                    return 'react-calendar__tile--selected';
                                }
                                return '';
                            }}
                            {...inputAttrs}
                        />
                    )}
                </React.Fragment>
            )}
        </div>
    );
}

InputDate.propTypes = {
    label: PropTypes.string,
    value: PropTypes.any,
    modifiersClass: PropTypes.string,
    onChange: PropTypes.func,
    inputAttrs: PropTypes.shape({}),
    isHidden: PropTypes.bool,
    inLoad: PropTypes.bool,
};

export default InputDate;
