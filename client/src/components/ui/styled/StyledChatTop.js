const { default: styled } = require("styled-components");

const StyledChatTop = styled.div`
    display: flex;
    height: 6vh;
    color: #ffff;
    justify-content: center;
    position: relative;    
    padding: 0.5vh 0.5vw;

    & > h1 {

        position: absolute;
    }

    & > div{
        
        margin-left: auto
    }

`
export default StyledChatTop
