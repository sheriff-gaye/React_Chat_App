import React from 'react';
import "./app.css";
import { ChatEngine } from 'react-chat-engine';
// import { ChatFeed } from 'react-chat-engine';
import ChatFeed from './components/chatFeed';
import LoginForm from './components/LoginForm';
const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>
    return (
        <ChatEngine height="100vh" projectID="c1a32e44-6b7c-4449-92bb-4a61efe5eed2" userName={localStorage.getItem('username')} userSecret={localStorage.getItem('password')} 
        renderChatFeed={(ChatAppProps) => <ChatFeed {...ChatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        
        />
        
    )
}

export default App
