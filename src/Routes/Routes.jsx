import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Mainlayout/MainLayout';
import Home from '../Pages/Home'
import Apps from '../Pages/Apps';
import Installation from '../Pages/Installation';
import ErrorPage from '../Pages/ErrorPage';
const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('/data.json'),
            },
            {
                path: '/app',
                element: <Apps />,

            },
            {
                path: '/Installation',
                element: <Installation />
            },
        ]

    },

]);

export default router;
