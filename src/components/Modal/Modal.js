import React from 'react';
import {MDBModal, MDBModalHeader, MDBModalFooter, MDBModalBody} from 'mdbreact';
import './ModalStyles.scss';

export const ModalHeader = (props) => <MDBModalHeader {...props}></MDBModalHeader>
export const ModalFooter = (props) => <MDBModalFooter {...props}></MDBModalFooter>
export const ModalBody = (props) => <MDBModalBody {...props}></MDBModalBody>

export const Modal = (props) =>  <MDBModal 
        {...props}
        className={props.className + ' botbit-modal ' + (props.fullscreen ? 'modal-full' : '')}>
        {props.children}
    </MDBModal>
export default Modal;