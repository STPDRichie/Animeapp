import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

import TableCell from '../General/Table/TableCell';
import ChangeAnimeStatusModal from '../Modals/ChangeAnimeStatusModal';
import useModal from '../General/Modal/useModal';

import { animeCardFormat } from '../../utils/constants';

function AnimeTableInstance(props) {
    const { animeInstance } = props;

    const { openModal } = useModal();

    const listEntry = animeInstance.mediaListEntry;

    return (
        <React.Fragment>
            <TableCell type="anime-image">
                <div className="anime-image-preview">
                    <img src={animeInstance.coverImage.large} />
                </div>
                <div
                    className="anime-image-wrapper"
                    onClick={() =>
                        openModal(() => (
                            <ChangeAnimeStatusModal animeCard={animeInstance} />
                        ))
                    }
                >
                    <img src={animeInstance.coverImage.medium} />
                    <div className="anime-edit-icon">
                        <FontAwesomeIcon icon={faPen} />
                    </div>
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
                {listEntry && (
                    <React.Fragment>
                        {animeInstance.episodes
                            ? `${listEntry && listEntry.progress}/${
                                  animeInstance.episodes
                              }`
                            : listEntry && listEntry.progress}
                    </React.Fragment>
                )}
            </TableCell>
            <TableCell type="anime-type">{animeInstance.format}</TableCell>
        </React.Fragment>
    );
}

AnimeTableInstance.propTypes = {
    animeInstance: animeCardFormat,
};

export default AnimeTableInstance;
