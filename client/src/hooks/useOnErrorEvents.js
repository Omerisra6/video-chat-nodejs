import  { useEffect } from 'react';
import { useSocket } from '../context/socket';

export default function useOnErrorEvents( ) {

    const socket = useSocket()

    useEffect( ( ) => {

        const roomNotFoundCallback = ( ) => {

            alert( 'room does not exists')
        }

        const roomExistsCallback = () => {

            alert( 'room name allready in use')
        }

        socket.on( 'room-not-found', () => {

            roomNotFoundCallback()
        })      
      
        socket.on( 'room-exists', () => {

            roomExistsCallback()
        })

        return () => {

            socket.off( 'room-not-found', roomNotFoundCallback )
            socket.off( 'room-exists', roomExistsCallback )
        }
        
    }, [])
   
    
}
