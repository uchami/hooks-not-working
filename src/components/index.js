// In this file we explicity export everything. This is just to be thorough
// and explicit. This thorough exporting method can seem like a lot, but it
// allows for simpler scaling when your library grows in size, and even adds
// different tech like TypeScript
// import 'mdbreact/dist/css/bootstrap.css';
// import 'mdbreact/dist/css/mdb.css';
import { Modal, ModalBody, ModalFooter, ModalHeader } from './Modal/Modal';
import {Test} from './Test/Test';
export { Modal, ModalBody, ModalFooter, ModalHeader, Test };

