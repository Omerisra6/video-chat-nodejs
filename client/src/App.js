import { useState } from "react";
import Chat from "./components/Chat";
import StartChat from "./components/StartChat";

function App() {

  const [ user, setUser ] = useState( '' )

  return (
    <div className="App">
        { user ? <Chat user={user} setUser={setUser}/> :  <StartChat setUser={setUser}/> }
    </div>
  );
}

export default App;
