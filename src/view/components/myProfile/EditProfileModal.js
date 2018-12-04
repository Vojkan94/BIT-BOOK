import React, { Component } from 'react';
import { apiService } from '../../../services/apiService';

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


    updateProfile = () => {
        console.log(this.state.file);

        var formData = new FormData();
        formData.append('file', this.state.file);

        // const inputData = {
        //     "userId": this.props.user.id,
        //     "name": this.state.nameInputValue,
        //     "aboutShort": this.state.descInputValue,
        //     "about": this.state.descInputValue,
        //     "avatarUrl": formData,
        //     "email": this.props.user.email
        // }
        // console.log(inputData);
        // console.log(this.state.file);
        // const data = {
        //     "file": this.state.file
        // }
        apiService.upload(formData)
            .then((response) => {
                console.log(response.json());
            })
        // console.log(data);
        // apiService.put(inputData)
        //     .then((response) => {
        //         console.log(response);
        //     })
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
                        <div className="col-4 ml-auto" >
                            <button type="button" onClick={this.updateProfile} class="btn btn-primary col-5 mr-1 p-1">UPDATE</button>
                            <button type="button" onClick={this.props.closeModal} class="btn btn-primary col-5 p-1">CLOSE</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export { EditProfileModal }