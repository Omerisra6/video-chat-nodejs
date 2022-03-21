import React, { useRef } from 'react'
import StyledCopyLink from './styled/StyledCopyLink'

export default function CopyLink( { roomId } ) {

    const iconRef = useRef( null )

    const onClick = () => {

        navigator.clipboard.writeText(  roomId  )

        iconRef.current.innerHTML = 'done'

        setTimeout( () => {

            iconRef.current.innerHTML = 'content_copy'
        }, 2000 )
    }

    return (
        <StyledCopyLink onClick={onClick}>
            <h5> Copy room PIN </h5>
            <span className="material-icons copy-icon" ref={iconRef}>content_copy</span>        
        </StyledCopyLink>
    )
}
