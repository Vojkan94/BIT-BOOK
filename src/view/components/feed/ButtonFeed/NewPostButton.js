import React, { Component } from 'react';
import buttonAnimation from './../../../../shared/buttonAnimation'
import { ModalFeed } from './ModalFeed';

import './NewPostButton.css'
import 'font-awesome/css/font-awesome.min.css';


class NewPostButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            modalType: ""
        }
    }

    openModal = (type) => {
        this.setState({
            open: true,
            modalType: type
        })
        console.log(type);
    }
    closeModal = () => {
        this.setState({
            open: false
        })
    }
    componentDidMount() {
        buttonAnimation();
    }

    render() {

        return (
            <>
                <div className="backdrop"></div>
                <div className="fab child red" data-subitem="1" onClick={() => { this.openModal("video") }} >
                    <span className="buttonText"><i className="fa fa-file-video-o"></i></span></div>
                <div className="fab child green" data-subitem="2" onClick={() => { this.openModal("image") }} ><span className="buttonText"><i className="fa fa-file-image-o "></i></span></div>
                <div className="fab child blue" data-subitem="3" onClick={() => { this.openModal("text") }} ><span className="buttonText"><i className="fa fa-file-text"></i></span></div>
                <div className="fab blue" id="masterfab"><span>+</span></div>

                <ModalFeed open={this.state.open} closeModal={this.closeModal} type={this.state.modalType} />
            </ >
        )
    }
}




export { NewPostButton }