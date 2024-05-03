import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AuthLayout } from "../components/index.js"
import HomePage from "../pages/HomePage.jsx"
import RegisterPage from "../pages/RegisterPage.jsx"
import LoginPage from "../pages/LoginPage.jsx"
import CoursesPage from "../pages/CoursesPage.jsx"
import JavaPage from "../pages/JavaPage.jsx" 
import LevelPage from '../pages/LevelPage.jsx';
import "../userWorker"

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage/>,
      },
      {
        path: '/register',
        element: <AuthLayout authentication={false}><RegisterPage/></AuthLayout>,
      },
      {
        path: '/login',
        element: <AuthLayout authentication={false}><LoginPage/></AuthLayout>,
      },
      {
        path: '/courses',
        element: <CoursesPage/>,
      },
      {
        path: '/courses/java',
        element: <JavaPage/>,
      },
      {
        path: '/courses/java/:levelId',
        element: <LevelPage/>,
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
)
