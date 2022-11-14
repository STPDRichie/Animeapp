import React from 'react';
import PropTypes from 'prop-types';

function TableCell(props) {
    const { type, children, onClick } = props;
    const modifier = type ? ` table-instance-col--${type}` : '';
    return (
        <td className={`table-instance-col${modifier}`} onClick={onClick}>
            <div className="table-instance-col__cell">{children}</div>
        </td>
    );
}

TableCell.propTypes = {
    children: PropTypes.any,
    type: PropTypes.string,
    onClick: PropTypes.func,
};

export default TableCell;
