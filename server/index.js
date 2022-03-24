require('dotenv').config();
const express = require( 'express' )
const app = express()
const io = require( 'socket.io' )()
const PORT = process.env.PORT || 80;
const { ExpressPeerServer } = require('peer');

const server = require('http').createServer(app);

const peerServer = ExpressPeerServer(server, {debug: true,  allow_discovery: true,});

app.use('/peerjs', peerServer);
app.use( express.static( './public' ) );

server.listen( PORT , () => {
    console.log( 'Server litening to port ' + PORT )
});

const { socketConnection,
        socketJoinRoom, 
        socketCreateRoom,
        socketLeaveRoom, 
        socketStreamReady
} = require( './socket-events.js' )

io.listen( server, {
	cors: {
        origin: "*",
        methods: ["GET", "POST"],
        transports: ['websocket', 'polling'],
        credentials: true
	},
    allowEIO3: true
});

io.on( 'connection', ( socket ) => {

    socketConnection( socket.id )

    socket.on( 'join-room', ( data ) => {

        socketJoinRoom( data, socket )
    })

    socket.on( 'create-room', ( data ) => {

        socketCreateRoom( data, socket )
    })

    socket.on( 'leave-room', () => {

        socketLeaveRoom( socket )
    })

    socket.on( 'disconnect', () => {

        socketLeaveRoom( socket )
    })  

    socket.on( 'stream-ready', ( roomId ) => {

        socketStreamReady( socket,  roomId )
    })

})

exports.io = io