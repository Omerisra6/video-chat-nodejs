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
    io.to( roomId ).emit( 'joined-room', { username, id, room:{ name: roomName, id: roomId } } )
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

    io.to( roomId ).emit( 'joined-room', { username, id, room:{ name: roomName, id: roomId } } )
    io.to( roomId ).emit( 'chat-members', rooms[ roomId ][ 'users' ] )

}

exports.socketLeaveRoom  = ( socket  ) => {
    const { io } = require( './index.js')

    const roomId = removeUserFromRoom( socket.id )

    if ( ! rooms[ roomId ]) {
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
    
    let roomId 
    roomIds.every( ( room, index ) => {
        
        //Removes user from room
        rooms[ room ][ 'users' ] = rooms[ room ][ 'users' ].filter(  user => {

            if ( Object.keys( user )[0] !== id.toString() ) {
                return true
            }

            roomId = room
            return false
        })

        //Deletes room if exists
        if ( roomId ) {

            deleteRoomIfEmpty( index )
            return false
        }

        return true
        
    });

  
    return roomId
}

const deleteRoomIfEmpty = ( index ) => {

    const roomsArray = Object.entries(rooms)

    if ( roomsArray[ index ][ 1 ][ 'users' ].length === 0 ) {
        roomsArray.splice( index, 1 )
        rooms = Object.fromEntries( roomsArray )
    }

    console.log( rooms )
 

}
