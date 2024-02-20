import { createBrowserRouter } from "react-router-dom";
import App from "../../App.jsx";

//* Alle Router
import { Landingpage } from "../Pages/landingpage";
import { Login } from "../Pages/login.jsx";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Landingpage />
            },
            {
                path: "login", 
                element: <Login />
            },
        ],
    },
]);