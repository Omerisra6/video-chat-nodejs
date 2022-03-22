import styled, { keyframes } from "styled-components";

const StyledLoaderAnimation = keyframes`

    0% {
        top: 16px;
        height: 128px;
    }

    50%, 100% {
        top: 48px;
        height: 64px;
    }
`
const StyledLoader = styled.div`
   
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    gap: 8px;
    width: 200px;
    height: 100px;
    z-index: 100;

    & > div {
        width: 32px;
        background: #fff;
        animation: ${StyledLoaderAnimation} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    }

    & > div:nth-child(1) {
        animation-delay: -0.24s;
    }

    & > div:nth-child(2) {
        animation-delay: -0.12s;
    }

    & > div:nth-child(3) {
        animation-delay: 0;
    }
   
    animation-name: ${StyledLoaderAnimation};

`

export default StyledLoader