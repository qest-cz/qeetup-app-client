import React from 'react'

import { Handle, HandleContainer, StyledModal } from './styled'

const Modal: React.FC = ({ children }) => {
  return (
    <>
      <StyledModal>{children}</StyledModal>
    </>
  )
}

export const ModalHeader = () => {
  return (
    <HandleContainer>
      <Handle />
    </HandleContainer>
  )
}

export default Modal
