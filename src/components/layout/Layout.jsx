import { Outlet } from "react-router-dom";

import Header from "./Header";
import Button from "../ui/Button";

import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { Fa42Group } from "react-icons/fa6";

const Layout = () => {
    return (
        <div className="bg-orange-50 min-h-screen p-4">
            <Header />
            <Outlet />
            <div>
                <Button icon={<Fa42Group />}>Primary</Button>
                <Button iconLeft={false} icon={<HiOutlineArrowSmallRight />} variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="link">Ghost</Button>
                <Button disabled>Disabled</Button>
            </div>
        </div>
    )
}

export default Layout;