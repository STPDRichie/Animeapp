import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Modal from '../General/Modal/Modal';
import Button from '../General/Button/Button';
import Select from '../General/Select/Select';
import InputNumber from '../General/InputNumber/InputNumber';
import InputDate from '../General/InputDate/InputDate';

import { fetchAnimeInfo } from '../../actions/user/actions';
import { animeCardFormat, animeUserStatusesMap } from '../AnimeCard/constants';

function ChangeAnimeStatusModal(props) {
    const { animeCard } = props;
    const { title, coverImage } = animeCard;

    const dispatch = useDispatch();

    const { animeUserInfo, animeInProgress } = useSelector(
        (state) => state.anime,
    );

    const statuses = Object.values(animeUserStatusesMap).map((status) => ({
        value: status,
        label: status.charAt(0) + status.slice(1).toLowerCase(),
    }));

    const startedAt =
        animeUserInfo &&
        animeUserInfo.startedAt &&
        animeUserInfo.startedAt.day &&
        new Date(
            `${animeUserInfo.startedAt.year}-${animeUserInfo.startedAt.month}-${animeUserInfo.startedAt.day}`,
        );

    const completedAt =
        animeUserInfo &&
        animeUserInfo.completedAt &&
        animeUserInfo.completedAt.day &&
        new Date(
            `${animeUserInfo.completedAt.year}-${animeUserInfo.completedAt.month}-${animeUserInfo.completedAt.day}`,
        );

    const scores = [
        { value: 5, label: '5' },
        { value: 4, label: '4' },
        { value: 3, label: '3' },
        { value: 2, label: '2' },
        { value: 1, label: '1' },
        { value: 0, label: '' },
    ];

    useEffect(() => {
        dispatch(fetchAnimeInfo(animeCard.id));
    }, []);

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
                {!animeInProgress && (
                    <div className="change-anime-status__body modal-content">
                        <div className="change-anime-status__form">
                            <div className="form-input status">
                                <Select
                                    label="Status"
                                    placeholder=""
                                    options={statuses}
                                    value={
                                        animeUserInfo &&
                                        statuses.find(
                                            (s) =>
                                                s.value ===
                                                animeUserInfo.status,
                                        )
                                    }
                                    isSearchable={false}
                                />
                            </div>
                            <div className="form-input score">
                                <Select
                                    label="Score"
                                    placeholder=""
                                    options={scores}
                                    value={
                                        animeUserInfo &&
                                        scores.find(
                                            (s) =>
                                                s.value === animeUserInfo.score,
                                        )
                                    }
                                    isSearchable={false}
                                />
                            </div>
                            <div className="form-input progress">
                                <InputNumber
                                    label="Episode Progress"
                                    min={0}
                                    max={animeCard.episodes}
                                    value={
                                        (animeUserInfo &&
                                            animeUserInfo.progress) ||
                                        0
                                    }
                                />
                            </div>
                            <div className="form-input start">
                                <InputDate
                                    label="Start Date"
                                    value={startedAt}
                                />
                            </div>
                            <div className="form-input finish">
                                <InputDate
                                    label="Finish Date"
                                    value={completedAt}
                                />
                            </div>
                            <div className="form-input repeat">
                                <InputNumber
                                    label="Total Rewatches"
                                    min={0}
                                    value={
                                        (animeUserInfo &&
                                            animeUserInfo.repeat) ||
                                        0
                                    }
                                />
                            </div>
                        </div>
                    </div>
                )}
            </React.Fragment>
        </Modal>
    );
}

ChangeAnimeStatusModal.propTypes = {
    animeCard: animeCardFormat,
};

export default ChangeAnimeStatusModal;
