import Container from "../Container"
import PropTypes from "prop-types"
import styled from "styled-components"

const sizesMap ={ 
    fit: '90%',
    sm: '12vw',
    md: '28vw',
    lg: '40vw',
}

const colorsMap = {
    light:{
        color: "#F6F8FC",
        border: "#F6F8FC",
        text: "#637883",
    },
    dark:{
        color: "#637883",
        border: "#1f2242",
        text: "#F6F8FC",

    }
}

const StyledSearchBox = styled( Container )`    

    width: ${ ( { size } ) => sizesMap[ size ]};
    color: ${ ( { color } ) => colorsMap[ color ].text};


    & > div{
        border: 1px solid ${ ( { color } ) => colorsMap[ color ].border};
        border-radius: 6px;
        width: 100%;
        background-color: ${ ( { color } ) => colorsMap[ color ].color};
        overflow: hidden;
    }

    & > div > input{
        padding: 1vh 1vw;
        width: 100%;
        border: none;
        background-color: ${ ( { color } ) => colorsMap[ color ].color};
        color: ${ ( { color } ) => colorsMap[ color ].text};
    }


    & > div > input:placeholder{
        font-size: 1vw;
        color: ${ ( { color } ) => colorsMap[ color ].text};
    }
`

StyledSearchBox.propTypes = {
    size: PropTypes.oneOf([
        'fit',
        'xs',
        'sm',
        'md',
        'lg',
    ]),

    color: PropTypes.oneOf([
        'dark',
        'light'
    ]),
}

StyledSearchBox.defaultProps = {
    size: 'sm',
    color: 'light'
};

export default StyledSearchBox