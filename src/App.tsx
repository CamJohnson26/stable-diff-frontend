import React from 'react';
import './App.css';
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import UserProfile from "./UserProfile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Stable Diffusion Frontend
        <LoginButton />
        <LogoutButton />
        <UserProfile />
      </header>
    </div>
  );
}

export default App;
