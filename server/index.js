const express = require( 'express' )
const { Socket } = require('socket.io')
const app = express()
const server = require( 'http' ).Server( app )
const io = require( 'socket.io' )( server )

let rooms = {}



server.listen( 3000 )