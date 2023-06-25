import React from 'react';
import './App.css';
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import UserProfile from "./UserProfile";
import {useWorkerApiWriteStableDiff} from "./dataAccess/workerApi/useWorkerApiWriteStableDiff";

function App() {

  const {loading, data} = useWorkerApiWriteStableDiff({
    url: process.env.REACT_APP_WORKER_API_URL || ''
  });
  return (
    <div className="App">
      <header className="App-header">
        Stable Diffusion Frontend
        <LoginButton />
        <LogoutButton />
        <UserProfile />
        {
          loading ? <>Loading</> : <div>{JSON.stringify(data)}</div>
        }
      </header>
    </div>
  );
}

export default App;
