import React, { useRef, useState } from 'react'
import Button from './Button'

export default function ChatActionButton( { iconDefault, iconToggle, onClickDefault, onClickToggle} ) {

    const iconRef = useRef( null )
    const [ color, setColor ] = useState( 'light' )

    const onClick = () => {

        //Handles icon with no toggle
        if ( ! iconToggle ) {
            onClickDefault()
            return
        }

        const icon = iconRef.current
     

        if ( icon.innerHTML == iconDefault  ) {

            icon.innerHTML = iconToggle
            setColor( 'theme' )
            onClickDefault()
            return
        }

        icon.innerHTML = iconDefault
        setColor( 'light' )
        onClickToggle()
    }

    return (
        <Button onClick={ onClick } circle={ true } color={color} size='sm' >
            <span className='material-icons' ref={iconRef}>{iconDefault}</span> 
        </Button>
    )
}
