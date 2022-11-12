import React from 'react';

const ModalContext = React.createContext({
    modal: null,
    openModal: () => {},
    closeModal: () => {},
});

export default ModalContext;
