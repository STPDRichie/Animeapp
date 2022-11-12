import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

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
                    <div className="image-with-title-card__action action__set"></div>
                    <div className="image-with-title-card__additional-actions action__additional">
                        <div className="image-with-title-card__action action__planning"></div>
                        <div className="image-with-title-card__action action__completed"></div>
                        <div className="image-with-title-card__action action__watching"></div>
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
