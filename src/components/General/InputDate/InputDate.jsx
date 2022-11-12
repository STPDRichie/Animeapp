import React, { useState, createRef } from 'react';
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

    const inputRef = createRef();

    const [currentDate, setCurrentDate] = useState(value || '');
    const [calendarOpened, setCalendarOpened] = useState(false);

    const classNames = ['input-date', modifiersClass];

    const onChangeDate = (value) => {
        setCurrentDate(value);
        onChange(value);
        setCalendarOpened(false);
    };

    return (
        <div className={classNames.join(' ')}>
            {!isHidden && label && (
                <label
                    className="input-date__label input-label"
                    dangerouslySetInnerHTML={{ __html: label }}
                ></label>
            )}
            <Input
                value={getStringDate(currentDate)}
                modifier="light-blue"
                classes={['input-date__input']}
                onClick={() => setCalendarOpened(true)}
            />
            {calendarOpened && (
                <Calendar
                    value={value}
                    onChange={onChangeDate}
                    inputRef={inputRef}
                    locale="en-US"
                    className="input-date__calendar"
                    tileClassName={({ date }) => {
                        console.log(date);
                        console.log(value);
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
