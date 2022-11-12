import React, { useContext } from 'react';
import ModalContext from './ModalContext';

function ModalPortal() {
    const { modal } = useContext(ModalContext);

    return <div className="modal-portal">{modal}</div>;
}

export default ModalPortal;
