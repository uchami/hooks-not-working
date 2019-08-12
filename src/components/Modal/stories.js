import React from 'react';
import { storiesOf } from '@storybook/react';
import {action} from '@storybook/addon-actions';

import Modal, {ModalHeader, ModalFooter, ModalBody} from './Modal';

export const actions = {
      toggle: action('toggle'),
};

storiesOf('Modal', module)
  .add('withHeaderAndFooterExpanded', () => 
      <Modal isOpen={true} toggle={()=>actions.toggle()}>
      <ModalHeader toggle={()=>actions.toggle()}>
            Header
      </ModalHeader>
      <ModalBody>
            Body 
      </ModalBody>
      <ModalFooter>
            Footer
      </ModalFooter>
      </Modal>
  )
  .add('withHeaderAndFooterFullscreen', () => 
      <Modal isOpen={true} fullscreen toggle={()=>actions.toggle()}>
      <ModalHeader toggle={()=>actions.toggle()}>
            Header
      </ModalHeader>
      <ModalBody>
            Body 
      </ModalBody>
      <ModalFooter>
            Footer
      </ModalFooter>
      </Modal>
  )
  .add('onlyBody', () => 
      <Modal isOpen={true} toggle={()=>actions.toggle()}>
      <ModalBody>
            Body 
      </ModalBody>
      </Modal>
  )
  .add('notExpanded', () => 
  <Modal isOpen={false} toggle={()=>actions.toggle()}>
  <ModalBody>
        Body 
  </ModalBody>
  </Modal>)
  ;