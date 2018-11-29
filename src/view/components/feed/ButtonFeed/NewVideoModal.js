import React, { Fragment } from 'react';

const NewVideoModal = (props) => {
    return (
        <Fragment>
            <div className="modal fade" id="videoModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">New video post</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>YouTube video link</p>
                            <input type="text" className="col-12" id="post-video" />
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={props.collectVideoInput} className="btn btn-primary">POST</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default NewVideoModal