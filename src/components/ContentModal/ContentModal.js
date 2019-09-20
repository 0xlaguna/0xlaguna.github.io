import React from 'react'
import styled from 'styled-components'
import Modal from 'react-responsive-modal'

import staticBG from '../../assets/icons/serial.gif';

const Container = styled.div`
  padding: ${props => (props.padding ? '5vw' : 0)};
`

export const ContentModal = ({ open, toggleModal, children, padding }) => {
  return (
    <Modal
      open={open}
      // onEntered={openModal}
      // onExited={closeModal}
      onClose={toggleModal}
      closeIconSize={60}
      center
      styles={{
        modal: {
          maxWidth: 'unset',
          width: '100%',
          height: '100%',
          padding: 'unset',
          background: 'transparent',
          boxShadow: 'none'
        },
        overlay: {
          background: `url(${staticBG}) no-repeat center center`,
          backgroundSize: 'cover',
          overflow: 'auto'
        },
        closeButton: {
          background: 'transparent',
          outline: 'none',
          cursor: 'pointer',
          position: 'fixed',
          border: 'none'
        },
        closeIcon: {
          fill: 'red'
        }
      }}>
      <Container padding={padding}>{children}</Container>
    </Modal>
  )
}
