import React from 'react';

import { animeCardFormat } from './constants';

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
                <img
                    src={extraLarge}
                    alt={title.english}
                    className="image-with-title-card__image"
                />
            </div>
            <div className="image-with-title-card__title">{title.romaji}</div>
        </div>
    );
}

ImageWithTitleCard.propTypes = {
    animeCard: animeCardFormat,
};

export default ImageWithTitleCard;
