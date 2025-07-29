import { createBrowserRouter } from "react-router";
import Home from "../pages/HomeEstudante.jsx";
import LoginScreen from "../pages/Login.jsx";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <LoginScreen />
    },
    {
        path: "/home",
        element: <Home />
    }
])