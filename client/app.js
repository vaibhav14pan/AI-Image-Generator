import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter,RouterProvider} from "react-router-dom"

import Homepage from "./src/pages/homepage/homepage";
import ImageGenerator from "./src/pages/imageGenerator/imageGenerator";
import HistoryPage from "./src/pages/historyPage/historyPage";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Homepage/>,
    },
    {
        path:'/image-generator',
        element:<ImageGenerator/>,
    },
    {
        path:'/history',
        element:<HistoryPage/>,
    }
]);

const App = ()=>{
    return <RouterProvider router={router} /> 
}
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);