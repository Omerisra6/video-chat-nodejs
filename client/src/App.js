import { useState } from "react";
import Chat from "./components/Chat";
import StartChat from "./components/StartChat";
import {SocketContext, socket} from './context/socket';

function App() {

  const [ user, setUser ] = useState( '' )
  const [ room, setRoom ] = useState( '' )

  return (
    <SocketContext.Provider value={socket}>
      { user && room ? <Chat user={user} room={room} setUser={setUser} setRoom={setRoom}/> :  <StartChat setUser={setUser} setRoom={setRoom}/> }
    </SocketContext.Provider>
  );
}

export default App;
