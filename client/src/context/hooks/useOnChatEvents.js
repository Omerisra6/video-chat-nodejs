import  { useEffect } from 'react';
import { useSocket } from '../socket';

export default function useOnChatEvents( setMembers , setError ) {

    const socket = useSocket()

    useEffect( ( ) => {

        socket.on( 'chat-members', ( members ) => {
            
            setMembers( members )
        })

        
    }, [])
   
    
}
