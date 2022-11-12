import React from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPen,
    faCalendar,
    faCheck,
    faPlay,
    faPlus,
} from '@fortawesome/free-solid-svg-icons';

import BlockWithTooltip from '../General/BlockWithTooltip/BlockWithTooltip';
import ChangeAnimeStatusModal from '../Modals/ChangeAnimeStatusModal';
import useToken from '../../hooks/useToken';
import useModal from '../General/Modal/useModal';

import { locate } from '../../utils/functions';
import { addAnimeToList } from '../../actions/user/actions';
import {
    animeCardFormat,
    statusColorsMap,
    animeUserStatusesMap,
} from './constants';
import sadEmoji from '../../static/icon/sad-emoji.svg';

function ImageWithTitleCard(props) {
    const { animeCard } = props;
    const title = animeCard.title;
    const { color, extraLarge, large, medium } = animeCard.coverImage;

    const dispatch = useDispatch();

    const { token } = useToken();
    const { openModal } = useModal();

    const addToList = (status, mediaId) => {
        dispatch(addAnimeToList(status, mediaId));
    };

    return (
        <div
            className="image-with-title-card"
            onClick={() =>
                locate(`/${animeCard.type.toLowerCase()}/${animeCard.id}`)
            }
        >
            <div
                className="image-with-title-card__image-wrapper"
                style={{
                    backgroundColor: color,
                }}
            >
                {(extraLarge || large || medium) && (
                    <img
                        src={extraLarge || large || medium}
                        alt={title.english}
                        className="image-with-title-card__image"
                    />
                )}
                {!extraLarge && !large && !medium && (
                    <img
                        src={sadEmoji}
                        alt="sad-emoji"
                        className="image-with-title-card__sad-emoji"
                    />
                )}
                {token && (
                    <div className="image-with-title-card__actions">
                        <div
                            className="image-with-title-card__action action__set"
                            onClick={(e) => {
                                e.stopPropagation();
                                openModal(() => (
                                    <ChangeAnimeStatusModal
                                        animeCard={animeCard}
                                    />
                                ));
                            }}
                        >
                            {animeCard.mediaListEntry && (
                                <FontAwesomeIcon icon={faPen} />
                            )}
                            {!animeCard.mediaListEntry && (
                                <FontAwesomeIcon icon={faPlus} />
                            )}
                        </div>
                        <div className="image-with-title-card__additional-actions action__additional">
                            <BlockWithTooltip
                                clickable={false}
                                tooltipPlace="left"
                                tooltipId={`${animeCard.id}-set-planning`}
                                tooltipChidren="Set as Planning"
                                className="action-tooltip"
                            >
                                <div
                                    data-tip
                                    data-for={`${animeCard.id}-set-planning`}
                                    className="image-with-title-card__action action__planning"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        addToList(
                                            animeUserStatusesMap.PLANNING,
                                            animeCard.id,
                                        );
                                    }}
                                >
                                    <FontAwesomeIcon icon={faCalendar} />
                                </div>
                            </BlockWithTooltip>
                            <BlockWithTooltip
                                clickable={false}
                                tooltipPlace="left"
                                tooltipId={`${animeCard.id}-set-completed`}
                                tooltipChidren="Set as Completed"
                                className="action-tooltip"
                            >
                                <div
                                    data-tip
                                    data-for={`${animeCard.id}-set-completed`}
                                    className="image-with-title-card__action action__completed"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        addToList(
                                            animeUserStatusesMap.COMPLETED,
                                            animeCard.id,
                                        );
                                    }}
                                >
                                    <FontAwesomeIcon icon={faCheck} />
                                </div>
                            </BlockWithTooltip>
                            <BlockWithTooltip
                                clickable={false}
                                tooltipPlace="left"
                                tooltipId={`${animeCard.id}-set-watching`}
                                tooltipChidren="Set as Watching"
                                className="action-tooltip"
                            >
                                <div
                                    data-tip
                                    data-for={`${animeCard.id}-set-watching`}
                                    className="image-with-title-card__action action__watching"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        addToList(
                                            animeUserStatusesMap.CURRENT,
                                            animeCard.id,
                                        );
                                    }}
                                >
                                    <FontAwesomeIcon icon={faPlay} />
                                </div>
                            </BlockWithTooltip>
                        </div>
                    </div>
                )}
            </div>
            <div className="image-with-title-card__title">
                {animeCard.mediaListEntry && animeCard.mediaListEntry.status && (
                    <div
                        className="image-with-title-card__status"
                        style={{
                            backgroundColor:
                                statusColorsMap[
                                    animeCard.mediaListEntry.status
                                ],
                        }}
                    />
                )}
                {title.userPreferred}
            </div>
        </div>
    );
}

ImageWithTitleCard.propTypes = {
    animeCard: animeCardFormat,
};

export default ImageWithTitleCard;
