import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './index.css'
import './data/firebase/firebase.js'
import LoginScreen, {loginScreenAction} from "./ui/auth/LoginScreen.jsx";
import AppLayout from "./ui/app/AppLayout.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/login",
        element: <LoginScreen/>,
        action: loginScreenAction,
    },
    {
        path: "/app",
        element: <AppLayout/>,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
