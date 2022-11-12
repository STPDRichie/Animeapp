import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPen,
    faCalendar,
    faCheck,
    faPlay,
    faPlus,
} from '@fortawesome/free-solid-svg-icons';

import BlockWithTooltip from '../General/BlockWithTooltip/BlockWithTooltip';

import { animeCardFormat, statusColorsMap } from './constants';
import sadEmoji from '../../static/icon/sad-emoji.svg';

function ImageWithTitleCard(props) {
    const { animeCard } = props;
    const title = animeCard.title;
    const { color, extraLarge, large, medium } = animeCard.coverImage;

    const dispatch = useDispatch();

    return (
        <div
            className="image-with-title-card"
            onClick={() =>
                dispatch(
                    push(`/${animeCard.type.toLowerCase()}/${animeCard.id}`),
                )
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
                <div className="image-with-title-card__actions">
                    <div className="image-with-title-card__action action__set">
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
                            >
                                <FontAwesomeIcon icon={faPlay} />
                            </div>
                        </BlockWithTooltip>
                    </div>
                </div>
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
