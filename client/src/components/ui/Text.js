import React from 'react'
import StyledText from './styled/StyledText'

export default function Text( { color, size, className, children } ) {
  return (
    <StyledText size={ size } color= { color } className={ className }> { children } </StyledText>
  )
}
