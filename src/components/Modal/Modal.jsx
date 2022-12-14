import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';

import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.toogleModal('');
    }
  };

  onOverlayClick = e => {
    if (e.target === e.currentTarget) {
      this.props.toogleModal('');
    }
  };
  render() {
    const { imgId } = this.props;
    return createPortal(
      <div className={s.Overlay} onClick={this.onOverlayClick}>
        <div className={s.Modal}>
          <img src={imgId} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;

Modal.propTypes = {
  toogleModal: PropTypes.func.isRequired,
};
