import React from 'react';
import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider,Route} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Rootlayout from './components/rootlayout/Rootlayout';
import Login from './components/login/Login'
import Register from './components/register/Register'
import Lisence from './components/Lisence/Lisence';
import Home from './components/Home/Home';
import Logo from './components/Logo/Logo';
import Services from './components/Services/Services';
import Complaint from './components/Complaint/Complaint';
import Vehicle from './components/Vehicle/Vehicle'
import Land from './components/Land/Land';
import Factory from './components/Factory/Factory';

function App() {

  const router=createBrowserRouter([
    {
      path:'/',
      element:<Rootlayout />,
      children:[{
        path:'/',
        element:<Login />,
          },
          {
            path:'/Services',
          element:<Services/>
          },
    {
      path:'/register',
      element:<Register />
    },
    {
      path:'/home',
      element:<Home />
    },
    {
      path:'/lisence',
      element:<Lisence/>
    },
    {
      path:'/complaint',
      element:<Complaint/>
    },
    {
      path:'/Vehicle',
      element:<Vehicle/>
    },
    {
      path:'/Land',
      element:<Land/>
    },
    {
      path:'/Factory',
      element:<Factory/>
    }
  
]
     
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
      


    </div>
  );
}

export default App;
