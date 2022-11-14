import React from 'react';
import PropTypes from 'prop-types';

import Table from '../General/Table/Table';
import AnimeTableInstance from './AnimeTableInstance';

import { animeCardFormat } from '../../utils/constants';

function AnimeTable(props) {
    const { animeInstances, inProgress, title } = props;

    const headers = [
        { title: '', type: 'anime-image' },
        { title: 'Title', type: 'anime-title' },
        { title: 'Repeat', type: 'anime-repeat' },
        { title: 'Score', type: 'anime-score' },
        { title: 'Progress', type: 'anime-progress' },
        { title: 'Type', type: 'anime-type' },
    ];

    return (
        <div className="anime-table">
            <Table
                type="anime"
                title={title}
                inProgress={inProgress}
                rows={animeInstances}
                headers={headers}
                renderInstance={(entity) => (
                    <AnimeTableInstance animeInstance={entity} />
                )}
            />
        </div>
    );
}

AnimeTable.propTypes = {
    animeInstances: PropTypes.shape({
        count: PropTypes.number,
        entities: PropTypes.arrayOf(animeCardFormat),
    }),
    inProgress: PropTypes.bool,
    title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

export default AnimeTable;
