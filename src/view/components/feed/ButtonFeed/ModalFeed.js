import React from 'react';

import { NewImageModal } from './NewImageModal';
import { NewTextModal } from './NewTextModal';
import { NewVideoModal } from './NewVideoModal';

const ModalFeed = ({ closeModal, open, user, type }) => {
    const showHideClassName = open ? "modal display-block" : "modal display-none";
    let ChosenModal;
    switch (type) {
        case 'text':
            ChosenModal = <NewTextModal closeModal={closeModal} />;
            break;
        case 'image':
            ChosenModal = <NewImageModal closeModal={closeModal} />;
            break;
        case 'video':
            ChosenModal = <NewVideoModal closeModal={closeModal} />;
            break;
        default:
            break;
    }
    return (
        <div className={showHideClassName}>
            {ChosenModal}
        </div>
    )
}

export { ModalFeed }