import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import './App.css';
import ChatFeed from './Components/ChatFeed'
function App() {
    return(
  <ChatEngine
  height = "100vh"
  projectID = "f876cf4f-f061-46d7-a973-efd39b2883eb"
  userName="khaadi"
  userSecret = "khaadi112"
  renderChatFeed  = {(chatAppProps)  => <chatFeed  { ...chatAppProps}/>}
  />
  
  )
}
  export default App
