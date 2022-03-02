require('dotenv').config();
const express = require( 'express' )
const app = express()
const server = require( 'http' ).Server( app )
const io = require( 'socket.io' )( server )
const PORT = process.env.PORT || 8000;

app.listen( PORT, () => {

  console.log(`Server is listening on port ${PORT}`);
});

const { socketConnection,
        socketJoinRoom, 
        socketLeaveRoom, 
} = require( './socket-events.js' )

io.listen( server, {
	cors: {
		origin: '*',
		methods: [ 'GET', 'POST' ],
	},
});

io.on( 'connection', ( socket) => {

    socketConnection( socket.id )

    socket.on( 'join-room', ( data ) => {

        socketJoinRoom( data, socket.id )
    })

    socket.on( 'leave-room', () => {

        socketLeaveRoom( socket.id )
    })

    socket.on( 'disconnect', () => {

        socketLeaveRoom( socket.id )
    })  

})