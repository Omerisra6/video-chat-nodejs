import React, { useEffect, useRef } from 'react'
export default function Video( { stream } ) {

    const videoRef = useRef()

    useEffect( () => {

        videoRef.current.srcObject = stream[ 'stream' ]
        videoRef.current.play()
    }, [ stream ]);

    return (
        <div>
           <video ref={ videoRef }></video>
        </div>
    )
}