import React, { Fragment } from 'react';
import $ from 'jquery/dist/jquery.min.js';

import NewTextModal from './NewTextModal'
import NewImageModal from './NewImageModal'
import NewVideoModal from './NewVideoModal'

import './NewPostButton.css'
import 'font-awesome/css/font-awesome.min.css';

$(function () {
    $(".fab,.backdrop").click(function () {
        if ($(".backdrop").is(":visible")) {
            $(".backdrop").fadeOut(125);
            $(".fab.child")
                .stop()
                .animate({
                    bottom: $("#masterfab").css("bottom"),
                    opacity: 0
                }, 125, function () {
                    $(this).hide();
                });
        } else {
            $(".backdrop").fadeIn(125);
            $(".fab.child").each(function () {
                $(this)
                    .stop()
                    .show()
                    .animate({
                        bottom: (parseInt($("#masterfab").css("bottom")) + parseInt($("#masterfab").outerHeight()) + 70 * $(this).data("subitem") - $(".fab.child").outerHeight()) + "px",
                        opacity: 1
                    }, 125);
            });
        }
    });
});


const NewPostButton = (props) => {
    return (
        <Fragment>
            <div className="backdrop"></div>
            <div className="fab child red" data-subitem="1" data-toggle="modal" data-target="#videoModal"><span className="buttonText"><i class="fa fa-file-video-o"></i></span></div>
            <div className="fab child green" data-subitem="2" data-toggle="modal" data-target="#imageModal"><span className="buttonText"><i class="fa fa-file-image-o "></i></span></div>
            <div className="fab child blue" data-subitem="3" data-toggle="modal" data-target="#textModal"><span className="buttonText"><i class="fa fa-file-text"></i></span></div>
            <div className="fab orange" id="masterfab"><span>+</span></div>


            <NewTextModal />
            <NewImageModal />
            <NewVideoModal />

        </Fragment >
    )
}




export { NewPostButton }