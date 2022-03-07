import React, { useContext } from "react";
import { io } from "socket.io-client";

export const socket = io( process.env.REACT_APP_SOCKET_URL );
export const SocketContext = React.createContext( null );

export const useSocket = () => {
    
    return useContext( SocketContext )  
}
