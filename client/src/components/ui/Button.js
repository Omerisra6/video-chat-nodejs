import React from 'react'
import StyledButton from './styled/StyledButton'

export default function Button( { size, color, onClick, type, children } ) {
    
  return (
    <StyledButton size={size} color={color} type={type ? type : 'button'} onClick={onClick}> {children} </StyledButton>
  )
}
