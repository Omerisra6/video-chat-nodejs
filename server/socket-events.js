let rooms = {}

exports.socketConnection = ( id ) => { 
    console.log( id + ' connected' )
}

exports.socketJoinRoom = ( data, socket ) => {

    const { io } = require( './index.js' )

    const { roomName, username } = data
    const id = socket.id
    if( ! rooms[ roomName ] ){

        io.to( id ).emit( 'room-not-found' )
        return
    }

    addUserToRoom( roomName, id, username )
    
    socket.join( roomName )

    io.to( roomName ).emit( 'joined-room', { username, id } )
    io.to( roomName ).emit( 'chat-members', rooms[ roomName ] )
   
}

exports.socketCreateRoom = ( data, socket ) => {

    const { io } = require( './index.js' )

    const { roomName, username } = data
    const id = socket.id

    if( rooms[ roomName ] ){

        io.to( id ).emit( 'room-exists' )
        return
    }

    rooms[ roomName ] = []

    addUserToRoom( roomName, id, username )

    socket.join( roomName )

    io.to( roomName ).emit( 'joined-room', { username, id } )
    io.to( roomName ).emit( 'chat-members', rooms[ roomName ] )
}

exports.socketLeaveRoom = ( socket  ) => {

    const { io } = require( './index.js')

    const roomName = removeUserFromRoom( socket.id )

    if ( ! roomName) {
        return
    }

    io.to( roomName ).emit( 'chat-members', rooms[ roomName ] )    
    io.to( roomName ).emit( 'left-room', socket.id)
}

const addUserToRoom = ( roomName, id, username ) => {
    
    const user = {}
    user[ id ] = username

    rooms[ roomName ].push( user )

    return username
}

const removeUserFromRoom = ( id ) => {

    const roomNames =  Object.keys( rooms )
    
    let roomName = null
    roomNames.forEach( room => {
        
        //Removes user from room
        rooms[ room ] = rooms[ room ].filter(  user => {

            if ( Object.keys( user )[0] !== id.toString() ) {
                return true
            }

            roomName = room
            return false
        })
        
    });

    //Deletes empty rooms if exists
    rooms = Object.fromEntries(Object.entries( rooms ).filter(([_, v]) => v != null));

    return roomName
}
