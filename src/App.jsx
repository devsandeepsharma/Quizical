import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Instructions from "./pages/Instructions";
import Leaderboard from "./pages/Leaderboard";
import Quiz from "./pages/Quiz";
import NotFound from "./pages/NotFound";
import Result from "./pages/Result";

const App = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/leaderboard",
                    element: <Leaderboard />
                },
                {
                    path: "/instructions",
                    element: <Instructions />
                },
                { 
                    path: "/quiz/:category", 
                    element: <Quiz /> 
                },
                { 
                    path: "/results/:score", 
                    element: <Result /> 
                },
                { 
                    path: "*", 
                    element: <NotFound /> 
                }
            ]
        }
    ])

    return <RouterProvider router={router} />
}

export default App;