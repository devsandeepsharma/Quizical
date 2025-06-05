import { motion } from "framer-motion";

const lineVariants = {
    closed: {
        rotate: 0,
        y: 0,
        opacity: 1
    },
    openTop: {
        rotate: 45,
        y: 8,
    },
    openMiddle: {
        opacity: 0
    },
    openBottom: {
        rotate: -45,
        y: -8,
    }
};

const HamburgerToggle = ({ isOpen, toggle, className }) => {
    return (
        <button
            onClick={toggle}
            className={`flex flex-col items-center justify-center gap-[6px] cursor-pointer 
                    focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-dashed focus:outline-gray-800
                    ${className}
                `}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
        >
            <motion.span
                className="block w-6 h-0.5 bg-current rounded origin-center"
                animate={isOpen ? "openTop" : "closed"}
                variants={lineVariants}
                transition={{ duration: 0.3 }}
            />
            <motion.span
                className="block w-4 h-0.5 ml-auto bg-current rounded origin-center"
                animate={isOpen ? "openMiddle" : "closed"}
                variants={lineVariants}
                transition={{ duration: 0.3 }}
            />
            <motion.span
                className="block w-6 h-0.5 bg-current rounded origin-center"
                animate={isOpen ? "openBottom" : "closed"}
                variants={lineVariants}
                transition={{ duration: 0.3 }}
            />
        </button>
  );
};

export default HamburgerToggle;