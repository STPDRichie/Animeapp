import React from 'react';
import PropTypes from 'prop-types';

import Form from '@netangels/ui-kit/components/General/Form/Form';
import Errors from '@netangels/ui-kit/components/General/Form/Errors';

import Modal from './Modal';
import useModal from './useModal';
import Button from '../Button/Button';
import ButtonSubmit from '../Button/ButtonSubmit';
import FileUploader from '../FileUploader/FileUploader';

function UploadArchiveModalForm(props) {
    const {
        id,
        accept,
        label = 'Перетащите архив сюда',
        onUpload = () => {},
        onSubmit,
        extensions,
        defaultIcon,
        isAllowUpload = true,
        inProgressBody,
        externalErrorId,
        titleExtensions,
        uploadInProgress,
        acceptButtonTitle = 'Загрузить',
    } = props;
    const { closeModal } = useModal();
    const [filedata, setFiledata] = React.useState(null);
    return (
        <Modal
            modifier="image-upload-file-modal"
            type="dark"
            needCloseIcon={false}
            onClose={() => {}}
        >
            <Form
                formId={externalErrorId}
                onSubmit={(e, data, formId) => onSubmit(filedata, formId)}
            >
                {({ getValue, onChange, getErrors, isSubmiting }) => (
                    <React.Fragment>
                        <div className="image-upload-file-modal__title">
                            Загрузка образа
                        </div>
                        {uploadInProgress && inProgressBody}
                        {!uploadInProgress && (
                            <div>
                                <FileUploader
                                    id={id}
                                    label={label}
                                    defaultIcon={defaultIcon}
                                    titleExtensions={titleExtensions}
                                    accept={accept}
                                    extensions={extensions}
                                    onUpload={({ file }) => {
                                        setFiledata(file);
                                        onUpload();
                                    }}
                                    multiple={false}
                                />
                                <Errors errors={getErrors('__all__')} />
                                <div className="image-upload-file-modal__buttons-block">
                                    <ButtonSubmit
                                        disabled={!isAllowUpload || isSubmiting}
                                        title={acceptButtonTitle}
                                        modifiers={['orange']}
                                    />
                                    <Button
                                        title="Отменить"
                                        modifiers={['reject']}
                                        onClick={() => closeModal()}
                                    />
                                </div>
                            </div>
                        )}
                    </React.Fragment>
                )}
            </Form>
        </Modal>
    );
}

UploadArchiveModalForm.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    accept: PropTypes.string,
    defaultIcon: PropTypes.string,
    titleExtensions: PropTypes.string,
    inProgressBody: PropTypes.element,
    extensions: PropTypes.arrayOf(PropTypes.string),
    errors: PropTypes.shape({}),
    onSubmit: PropTypes.func,
    onUpload: PropTypes.func,
    flushErrors: PropTypes.func,
    isAllowUpload: PropTypes.bool,
    uploadInProgress: PropTypes.bool,
    acceptButtonTitle: PropTypes.string,
    externalErrorId: PropTypes.shape({}),
};

export default UploadArchiveModalForm;
