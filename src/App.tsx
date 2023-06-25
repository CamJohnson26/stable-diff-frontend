import React from 'react';
import './App.css';
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import UserProfile from "./UserProfile";
import {useWorkerApi} from "./dataAccess/workerApi/useWorkerApi";

function App() {
  const {loading, data} = useWorkerApi({
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
          loading ? <>Loading</> : <div>{data}</div>
        }
      </header>
    </div>
  );
}

export default App;
