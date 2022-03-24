import  { useEffect, useState } from 'react';
import { useSocket } from '../context/socket';

export default function useOnChatEvents() {

    const socket = useSocket()
    const [ members, setMembers ] = useState( [] );

    useEffect( ( ) => {

        const callback = ( members ) => {
            
            setMembers( members )
        };

        socket.on( 'chat-members', callback )

        return () => {
            socket.off( 'chat-members', callback )
        }

        
    }, [] )
   
    return {
        members,
    };
    
}
