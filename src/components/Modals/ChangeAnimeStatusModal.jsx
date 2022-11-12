import React from 'react';

import Modal from '../General/Modal/Modal';

import { animeCardFormat } from '../AnimeCard/constants';

function ChangeAnimeStatusModal(props) {
    const { animeCard } = props;

    return (
        <Modal modifier="change-anime-status-modal">
            <div
                className="anime__banner"
                style={{ backgroundImage: `url(${animeCard.bannerImage})` }}
            >
                {/* <img src={animeCard.bannerImage} /> */}
            </div>
        </Modal>
    );
}

ChangeAnimeStatusModal.propTypes = {
    animeCard: animeCardFormat,
};

export default ChangeAnimeStatusModal;
