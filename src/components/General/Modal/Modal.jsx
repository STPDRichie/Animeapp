import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import useModal from './useModal';

function Modal(props) {
    const {
        children,
        onClose = () => {
            closeModal();
        },
        modifier,
        type,
        needCloseIcon = true,
    } = props;

    const { closeModal } = useModal();

    const escKeyDown = function (event) {
        if (event.keyCode === 27) {
            onClose();
        }
    };

    const modifiers = [];
    if (modifier) {
        modifiers.push(modifier);
    }
    if (type) {
        modifiers.push(`modal-container--${type}`);
    }

    useEffect(() => {
        document.addEventListener('keydown', escKeyDown);
        return () => {
            document.removeEventListener('keydown', escKeyDown);
        };
    }, []);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className={`modal-container ${modifiers.join(' ')}`}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                {children}
                {needCloseIcon && (
                    <div className="modal-container__close" onClick={onClose}>
                        <FontAwesomeIcon icon={faClose} />
                    </div>
                )}
            </div>
        </div>
    );
}

Modal.propTypes = {
    children: PropTypes.element,
    onClose: PropTypes.func,
    modifier: PropTypes.string,
    type: PropTypes.string,
    needCloseIcon: PropTypes.bool,
};

export default Modal;
