import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

import { animeCardFormat, statusColorsMap } from './constants';

import sadEmoji from '../../static/icon/sad-emoji.svg';

function ImageWithTitleCard(props) {
    const { animeCard } = props;
    const title = animeCard.title;
    const { color, extraLarge } = animeCard.coverImage;

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
                {extraLarge && (
                    <img
                        src={extraLarge}
                        alt={title.english}
                        className="image-with-title-card__image"
                    />
                )}
                {!extraLarge && (
                    <img
                        src={sadEmoji}
                        alt="sad-emoji"
                        className="image-with-title-card__sad-emoji"
                    />
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
