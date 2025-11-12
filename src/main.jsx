import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HomePg from "./HomePage/homepage.jsx"
import NotFoundPage from './PageNotFound.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {path:"*",element:<NotFoundPage/>},
  {path:"/", element:<HomePg/>},
  {path:"/home", element:<HomePg/>},
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
