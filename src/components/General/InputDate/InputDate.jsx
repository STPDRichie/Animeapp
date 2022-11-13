import React, { useState } from 'react';
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
    } = props;

    const [currentDate, setCurrentDate] = useState(value || '');

    const [calendarOpened, setCalendarOpened] = useState(false);

    const classNames = ['input-date', modifiersClass];

    const onChangeDate = (value) => {
        setCurrentDate(value);
        onChange(value);
    };

    return (
        <div
            className={classNames.join(' ')}
            onBlur={() => setTimeout(() => setCalendarOpened(false), 300)}
        >
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
                        if (date.toString() === currentDate.toString()) {
                            return 'react-calendar__tile--selected';
                        }
                        return '';
                    }}
                    {...inputAttrs}
                />
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
};

export default InputDate;
