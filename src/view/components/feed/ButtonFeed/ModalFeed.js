import React from 'react';

import { NewImageModal } from './NewImageModal';
import { NewTextModale } from './NewTextModale';
import { NewVideoModale } from './NewVideoModale';

const Modal = ({ closeModal, open, user }) => {
    const showHideClassName = open ? "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassName}>
            <section className="modal-main">

            </section>
        </div>
    )
}

export { Modal }