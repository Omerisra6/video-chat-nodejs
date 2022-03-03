import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`

    width:  ${( { width } ) => width};
    display : ${( { display } ) => display  ? 'flex' : 'block'};
    flex-direction: ${( { display } ) => display === 'flex-column' ? 'column' : 'row'};
    gap: ${( { gap } ) => gap};
    background-color: ${( { background } ) => background};
    ${ ( { centered } ) => centered ? 'justify-content: center; align-items: center;' : ''}

`




export default function Container( { display, className, width, gap, background, centered, children } ) {
    return (
        <StyledContainer display={display} className={className} width={width} gap={gap} background={background} centered={centered} >
            {children}
        </StyledContainer>
    )
}
