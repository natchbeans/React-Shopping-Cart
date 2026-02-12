import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Homepage from './components/Homepage.jsx';
import ShoppingPage from './components/ShoppingPage.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "/shopping",
        element: <ShoppingPage />,
    },
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  
)
