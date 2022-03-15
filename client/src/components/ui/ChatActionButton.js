import React, { useRef } from 'react'
import Button from './Button'

export default function ChatActionButton( { iconDefault, iconToggle, onClickDefault, onClickToggle } ) {

    const iconRef = useRef( null )

    //Toggles between icon classes 
    const onClick = () => {

        //Handles icon with no toggle
        if ( ! iconToggle ) {
            onClickDefault()
            return
        }

        const icon = iconRef.current.innerHTML
     

        if ( icon === iconDefault  ) {
            icon.innerHTML = iconToggle
            onClickToggle()    
            return
        }

        icon = iconDefault
        onClickDefault()
    }

    return (
        <Button onClick={ onClick } circle={ true } size='sm'>
            <span className='material-icons' ref={iconRef}> { iconDefault} </span> 
        </Button>
    )
}
