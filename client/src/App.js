import { useState } from "react";
import Chat from "./components/Chat";
import StartChat from "./components/StartChat";
import {SocketContext, socket} from './context/socket';

function App() {

  const [ user, setUser ] = useState( '' )

  return (
    <SocketContext.Provider value={socket}>
      { user ? <Chat user={user} setUser={setUser}/> :  <StartChat setUser={setUser}/> }
    </SocketContext.Provider>
  );
}

export default App;
