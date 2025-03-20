// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
// import React from "react";
// import { createRoot } from "react-dom/client";
// import { Auth0Provider } from "@auth0/auth0-react";
// import App from "./App";
// import "./index.css";

// const domain = "dev-n0msq5q13j3lydh2.us.auth0.com";
// const clientId = "aZHSJkIpFIzahvDighuHfjmIxNByMnH2";

// createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Auth0Provider
//       domain={domain}
//       clientId={clientId}
//       authorizationParams={{ redirect_uri: window.location.origin }}
//     >
//       <App />
//     </Auth0Provider>
//   </React.StrictMode>
// );
import React from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "./index.css";

// ✅ Correct domain and client ID
const domain = "dev-xscaorote3lchf35.us.auth0.com"; // Your Auth0 domain
const clientId = "1hzzEY4l0CsnTQSe6pm7q7LSIPDXzz7r"; // Your Auth0 client ID

// 🎉 Correctly configure Auth0Provider
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: "https://morent-theta.vercel.app/auth/callback", // This should match the allowed callback URL
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
