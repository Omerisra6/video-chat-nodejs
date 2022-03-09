import  { useEffect } from 'react';
import { useSocket } from '../context/socket';

export default function useOnErrorEvents( ) {

    const socket = useSocket()

    useEffect( ( ) => {
        socket.on( 'room-not-found', () => {

            alert( 'room does not exists')
        })
      
        socket.on( 'room-taken', () => {
            
            alert( 'room name allready in use')
        })
        
    }, [])
   
    
}
