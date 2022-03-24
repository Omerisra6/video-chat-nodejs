import  { useEffect } from 'react';
import { useAppSettings } from '../context/appSettings';
import { useSocket } from '../context/socket';

export default function useOnRoomEvents() {

    const socket = useSocket()
    const { setUser, setRoom } = useAppSettings()

    useEffect( ( ) => {

        const callback = ( data ) => {

            setUser( data[ 'username' ] )
            setRoom( data[ 'room' ] )
        }
        socket.on( 'joined-room', ( data ) => {

            callback( data )
        })

        socket.off( 'joined-room', callback )
      
    }, [])
   
    
}
