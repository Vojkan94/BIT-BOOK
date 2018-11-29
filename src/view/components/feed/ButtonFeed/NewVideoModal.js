import React, { Fragment } from 'react';

const NewVideoModal = () => {
    return (
        <Fragment>
            <div className="modal fade" id="videoModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">New video post</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>YouTube video link</p>
                            <input type="text" className="col-12" id="post-input" />
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

export default NewVideoModal