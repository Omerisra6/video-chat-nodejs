import  { useEffect } from 'react';
import { useSocket } from '../context/socket';

export default function useOnRoomEvents( setUser, setRoom ) {

    const socket = useSocket()

    useEffect( ( ) => {

        socket.on( 'joined-room', ( data ) => {

            setUser( data[ 'username' ] )
            setRoom( data[ 'room' ] )
        })
      
    }, [])
   
    
}
