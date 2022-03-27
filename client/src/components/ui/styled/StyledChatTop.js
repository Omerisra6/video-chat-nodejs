const { default: styled } = require("styled-components");

const StyledChatTop = styled.div`
    display: flex;
    color: #ffff;
    justify-content: center;
    position: relative;    
    padding: 2vh 1vw;

    & > h1 {
        font-size: 5vh;
        position: absolute;
        bottom: 1vh;
    }

    & > div{
        
        margin-left: auto
    }

`
export default StyledChatTop
