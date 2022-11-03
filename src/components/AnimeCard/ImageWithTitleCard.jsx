import React from 'react';

import { animeCardFormat } from '../constants';

function ImageWithTitleCard(props) {
    const { animeCard } = props;
    const title = animeCard.title;
    const { color, medium } = animeCard.coverImage;

    return (
        <div className="image-with-title-card">
            <div className="image-with-title-card__image-wrapper">
                <div
                    style={{
                        backgroundColor: color,
                    }}
                    className="image-with-title-card__image"
                >
                    {medium}
                </div>
            </div>
            <div className="image-with-title-card__title">{title.english}</div>
        </div>
    );
}

ImageWithTitleCard.propTypes = {
    animeCard: animeCardFormat,
};

export default ImageWithTitleCard;
