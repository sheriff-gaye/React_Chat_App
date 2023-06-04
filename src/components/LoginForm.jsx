import React from "react";
import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");
  const [error,setError]=useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const authObject = {
      "Project-ID": "c1a32e44-6b7c-4449-92bb-4a61efe5eed2",
      "User-Name": username,
      "User-Secret": password
    };
    
    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
    } catch (error){
      setError("Opps Incorrect Ceredntials")
    }
  };
  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>

        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => SetUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => SetPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button"  style={{background:'purple',color:'white'}}>
              <span>Start chatting</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
