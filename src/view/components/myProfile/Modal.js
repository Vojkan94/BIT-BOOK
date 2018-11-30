import React from 'react';

const Modal = ({ open, children }) => {
    if (!open) { return null };
    console.log(children[1].props.children);
    return (
        <div>{children[1].props.children}</div>
    )
}

export { Modal }