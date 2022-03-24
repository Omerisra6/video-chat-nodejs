import React, { useContext, useState } from "react";

const VideoSettingsContext = React.createContext( null );

export const useVideoSettings = () => {
    
    return useContext( VideoSettingsContext )  
}

export const VideoSettingsProvider = ( { children } ) => {
    
    const [ audio, setAudio ] = useState( true );
    const [ video, setVideo ] = useState( true )

    const value = {
        audio,
        setAudio,
        video,
        setVideo
    };

    return <VideoSettingsContext.Provider children={ children } value={ value } />;
};
