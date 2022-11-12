import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';

function Select(props) {
    const {
        label,
        placeholder,
        options,
        value,
        isSearchable,
        onChange = () => {},
        disabled,
        selectAttrs = {},
        modifiersClass,
        formatOptionLabel,
    } = props;

    const classNames = ['select', modifiersClass];

    return (
        <div className={classNames.join(' ')}>
            {label && (
                <label
                    className="select__label input-label"
                    dangerouslySetInnerHTML={{ __html: label }}
                ></label>
            )}
            <ReactSelect
                {...selectAttrs}
                placeholder={placeholder}
                value={value}
                menuPlacement="auto"
                className="select-block"
                classNamePrefix="select-inner"
                onChange={onChange}
                isSearchable={isSearchable}
                formatOptionLabel={formatOptionLabel}
                options={options}
                isDisabled={disabled}
            />
        </div>
    );
}

Select.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
                PropTypes.object,
            ]),
            label: PropTypes.string,
            attrs: PropTypes.shape({}),
        }),
    ),
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    isSearchable: PropTypes.bool,
    value: PropTypes.shape({
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.object,
        ]),
        label: PropTypes.string,
        attrs: PropTypes.shape({}),
    }),
    selectAttrs: PropTypes.shape({}),
    modifiersClass: PropTypes.string,
    formatOptionLabel: PropTypes.func,
};

export default Select;
