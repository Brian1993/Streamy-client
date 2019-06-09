import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Modal = props => {
  const {
    title,
    content,
    actions,
    onDissmiss
  } = props
  const show = {
    display: 'block',
    backgroundColor: 'rgba(0, 0, 0, .7)'
  }
  const modal = (
    <div className='modal' style={show} onClick={onDissmiss}>
      <div className='modal-dialog ' role='document'>
        <div className='modal-content' onClick={(e) => e.stopPropagation()}>
          <div className='modal-header'>
            <h5 className='modal-title'>{title}</h5>
            <button type='button' className='close'>
              <span>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
            <p>{content}</p>
          </div>
          <div className='modal-footer'>
            {actions}
          </div>
        </div>
      </div>
    </div>
  )
  return ReactDOM.createPortal(
    modal,
    document.querySelector('#modal')
  )
}

Modal.prototype = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onDissmiss: PropTypes.func.isRequired
}

export default Modal
