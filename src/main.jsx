import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Statistics from './Statistics'
import Blogs from './Blogs'
import AppliedJobs from './AppliedJobs'
import ErrorPage from './ErrorPage'
import Home from './Home/Home'
import JobDetails from './Home/JobDetails'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=> fetch('featuredJobs.json')
      },
      {
        path:'statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'appliedJobs',
        element:<AppliedJobs></AppliedJobs>
      },
      {
        path:'blogs',
        element:<Blogs></Blogs>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
