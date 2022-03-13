import React, { useEffect, useRef } from 'react'
import StyledVideoContainer from './styled/StyledVideoContainer';
import StyledVideoWrapper from './styled/StyledVideoWrapper';

export default function Video( { stream, name } ) {

    const videoRef = useRef()

    useEffect( () => {

        videoRef.current.srcObject = stream[ 'stream' ]
        videoRef.current.play()
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