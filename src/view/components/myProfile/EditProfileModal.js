import React, { Component } from 'react';
import { userService } from '../../../services/userService';

class EditProfileModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameInputValue: this.props.user.name,
            descInputValue: this.props.user.about,
            currentImg: this.props.user.img,
            file: ""
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
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            this.setState({
                currentImg: reader.result,
                file
            })
        };
        reader.readAsDataURL(file);
    }


    uploadPicture = () => {
        userService.uploadUserImage(this.state.file)
            .then((response) => {
                return response.json();
            })
            .then((link) => {
                this.editUserProfile(link);
            })
    }

    editUserProfile = (link = this.state.currentImg) => {
        const inputData = {
            "userId": this.props.user.id,
            "name": this.state.nameInputValue,
            "aboutShort": this.state.descInputValue,
            "about": this.state.descInputValue,
            "avatarUrl": link,
            "email": this.props.user.email
        }

        userService.editUserProfile(inputData)
            .then((response) => {
                this.props.closeModal();
                this.props.fetchData();
            })
    }
    editUserHandler = () => {
        this.state.file ? this.uploadPicture() : this.editUserProfile()
    }
    render() {
        return (
            <div className="modal-body">
                <div className="container-fluid">
                    <div className="row">
                        <h3 className="col-md-4">Update Profile</h3>
                    </div>
                    <div className="row">
                        <div className="col-md-3 ">
                            <div className="card mt-3 profile-image-upload-border">
                                <img className="card-img-top" src={this.state.currentImg} alt="Card cap" />
                                <label className="image-file-upload">
                                    <input type="file" onChange={this.changeImgInput} />
                                    UPLOAD PHOTO
                                </label>
                            </div>
                        </div>
                        <div className="col-9 mt-10">
                            <label htmlFor="inputName">Name</label>
                            <input type="text" value={this.state.nameInputValue} onChange={this.changeNameInput} id="#inputName" className="form-control" />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12">
                            <label htmlFor="inputDescription">User Description</label>
                            <input type="text" onChange={this.changeDescInput} value={this.state.descInputValue} id="#inputDescription" className="form-control" />
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-4 ml-auto" >
                            <button type="button" onClick={this.editUserHandler} className="btn btn-primary col-5 mr-1 p-1">UPDATE</button>
                            <button type="button" onClick={this.props.closeModal} className="btn btn-primary col-5 p-1">CLOSE</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export { EditProfileModal }