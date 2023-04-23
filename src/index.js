import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createHashRouter } from "react-router-dom"
import Root from "./routes/Root"
import FrontPage from './routes/FrontPage';
import Pokemons from './routes/Pokemons';

const router = createHashRouter([
  {
      path: "/",
      element: <Root />,
      children: [
          {
              path: "/",
              element: <FrontPage />,
          },
          {
              path: "/pokemons",
              element: <Pokemons />,
          },
      ],
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
