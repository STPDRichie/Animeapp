import React from 'react';
import PropTypes from 'prop-types';

function TableHeader(props) {
    const { type, headers } = props;

    return (
        <thead className="table-head">
            <tr>
                {headers.map((header, i) => (
                    <th
                        key={`table-instance-col-${type}-${i}`}
                        className={`table-instance-col table-instance-col--${header.type}`}
                    >
                        {header.title}
                    </th>
                ))}
            </tr>
        </thead>
    );
}

TableHeader.propTypes = {
    type: PropTypes.string.isRequired,
    headers: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            type: PropTypes.string,
        }),
    ),
};

export default TableHeader;
