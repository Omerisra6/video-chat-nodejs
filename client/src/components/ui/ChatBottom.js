import React from 'react'
import EnableDisableVideo from './EnableDisableVideo'
import EnanleDisableAudio from './EnanleDisableAudio'
import EndCall from './EndCall'
import StyledChatActionsContainer from './styled/StyledChatActionsContainer'
import StyledChatBottom from './styled/StyledChatBottom'

export default function ChatBottom( { setUser } ) {
  return (
    <StyledChatBottom>
        <StyledChatActionsContainer>

          <EnableDisableVideo/>
          <EndCall setUser={setUser}/>
          <EnanleDisableAudio/>
          
        </StyledChatActionsContainer>
    </StyledChatBottom>
  )
}
