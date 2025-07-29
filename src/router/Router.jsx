import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import LoginScreen from "../pages/Login";

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