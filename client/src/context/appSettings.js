import React, { useContext, useState } from "react";

const AppSettingsContext = React.createContext( null );

export const useAppSettings = () => {
    
    return useContext( AppSettingsContext )  
}

export const AppSettingsProvider = ( { children } ) => {
    
    const [ user, setUser ] = useState( '' );
    const [ room, setRoom ] = useState( '' )

    const value = {
        user,
        setUser,
        room,
        setRoom
    };

    return <AppSettingsContext.Provider children={ children } value={ value } />;
};
