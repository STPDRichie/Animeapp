import React from 'react';

import Modal from '../General/Modal/Modal';
import Button from '../General/Button/Button';

import { animeCardFormat } from '../AnimeCard/constants';

function ChangeAnimeStatusModal(props) {
    const { animeCard } = props;
    const { title, coverImage } = animeCard;

    return (
        <Modal modifier="change-anime-status-modal">
            <div
                className="change-anime-status__header modal-content"
                style={{ backgroundImage: `url(${animeCard.bannerImage})` }}
            >
                <div className="change-anime-status__info">
                    <div className="change-anime-status__image-wrapper">
                        <img src={coverImage.large} />
                    </div>
                    <div className="change-anime-status__title">
                        {title.userPreferred}
                    </div>
                </div>
                <div className="change-anime-status__buttons">
                    <Button>Save</Button>
                </div>
            </div>
            <div className="modal-content"></div>
        </Modal>
    );
}

ChangeAnimeStatusModal.propTypes = {
    animeCard: animeCardFormat,
};

export default ChangeAnimeStatusModal;
