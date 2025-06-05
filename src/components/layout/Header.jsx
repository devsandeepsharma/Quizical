import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Logo from "../ui/Logo";
import Button from "../ui/Button";
import HamburgerToggle from "../ui/HamburgerToggle";

import { PiMedalDuotone, PiInfoDuotone } from "react-icons/pi";
import { FaGoogle } from "react-icons/fa";

const Header = () => {

    const [openNav, setOpenNav] = useState(false);

    const toggleNav = () => {
        setOpenNav(prev => !prev);
    }

    const navItems = [
        {
            label: "Leaderboard",
            path: "/leaderboard",
            icon: PiMedalDuotone,
        },
        {
            label: "Instructions",
            path: "/instructions",
            icon: PiInfoDuotone,
        },
    ]

    useEffect(() => {
        document.body.style.overflow = openNav ? "hidden" : "";
    }, [openNav]);

    return (
        <header className="max-w-6xl mx-auto flex justify-between items-center">
            <Link to="/"><Logo /></Link>
            <nav className="md:hidden relative">
                <HamburgerToggle 
                    isOpen={openNav} 
                    toggle={toggleNav} 
                />
                {openNav && (
                    <div
                        className="fixed inset-0 z-40"
                        onClick={toggleNav}
                    ></div>
                )}
                <AnimatePresence>
                    {
                        openNav && (
                            <motion.ul
                                initial={{ scaleY: 0, opacity: 0 }}
                                animate={{ scaleY: 1, opacity: 1 }}
                                exit={{ scaleY: 0, opacity: 0 }}
                                transition={{ duration: 0.25, ease: "easeInOut" }}
                                className="origin-top absolute right-0 mt-2 w-48 p-4 bg-white rounded-md shadow-lg z-[50] flex flex-col gap-3"
                                key="mobile-nav"
                            >
                                {
                                    navItems.map(({ path, label, icon: Icon }) => (
                                        <li key={path}>
                                            <NavLink
                                                to={path}
                                                onClick={() => setOpenNav(false)}
                                                className={({ isActive }) =>
                                                    `flex items-center gap-2 text-sm font-medium transition ${
                                                        isActive
                                                        ? "text-yellow-800"
                                                        : "text-gray-500 hover:text-gray-800"
                                                    }`
                                                }
                                            >
                                                <Icon size={18} />
                                                {label}
                                            </NavLink>
                                        </li>
                                    ))
                                }
                                <li>
                                    <Button
                                        icon={<FaGoogle size={14} />}
                                        onClick={() => setOpenNav(false)}
                                        className="w-full"
                                    >
                                        Login
                                    </Button>
                                </li>
                            </motion.ul>
                        )
                    }
                </AnimatePresence>
            </nav>
            <nav className="hidden md:block">
                <ul className="flex gap-6 items-center">
                    {
                        navItems.map(({ path, label, icon: Icon }) => (
                            <li key={path}>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                        `flex items-center gap-2 text-sm font-medium transition ${
                                            isActive
                                            ? "text-yellow-800"
                                            : "text-gray-500 hover:text-gray-800"
                                        }`
                                    }
                                >
                                    <Icon size={18} />
                                    {label}
                                </NavLink>
                            </li>
                        ))
                    }
                    <li>
                        <Button
                            icon={<FaGoogle size={14} />}
                        >
                            Login
                        </Button>
                    </li>
                </ul>
            </nav>
      </header>
    )
}

export default Header;