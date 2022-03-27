import styled from "styled-components";

const StyledVideoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    flex-grow: 1;
    flex-basis: 25%;
    color: #fff;
   
    max-height:  ${ ( { oneRow } ) => oneRow ? '70vh' : '40vh'};
    
    & > h1{
        
        font-size: 1vw;
    }
`
export default StyledVideoWrapper