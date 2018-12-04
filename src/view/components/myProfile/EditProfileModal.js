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
            <div class="" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Update profile</h5>

                        </div>
                        <div class="modal-body row">
                            <div className="col-4">
                                <img className="col-12 p-0 mt-2" src={this.state.currentImg} alt="Card cap" />
                                <label className="btn btn-primary col-12">
                                    <input type="file" onChange={this.changeImgInput} />
                                    UPLOAD PHOTO
                                </label>
                            </div>
                            <div className="col-8">
                                <label htmlFor="inputName">Name</label>
                                <input type="text" value={this.state.nameInputValue} onChange={this.changeNameInput} id="#inputName" className="form-control" />

                                <label for="exampleFormControlTextarea1" className="mt-4">User description</label>
                                <textarea class="form-control" onChange={this.changeDescInput} value={this.state.descInputValue} rows="6"></textarea>

                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" onClick={this.editUserHandler} className="btn btn-primary">UPDATE</button>
                            <button type="button" onClick={this.props.closeModal} className="btn btn-secondary">CLOSE</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export { EditProfileModal }