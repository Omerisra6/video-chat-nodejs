let rooms = {}

exports.socketConnection = ( id ) => { 

    console.log( id + ' connected' )
}

exports.socketJoinRoom   = ( data, socket ) => {

    const { io } = require( './index.js' )

    const { roomId, username } = data
    const id = socket.id
    if( ! rooms[ roomId ] ){

        io.to( id ).emit( 'room-not-found' )
        return
    }

    addUserToRoom( roomId, id, username )
    
    socket.join( roomId )

    const roomName = rooms[ roomId ][ 'roomName' ]
    io.to( roomId ).emit( 'joined-room', { username, id, room:{ roomName, roomId } } )
    io.to( roomId ).emit( 'chat-members', rooms[ roomId ][ 'users' ] )
   
}

exports.socketCreateRoom = ( data, socket ) => {

    const { io }   = require( './index.js' )
    const { v4 } = require( 'uuid' );

    const { roomName, username } = data
    const id = socket.id
    const roomId = v4()

    if( rooms[ roomId ] ){

        io.to( id ).emit( 'room-exists' )
        return
    }

    rooms[ roomId ] = { roomName, users : [] }

    addUserToRoom( roomId, id, username )

    socket.join( roomId )

    io.to( roomId ).emit( 'joined-room', { username, id, room:{ roomName, roomId } } )
    io.to( roomId ).emit( 'chat-members', rooms[ roomId ][ 'users' ] )
}

exports.socketLeaveRoom  = ( socket  ) => {

    const { io } = require( './index.js')

    const roomId = removeUserFromRoom( socket.id )

    if ( ! roomId) {
        return
    }

    io.to( roomId ).emit( 'left-room', socket.id )
    io.to( roomId ).emit( 'chat-members', rooms[ roomId ][ 'users' ] )    
}

exports.socketAudio      = ( socket ) => {

    const { io } = require( './index.js' )
    
    const id  = socket.id

    io.to( id ).emit( 'audio' );
}

exports.socketVideo      = ( socket ) => {

    const { io } = require( './index.js' )
    
    const id  = socket.id

    io.to( id ).emit( 'video' );
}

const addUserToRoom = ( roomId, id, username ) => {
    
    const user = {}
    user[ id ] = username

    rooms[ roomId ][ 'users' ].push( user )

    return username
}

const removeUserFromRoom = ( id ) => {

    const roomIds =  Object.keys( rooms )
    
    let roomId = null
    roomIds.forEach( id => {
        
        //Removes user from room
        rooms[ id ][ 'users' ] = rooms[ id ][ 'users' ].filter(  user => {

            if ( Object.keys( user )[0] !== id.toString() ) {
                return true
            }

            roomId = id
            return false
        })
        
    });

    //Deletes empty rooms if exists
    rooms = Object.fromEntries( Object.entries( rooms ).filter( ( [ _, v ] ) => ! v[ 'users' ] ) );

    return roomId
}
