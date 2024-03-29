import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN || ''}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID || ''}
      authorizationParams={{
        redirect_uri: process.env.REACT_APP_ORIGIN_URL,
        audience: process.env.REACT_APP_WORKER_API_AUDIENCE,
      }}
      cacheLocation="localstorage" // Fixes https://community.auth0.com/t/auth0-spa-2-x-returning-missing-refresh-token/98999/27
      useRefreshTokens={true} // Fixes https://community.auth0.com/t/silent-authorization-not-working-after-login-signup/37114/5
    >
      <App />
    </Auth0Provider>,
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
