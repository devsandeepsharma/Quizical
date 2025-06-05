import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Instructions from "./pages/Instructions";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Leaderboard from "./pages/Leaderboard";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import NotFound from "./pages/NotFound";

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
                    path: "/login",
                    element: <Login />
                },
                {
                    path: "/signup",
                    element: <Signup />
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
                    path: "/quiz/:quizId", 
                    element: <Quiz /> 
                },
                { 
                    path: "/results/:quizId", 
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