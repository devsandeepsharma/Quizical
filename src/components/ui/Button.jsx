import { Link } from "react-router-dom";
import { motion } from "motion/react";

const Button = ({
    variant="primary", 
    isLink=false, 
    children, 
    disabled = false, 
    className="",
    icon=null,
    iconLeft=true, 
    ...props 
}) => {

    const baseStyles = "inline-flex items-center justify-center gap-2 rounded md:rounded-md font-semibold cursor-pointer transition-colors focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-dashed focus:outline-gray-800";

    const variants = {
        primary: "px-4 py-2 bg-yellow-400 text-gray-800 hover:bg-yellow-300",
        secondary: "px-4 py-2 bg-gray-200 text-gray-800 hover:bg-gray-300",
        outline: "px-4 py-2 border border-gray-800 text-gray-800 hover:bg-gray-200",
        link: "px-0 py-0 text-gray-800 underline hover:text-gray-500"
    };

    const disabledStyles = "opacity-50 cursor-not-allowed pointer-events-none select-none";

    const Element = isLink ? Link : "button";
    const MotionWapper = motion.create(Element);

    return (
        <MotionWapper
            whileTap={!disabled ? { scale: 0.8 } : {}}
            className={`${baseStyles} ${variants[variant]} ${
                disabled ? disabledStyles : ""} ${className}`} 
            {...props}
            disabled={disabled}
        >
            {icon && iconLeft && <span className="text-xs">{icon}</span>}
            {children}
            {icon && !iconLeft && <span className="text-xs">{icon}</span>}
        </MotionWapper>
    )
}

export default Button;