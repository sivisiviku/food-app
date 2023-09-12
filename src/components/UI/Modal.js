import React from 'react'
import ReactDOM from 'react-dom'

function Backdrop(props) {
    return <div onClick={props.onClose} className='fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-50 z-10'></div>
}

function ModalOverlay(props) {
    return <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 
        bg-white w-1/2 p-4 rounded-xl'>
        <div>{ props.children }</div>
    </div>
}

const portalElement = document.getElementById('overlays')

function Modal(props) {
  return <>
    { ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement) }
    { ReactDOM.createPortal(<ModalOverlay>{ props.children }</ModalOverlay>, portalElement) }
  </>
}

export default Modal
