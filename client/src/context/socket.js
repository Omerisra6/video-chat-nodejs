import React, { useContext } from "react";
import { io } from "socket.io-client";

const socket = io( process.env.REACT_APP_SOCKET_URL || window.location.host );
export const SocketContext = React.createContext( null );

export const useSocket = () => {
    
    return useContext( SocketContext )  
}

export const SocketProvider = ( { children } ) => {

    return <SocketContext.Provider value={ socket } children={ children }/>
}
