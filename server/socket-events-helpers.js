
let rooms = {}


exports.isRoomExists = ( id ) => {

    if( rooms[ id ] ){

        return true
    }

    return false
}

exports.getRoom = ( id ) => {

    return rooms[ id ]
}

exports.createNewRoom = ( roomName ) => {

    const { v4 }   = require( 'uuid' );

    const roomId = v4()

    rooms[ roomId ] = { roomName, users : [] }

    return roomId

}

exports.addUserToRoom = ( roomId, id, username ) => {
    
    const user = {}
    user[ id ] = username

    rooms[ roomId ][ 'users' ].push( user )

    return username
}

exports.removeUserFromRoom = ( id ) => {
    
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

}