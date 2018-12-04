import React from 'react';
import { EditProfileModal } from './EditProfileModal';
const Modal = ({ closeModal, open, user, fetchData }) => {
    const showHideClassName = open ? "modal display-block" : "modal display-none";
    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <EditProfileModal closeModal={closeModal} user={user} fetchData={fetchData} />
            </section>
        </div>
    )
}

export { Modal }