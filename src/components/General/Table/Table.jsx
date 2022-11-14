import React from 'react';
import PropTypes from 'prop-types';

import TableHeader from './TableHeader';

function Table(props) {
    const {
        type,
        inProgress,
        rows,
        headers,
        renderInstance,
        onClickRow = () => {},
        title,
    } = props;

    return (
        <div className="table-wrapper">
            {inProgress && (
                <React.Fragment>
                    <div className="table-title-loader" />
                    <div className="table-instances-loader" />
                </React.Fragment>
            )}
            {!inProgress && (
                <React.Fragment>
                    {title && <div className="table-title">{title}</div>}
                    <table className="table-instances">
                        {headers && (
                            <TableHeader type={type} headers={headers} />
                        )}
                        <tbody>
                            {rows &&
                                rows.entities.map((row, i) => (
                                    <React.Fragment
                                        key={`table-tr-item-${type}-${i}`}
                                    >
                                        <tr
                                            className="table-instance-row"
                                            onClick={() => onClickRow(row)}
                                        >
                                            {renderInstance(row)}
                                        </tr>
                                    </React.Fragment>
                                ))}
                        </tbody>
                    </table>
                </React.Fragment>
            )}
        </div>
    );
}

Table.propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    inProgress: PropTypes.bool,
    rows: PropTypes.shape({
        count: PropTypes.number,
        entities: PropTypes.array,
    }),
    headers: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            type: PropTypes.string,
        }),
    ),
    renderInstance: PropTypes.func.isRequired,
    onClickRow: PropTypes.func,
};

export default Table;
