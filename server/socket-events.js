
exports.socketConnection  = ( id ) => { 

    console.log( id + ' connected' )
}

exports.socketJoinRoom    = ( data, socket ) => {

    const { io } = require( './index.js' )
    const { addUserToRoom, getRoom } = require( './socket-events-helpers.js')

    const { roomId, username } = data
    const id = socket.id
    const room = getRoom( roomId )

    if( ! room ){

        io.to( id ).emit( 'room-not-found' )
        return
    }

    if ( room[ 'users' ].length === 8 ) {
        console.log( room[ 'users' ] )
        io.to( id ).emit( 'room-full' )
        return
    }


    addUserToRoom( roomId, id, username )
    
    socket.join( roomId )

    io.to( roomId ).emit( 'joined-room', { username, id, room:{ name: room[ 'roomName' ], id: roomId } } )
    io.to( roomId ).emit( 'chat-members', room[ 'users' ] )
   
}

exports.socketCreateRoom  = ( data, socket ) => {

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

exports.socketLeaveRoom   = ( socket  ) => {

    const { io } = require( './index.js')
    const { removeUserFromRoom, getRoom } = require( './socket-events-helpers.js')

    const roomId = removeUserFromRoom( socket.id )
    const room = getRoom( roomId )

    if ( ! room ) {

        return
    }


    io.to( roomId ).emit( 'left-room', socket.id )
    io.to( roomId ).emit( 'chat-members', room[ 'users' ] )    
}

exports.socketStreamReady = ( socket, roomId ) => {

    const { io } = require( './index.js')
    const { getRoom } = require( './socket-events-helpers.js')

    if ( ! getRoom( roomId ) ) {

        return
    }

    io.to( roomId ).emit( 'stream-ready', socket.id )
}