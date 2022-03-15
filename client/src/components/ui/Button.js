import React from 'react'
import StyledButton from './styled/StyledButton'

export default function Button( { size, color, onClick, type, circle, children } ) {
    
  return (
    <StyledButton size={size} color={color} circle={circle} type={type ? type : 'button'} onClick={onClick}> {children} </StyledButton>
  )
}
