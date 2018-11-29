import React, { Fragment } from 'react';

const NewImageModal = () => {
    return (
        <Fragment>
            <div className="modal fade" id="imageModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">New image post</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Image link</p>
                            <input type="text" className="col-12" />
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

export default NewImageModal