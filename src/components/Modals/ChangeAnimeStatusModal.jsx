import React from 'react';

import Modal from '../General/Modal/Modal';
import Button from '../General/Button/Button';
import Select from '../General/Select/Select';
import InputNumber from '../General/InputNumber/InputNumber';

import { animeCardFormat, animeUserStatusesMap } from '../AnimeCard/constants';

function ChangeAnimeStatusModal(props) {
    const { animeCard } = props;
    const { title, coverImage } = animeCard;

    const statuses = Object.values(animeUserStatusesMap).map((status) => ({
        value: status,
        label: status.charAt(0) + status.slice(1).toLowerCase(),
    }));

    const scores = [
        { value: '5', label: '5' },
        { value: '4', label: '4' },
        { value: '3', label: '3' },
        { value: '2', label: '2' },
        { value: '1', label: '1' },
    ];

    return (
        <Modal modifier="change-anime-status-modal">
            <React.Fragment>
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
                    <div className="change-anime-status__header-buttons">
                        <Button>Save</Button>
                    </div>
                </div>
                <div className="change-anime-status__body modal-content">
                    <div className="change-anime-status__form">
                        <div className="form-input status">
                            <Select
                                label="Status"
                                placeholder=""
                                options={statuses}
                                isSearchable={false}
                            />
                        </div>
                        <div className="form-input score">
                            <Select
                                label="Score"
                                placeholder=""
                                options={scores}
                                isSearchable={false}
                            />
                        </div>
                        <div className="form-input progress">
                            <InputNumber
                                label="Progress"
                                min={0}
                                max={animeCard.episodes}
                                // onChange={() => {}}
                            />
                            {/* <Select
                                label="Progress"
                                placeholder=""
                                options={statuses}
                                isSearchable={false}
                                grid-area="progress"
                            /> */}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </Modal>
    );
}

ChangeAnimeStatusModal.propTypes = {
    animeCard: animeCardFormat,
};

export default ChangeAnimeStatusModal;
