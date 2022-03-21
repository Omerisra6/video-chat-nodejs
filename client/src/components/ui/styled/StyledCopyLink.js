import styled from "styled-components";

const StyledCopyLink = styled.div`

    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5vh 1vw;
    border-radius: 8px;
    background-color: #f5f4f5;
    color: #000;
    width: 150px;

    & > span {

        font-size: 20px;
    }

    &:hover{

        background-color: #FFEDE1;
    }
`

export default StyledCopyLink