import PropTypes from 'prop-types';

export const childrenProps = PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.string,
]);
