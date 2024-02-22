import { createBrowserRouter } from "react-router-dom";
import App from "../../App.jsx";

//* Alle Router
import { Landingpage } from "../Pages/landingpage";
import { Login } from "../Pages/login.jsx";
import { Register } from "../Pages/register.jsx";
import { AddCars } from "../Pages/addcars.jsx";
import { Kalender } from "../Pages/kalender.jsx";
import { Termine } from "../Pages/termine.jsx";
import { MyVehiclesButtons } from "../reusables/myvehicles.jsx";



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
            {
                path: "register", 
                element: <Register />
            },
            {
                path: "addcars",
                element: <AddCars />
            },
            {
                path: "kalender", 
                element: <Kalender />
            },
            {
                path: "termine", 
                element: <Termine />
            },
            {
                path: "myvehicles", 
                element: <MyVehiclesButtons />
            }
        ],
    },
]);