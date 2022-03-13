const addStream = ( newStream, id, setStreams ) => {

    setStreams( streams => { 

        if ( ! streamExists( streams , newStream ) ) {

            return [ ...streams, { stream: newStream, id } ]    
        }
        
        return streams
    })

}

//Removes stream 
const removeStream = ( id, setStreams ) =>  {

    setStreams( ( streams ) => streams.filter( stream => stream[ 'id' ] !== id )  );

}

//Call new user and add his stream
const connectToNewUser = ( id, stream, peer, setStreams ) => {

    const call = peer.call( id, stream )
    call.on( 'stream', ( userVideoStream ) => {

       addStream(  userVideoStream, id, setStreams  )
        
    })
}

//Checks if the given stream exists
const streamExists = ( streams, newStream ) => {

    let exists = false
    streams.forEach( stream => {

        if( stream[ 'stream' ].id === newStream.id){
            exists = true
        }
    })

    return exists
}


export {
    connectToNewUser,
    addStream,
    streamExists,
    removeStream,
}