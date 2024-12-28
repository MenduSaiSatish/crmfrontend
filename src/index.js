import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './app/store';
import Login from './features/Login';
import SignUp from './features/SignUp';
import Dashboard from './features/Dashboard';
import Home from './Home';
import Newlead from './Leads/Newlead';
import LeadData from './Leads/LeadData';
import Edit from './Leads/Edit';
import LeadDetails from './Leads/LeadDetails';
import AddRemarks from './Leads/AddRemarks';


const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
      children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/signup',
        element:<SignUp/>
      },
      {
        path:'/dashboard',
        element:<Dashboard/>,
        children:[
          {
            path:'/dashboard/newlead',
            element:<Newlead></Newlead>
          },
          {
            path:'/dashboard/',
            element:<LeadData></LeadData>
          },
          {
            path:'/dashboard/edit',
            element:<Edit></Edit>
          },
          {
            path:'/dashboard/leaddetails/:id',
            element:<LeadDetails></LeadDetails>
          },
          {
            path:'/dashboard/addremarks/:id',
            element:<AddRemarks></AddRemarks>
          }
        ]
      }
    ]
  }
  
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
