import React, { useEffect, useRef } from 'react'
import { useSocket } from '../../context/socket';
import StyledName from './styled/StyledName';
import StyledVideoContainer from './styled/StyledVideoContainer';
import StyledVideoWrapper from './styled/StyledVideoWrapper';

export default function Video( { stream, name, oneRow } ) {

    const videoRef = useRef()
    const socketId = useSocket().id
    const streamObj = stream[ 'stream' ]

    useEffect( () => {

        videoRef.current.srcObject = streamObj
        videoRef.current.play()

        if ( socketId === stream[ 'id' ] ) {

            videoRef.current.muted = true
        }

    }, [ stream, name ]);
    

    return (
        <StyledVideoWrapper oneRow={oneRow}>
            <StyledVideoContainer>
                
                <video ref={ videoRef }></video> 
              
                <StyledName> { name } </StyledName>

            </StyledVideoContainer>

        </StyledVideoWrapper> 
        
    )
}