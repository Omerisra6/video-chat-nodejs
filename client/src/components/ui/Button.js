import React from 'react'
import StyledButton from './styled/StyledButton'

export default function Button( { size, color, onClick, children } ) {
    
  return (
    <StyledButton size={size} color={color} onClick={onClick}> {children} </StyledButton>
  )
}
