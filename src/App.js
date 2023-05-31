import React from 'react';
import "./app.css";
import { ChatEngine } from 'react-chat-engine';
// import { ChatFeed } from 'react-chat-engine';
import ChatFeed from './components/chatFeed';
const App = () => {
    return (
        <ChatEngine height="100vh" projectID="c1a32e44-6b7c-4449-92bb-4a61efe5eed2" userName="sheriffgaye5@gmail.com" userSecret="Sheriff#2021" renderChatFeed={(ChatAppProps) => <ChatFeed {...ChatAppProps} />} />
    )
}

export default App
