import { Outlet } from "react-router-dom";

import Logo from "../ui/Logo";
import Button from "../ui/Button";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { Fa42Group } from "react-icons/fa6";

const Layout = () => {
    return (
        <div className="bg-orange-50 flex flex-col justify-center items-center min-h-screen gap-3">
            <Logo />
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