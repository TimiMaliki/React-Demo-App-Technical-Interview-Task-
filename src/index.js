import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AuthLayout from './AuthLayout/AuthLayout';
import Main from './pages/main';
import Details from './pages/details';
import Login from './pages/login';

const router = createBrowserRouter([{
  element : <AuthLayout/>,
  children : [
    {path : "/" , element : <Main/>},
    {path : "/login" , element : <Login/>},
    {path : "/detail" , element : <Details/>}
  ]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

