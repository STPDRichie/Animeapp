import React from 'react';

import { animeCardFormat } from './constants';

import sadEmoji from '../../static/icon/sad-emoji.svg';

function ImageWithTitleCard(props) {
    const { animeCard } = props;
    const title = animeCard.title;
    const { color, extraLarge } = animeCard.coverImage;

    return (
        <div className="image-with-title-card">
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
            <div className="image-with-title-card__title">{title.romaji}</div>
        </div>
    );
}

ImageWithTitleCard.propTypes = {
    animeCard: animeCardFormat,
};

export default ImageWithTitleCard;
