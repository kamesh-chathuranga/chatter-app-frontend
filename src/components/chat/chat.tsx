import React from 'react'
import ChatHeader from './chat-header'
import MessageBar from './message-bar'
import ChatContainer from './chat-container'

const Chat = () => {
  return (
    <div className='flex flex-col h-screen w-full'>
        <ChatHeader />
        <ChatContainer />
        <MessageBar />
    </div>
  )
}

export default Chat