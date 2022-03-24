import App from "./App";
import { AppSettingsProvider, useAppSettings } from "./context/appSettings";
import { SocketProvider } from './context/socket';

export function AppWrapper() {

  

  return (
    <SocketProvider>
        <AppSettingsProvider>
            <App/>
        </AppSettingsProvider>
    </SocketProvider>
  );
}

export default AppWrapper;
