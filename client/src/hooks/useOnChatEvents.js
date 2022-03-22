import  { useEffect } from 'react';
import { useSocket } from '../context/socket';

export default function useOnChatEvents( setMembers ) {

    const socket = useSocket()

    useEffect( ( ) => {

        socket.on( 'chat-members', ( members ) => {
            
            setMembers( members )
        })

        
    }, [])
   
    
}
