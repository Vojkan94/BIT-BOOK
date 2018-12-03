import React, { Component } from 'react';

class EditProfileModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameInputValue: "",
            descInputValue: "",
            imageInputValue: "",
            currentImg: ""
        }
    }

    changeNameInput = (event) => {
        this.setState({
            nameInputValue: event.target.value,
        })
    }
    changeDescInput = (event) => {
        this.setState({
            descInputValue: event.target.value,
        })
    }
    changeImgInput = (event) => {




        console.log(event.target.files);


    }
    render() {
        return (
            <div class="modal-body">
                <div class="container-fluid">
                    <div class="row">
                        <h3 class="col-md-4">Update Profile</h3>
                    </div>
                    <div class="row">
                        <div class="col-md-3 ">
                            <div class="card mt-3 profile-image-upload-border">
                                <img class="card-img-top" src={this.state.currentImg} alt="Card cap" />
                                <label class="image-file-upload">
                                    <input type="file" onChange={this.changeImgInput} />
                                    UPLOAD PHOTO
                                </label>
                            </div>
                        </div>
                        <div className="col-9 mt-10">
                            <label htmlFor="inputName">Name</label>
                            <input type="text" value={this.state.nameInputValue} onChange={this.changeNameInput} id="#inputName" class="form-control" />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12">
                            <label htmlFor="inputDescription">User Description</label>
                            <input type="text" onChange={this.changeDescInput} value={this.state.descInputValue} id="#inputDescription" class="form-control" />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-3 ml-auto" >
                            <button type="button" onClick={this.props.updateProfile} class="btn btn-primary col-5 mr-1 p-1">UPDATE</button>
                            <button type="button" onClick={this.props.closeModal} class="btn btn-primary col-5 p-1">CLOSE</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export { EditProfileModal }