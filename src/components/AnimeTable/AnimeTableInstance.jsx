import React from 'react';

import TableCell from '../General/Table/TableCell';

import { animeCardFormat } from '../../utils/constants';

function AnimeTableInstance(props) {
    const { animeInstance } = props;

    const listEntry = animeInstance.mediaListEntry;
    console.log(animeInstance);

    return (
        <React.Fragment>
            <TableCell type="anime-image">
                <div className="anime-image-wrapper">
                    <img src={animeInstance.coverImage.medium} />
                </div>
            </TableCell>
            <TableCell type="anime-title">
                {animeInstance.title.userPreferred}
            </TableCell>
            <TableCell type="anime-repeat">
                {listEntry && (listEntry.repeat === 0 ? '' : listEntry.repeat)}
            </TableCell>
            <TableCell type="anime-score">
                {listEntry && (listEntry.score === 0 ? '' : listEntry.score)}
            </TableCell>
            <TableCell type="anime-progress">
                {`${listEntry && listEntry.progress}/${animeInstance.episodes}`}
            </TableCell>
            <TableCell type="anime-type">{animeInstance.format}</TableCell>
        </React.Fragment>
    );
}

AnimeTableInstance.propTypes = {
    animeInstance: animeCardFormat,
};

export default AnimeTableInstance;
