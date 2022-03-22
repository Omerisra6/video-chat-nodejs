
exports.socketConnection = ( id ) => { 

    console.log( id + ' connected' )
}

exports.socketJoinRoom   = ( data, socket ) => {

    const { io } = require( './index.js' )
    const { isRoomExists, addUserToRoom, getRoom } = require( './socket-events-helpers.js')

    const { roomId, username } = data
    const id = socket.id
  
    if( ! isRoomExists( roomId ) ){

        io.to( id ).emit( 'room-not-found' )
        return
    }

    addUserToRoom( roomId, id, username )
    
    socket.join( roomId )

    const room = getRoom( roomId )
    io.to( roomId ).emit( 'joined-room', { username, id, room:{ name: room[ 'roomName' ], id: roomId } } )
    io.to( roomId ).emit( 'chat-members', room[ 'users' ] )
   
}

exports.socketCreateRoom = ( data, socket ) => {

    const { io }   = require( './index.js' )
    const { createNewRoom, addUserToRoom, getRoom } = require( './socket-events-helpers.js')

    const { roomName, username } = data
    const id = socket.id

    const roomId = createNewRoom( roomName )
    addUserToRoom( roomId, id, username )
    socket.join( roomId )

    const room = getRoom( roomId )
    io.to( roomId ).emit( 'joined-room', { username, id, room:{ name: roomName, id: roomId } } )
    io.to( roomId ).emit( 'chat-members', room[ 'users' ] )
}

exports.socketLeaveRoom  = ( socket  ) => {

    const { io } = require( './index.js')
    const { removeUserFromRoom, isRoomExists, getRoom } = require( './socket-events-helpers.js')

    const roomId = removeUserFromRoom( socket.id )

    if ( ! isRoomExists( roomId )) {

        return
    }


    const room = getRoom( roomId )
    io.to( roomId ).emit( 'left-room', socket.id )
    io.to( roomId ).emit( 'chat-members', room[ 'users' ] )    
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