import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Modal from '../General/Modal/Modal';
import Button from '../General/Button/Button';
import Select from '../General/Select/Select';
import InputNumber from '../General/InputNumber/InputNumber';
import InputDate from '../General/InputDate/InputDate';

import { getYMD } from '../../utils/functions';
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
        { value: '5', label: '5' },
        { value: '4', label: '4' },
        { value: '3', label: '3' },
        { value: '2', label: '2' },
        { value: '1', label: '1' },
        { value: '0', label: '' },
    ];

    const [formData, setFormData] = useState({
        status:
            animeUserInfo &&
            statuses.find((s) => s.value === animeUserInfo.status),
        score:
            animeUserInfo &&
            scores.find((s) => s.value === animeUserInfo.score.toString()),
        progress: animeUserInfo && animeUserInfo.progress,
        startedAt,
        completedAt,
        repeat: animeUserInfo && animeUserInfo.repeat,
    });

    const changeAnimeStatus = () => {
        console.log({
            status: formData.status && formData.status.value,
            score: parseInt(formData.score.value),
            progress: formData.progress,
            startedAt: getYMD(formData.startedAt),
            completedAt: getYMD(formData.completedAt),
            repeat: formData.repeat,
        });
    };

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
                        <Button onClick={changeAnimeStatus}>Save</Button>
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
                                    value={formData.status}
                                    isSearchable={false}
                                    onChange={(selected) =>
                                        setFormData({
                                            ...formData,
                                            status: selected,
                                        })
                                    }
                                />
                            </div>
                            <div className="form-input score">
                                <Select
                                    label="Score"
                                    placeholder=""
                                    options={scores}
                                    value={formData.score}
                                    isSearchable={false}
                                    onChange={(selected) =>
                                        setFormData({
                                            ...formData,
                                            score: selected,
                                        })
                                    }
                                />
                            </div>
                            <div className="form-input progress">
                                <InputNumber
                                    label="Episode Progress"
                                    min={0}
                                    max={animeCard.episodes}
                                    value={formData.progress}
                                    onChange={(selected) =>
                                        setFormData({
                                            ...formData,
                                            progress: selected,
                                        })
                                    }
                                />
                            </div>
                            <div className="form-input start">
                                <InputDate
                                    label="Start Date"
                                    value={formData.startedAt}
                                    onChange={(selected) =>
                                        setFormData({
                                            ...formData,
                                            startedAt: selected,
                                        })
                                    }
                                />
                            </div>
                            <div className="form-input finish">
                                <InputDate
                                    label="Finish Date"
                                    value={formData.completedAt}
                                    onChange={(selected) =>
                                        setFormData({
                                            ...formData,
                                            completedAt: selected,
                                        })
                                    }
                                />
                            </div>
                            <div className="form-input repeat">
                                <InputNumber
                                    label="Total Rewatches"
                                    min={0}
                                    value={formData.repeat}
                                    onChange={(selected) =>
                                        setFormData({
                                            ...formData,
                                            repeat: selected,
                                        })
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
