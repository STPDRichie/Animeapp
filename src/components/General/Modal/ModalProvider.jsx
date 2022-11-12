import React, { useState } from 'react';

import { childrenProps } from '../../../utils/constants';

import ModalContext from './ModalContext';

function ModalProvider(props) {
    const { children } = props;
    const [modal, setModal] = useState(null);

    return (
        <ModalContext.Provider
            value={{
                modal,
                openModal: (modalFn) => {
                    setModal(modalFn());
                },
                closeModal: () => {
                    setModal(null);
                },
            }}
        >
            {children}
        </ModalContext.Provider>
    );
}

ModalProvider.propTypes = {
    children: childrenProps,
};

export default ModalProvider;
