import  { useEffect } from 'react';
import { useSocket } from '../context/socket';

export default function useOnRoomEvents( setUser ) {

    const socket = useSocket()

    useEffect( ( ) => {

        socket.on( 'joined-room', ( user ) => {

            setUser( user[ 'username' ] )
        })
      
    }, [])
   
    
}
