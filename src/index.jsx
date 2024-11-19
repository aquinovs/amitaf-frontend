import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/Home';
import Navegacao from "./routes.jsx"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navegacao />
  </React.StrictMode>
);
