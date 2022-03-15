import React, { useEffect, useRef } from 'react'
import { useSocket } from '../../context/socket';
import StyledVideoContainer from './styled/StyledVideoContainer';
import StyledVideoWrapper from './styled/StyledVideoWrapper';

export default function Video( { stream, name } ) {

    const videoRef = useRef()
    const socketId = useSocket().id

    useEffect( () => {

        videoRef.current.srcObject = stream[ 'stream' ]
        videoRef.current.play()

        if ( socketId === stream[ 'id' ] ) {

            videoRef.current.muted = true
        }
    }, [ stream ]);

    return (
        <StyledVideoWrapper>
            <StyledVideoContainer>

                <video ref={ videoRef }></video>

            </StyledVideoContainer> 

            <h1> { name } </h1>
        </StyledVideoWrapper>            
        
    )
}