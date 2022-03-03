import styled from 'styled-components'
import PropTypes from 'prop-types'


const sizesMap ={ 
    sm: {
        padding: '--padding-sm',
        fontSize: '--font-size-sm',
        width: '--width-sm',
        height: '--width-sm',
        minWidth: '--min-width-sm'
    },
    md: {
        padding: '--padding-md',
        fontSize: '--font-size-md',
        width: '--width-md',
        height: '--height-md',
        minWidth: '--min-width-md'
    },
    lg: {
        padding: '--padding-lg',
        fontSize: '--font-size-lg',
        width: '--width-lg',
        height: '--height-lg',
        minWidth: '--min-width-lg'
    },
}

const colorsMap ={
    dark: {
        background: '--color-dark',
        border: '--color-dark',
        text: '--color-white',
        backgroundHover: '--color-light',
    },
    light : {
        background: '--color-light',
        border: '--color-light',
        text: '--color-dark',
        backgroundHover: '--color-dark',
    },
    white: {
        background: '--color-white',
        border: '--color-white',
        text: '--color-dark',
        backgroundHover: '--color-dark',
    }
}

const StyledButton = styled.button`
    --color-dark: #000;
    --color-light: #f5f4f5;
    --color-white: #fff;

    --font-size-sm: 0.4vw;
    --padding-sm: 0.5vw;
    --width-sm: 3vw;
    --min-width-md: 10px;

    --font-size-md: 0.5vw;
    --padding-md: 0.5vh 0.5vw;
    --width-md: 7vw;
    --height-md: 5vh;
    --min-width-md: 67px;

    --font-size-lg: 1.2vw;
    --padding-lg: 1vw;
    --width-lg: 15vw;
    --height-lg: 10vh;
    --min-width-lg: 120px;



    --padding: var( ${ ( { size } ) => sizesMap[ size ].padding } );
    --color: var( ${ ( { color } ) => colorsMap[ color ].text } );
    --background-color: var( ${ ( { color } ) => colorsMap[ color ].background } );
    --border-color: var( ${ ( { color } ) => colorsMap[ color ].border } );
    --width: var( ${ ( { size } ) => sizesMap[ size ].width } );
    --
    --height: var( ${ ( { size } ) => sizesMap[ size ].height } );

    padding: var( --padding );
    color: var( --color );
    background-color: var( --background-color );
    width: var( --width );
    height: var( --height );
    border: none;
    border-radius: 6px;
    cursor: pointer;
`
StyledButton.defaultProps = {
    color: 'light',
    size: 'md',
};

StyledButton.propTypes ={
    size: PropTypes.oneOf([
        'sm',
        'md',
        'lg',
    ]),

    color: PropTypes.oneOf([
        'light',
        'dark',
    ])
}

export default StyledButton
