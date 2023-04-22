import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "../componentes/Root/Root";
import Home from "../componentes/Home/Home";
import About from "../componentes/About/About";
import Contacto from "../componentes/Contacto/Contacto";
import Portfolio from "../containers/Portfolio/Portfolio";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <h2>Página no encontrada</h2>,
        children: [
                {
                    path: "/",
                    element: <Home/>
                },
                {
                    path: "/home",
                    element: <Home/>
                },
                {
                    path: '/about',
                    element: <About/>
                },
                {
                    path: '/portfolio',
                    element: <Portfolio/>
                },
                {
                    path: '/contacto',
                    element: <Contacto/>
                }

        ]
    }
])

const Router = () => {

    return <RouterProvider router={router} />
}

export default Router;