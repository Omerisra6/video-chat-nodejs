import styled from "styled-components"

const StyledText = styled.h1`
    font-size: ${ ( { size } ) => size ? size : '1vw'};
    color: ${ ( { color } ) => color ? color : '#000'};
`

export default StyledText