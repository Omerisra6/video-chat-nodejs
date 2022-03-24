import Chat from "./components/Chat";
import StartChat from "./components/StartChat";
import { useAppSettings } from "./context/appSettings";
import { VideoSettingsProvider } from "./context/videoSettings";

function App() {

  const { user , room } = useAppSettings()
  return (
    <>
      { user && room 
        ? 
        <VideoSettingsProvider>
            <Chat/> 
        </VideoSettingsProvider>
        :
        <StartChat/>
      }
    </>
    
      
    
  );
}

export default App;
