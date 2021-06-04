import React from 'react'
import ReactDOM from 'react-dom'
import './styles/Modal.css'

function Modal({isOpen, children}){
  if (!isOpen) {
    return null
  }
  return(
    ReactDOM.createPortal(
      <div className="Modal">
        <div className="Modal__container">
          <button className="Modal__close-button">x</button>
          {children}
        </div>
      </div>,
      document.getElementById('modal')
    )
  )
}

export default Modal