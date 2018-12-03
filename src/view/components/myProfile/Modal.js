import React from 'react';
import './Modal.css'
import { EditProfileModal } from './EditProfileModal';
const Modal = ({ closeModal, open, user }) => {
    const showHideClassName = open ? "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <EditProfileModal closeModal={closeModal} user={user} />
            </section>
        </div>
    )
}

export { Modal }