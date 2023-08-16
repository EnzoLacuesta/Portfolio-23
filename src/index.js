import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { 
  createBrowserRouter,
  RouterProvider 
} from 'react-router-dom';
import Home from './componentes/Home/Home';
import About from './componentes/About.jsx/About';
import Works from './componentes/Works/Works';

const route = createBrowserRouter([
  {
    path:"/",
    element:<Home></Home>
  },
  {
    path:'/about',
    element:<About/>
  },
  {
    path:'/works',
    element:<Works></Works>
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={route}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
