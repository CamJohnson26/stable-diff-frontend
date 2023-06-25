import React, {useState} from 'react';
import './App.css';
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import UserProfile from "./UserProfile";
import {useWorkerApiWriteStableDiff} from "./dataAccess/workerApi/useWorkerApiWriteStableDiff";
import {useWorkerApiAuthorizedPost} from "./dataAccess/workerApi/useWorkerApiAuthorizedPost";

function App() {

  const [description, setDescription] = useState('')
  const {postData} = useWorkerApiAuthorizedPost({
    url: process.env.REACT_APP_WORKER_API_URL || ''
  });
  return (
    <div className="App">
      <header className="App-header">
        Stable Diffusion Frontend
        <LoginButton />
        <LogoutButton />
        <UserProfile />
        <label>Image Description</label>
        <input type="text" onChange={(e) => setDescription(e.target.value)}></input>
        <button onClick={() => postData({description})}>Generate Image</button>
      </header>
    </div>
  );
}

export default App;
