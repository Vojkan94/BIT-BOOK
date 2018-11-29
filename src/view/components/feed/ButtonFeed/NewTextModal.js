import React, { Fragment } from 'react';

const NewTextModal = () => {
    return (
        <Fragment>
            <div className="modal fade" id="textModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">New post</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <label htmlFor="message-text" className="col-form-label">Post content</label>
                            <textarea className="form-control" id="post-input"></textarea>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">POST</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default NewTextModal