import { useContext } from 'react';
import ModalContext from './ModalContext';

function useModal() {
    const { openModal, closeModal } = useContext(ModalContext);
    return { openModal, closeModal };
}

export default useModal;
