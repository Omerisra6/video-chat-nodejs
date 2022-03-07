import  { useEffect } from 'react';
import { useSocket } from '../socket';

export default function useOnErrorEvents( ) {

    const socket = useSocket()

    useEffect( ( ) => {
        socket.on( 'room-exists', () => {

            alert( 'room exists')
        })
      
        socket.on( 'room-taken', () => {
            
            alert( 'room does not exists')
        })
        
    }, [])
   
    
}
