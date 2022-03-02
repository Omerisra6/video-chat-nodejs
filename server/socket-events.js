let rooms = {}

exports.onConnection = ( id ) => { 
    console.log( id + 'connected' )
}

exports.socketJoinRoom = ( data, id ) => {

    const { io } = require( './index.js' )

    const { roomName, username } = data

    addUserToRoom( roomName, id, username )
    

    io.to( roomName ).emit( 'chat-members', ( rooms ) => {

        return rooms[ roomName ]
    })

    
}

exports.socketLeaveRoom = ( id  ) => {

   
    const { io } = require( './index.js')

    const roomName = removeUserFromRoom( id )

    if ( ! roomName) {
        return
    }

    io.to( roomName ).emit( 'chat-members', ( rooms ) => {

        return rooms[ roomName ]
    })    
}

const addUserToRoom = ( roomName, id, username ) => {

    const { rooms } = require( './index.js' )

    if( ! rooms[ roomName] ){

        rooms[ roomName ] = []
    }
    
    const user = {}
    user[ id ] = username

    rooms[ roomName ].push( user )
}

const removeUserFromRoom = ( id ) => {

    let { rooms } = require( './index.js')
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