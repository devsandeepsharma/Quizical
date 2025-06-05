import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="flex justify-center items-center min-h-screen gap-3">
            <h1 className="text-3xl">Quizical</h1>
            <Outlet />
        </div>
    )
}

export default Layout;