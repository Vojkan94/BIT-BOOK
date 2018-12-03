import React from 'react';
import './Modal.css'
import { EditProfileModal } from './EditProfileModal';
const Modal = ({ closeModal, open }) => {
    const showHideClassName = open ? "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <EditProfileModal closeModal={closeModal} />
            </section>
        </div>
    )
}

export { Modal }