import { IoIosInfinite } from "react-icons/io";

const Logo = () => {
    return (
        <div className="flex items-center gap-2 text-xl md:text-2xl">
            <IoIosInfinite className="text-3xl md:text-4xl text-yellow-400 -mb-1" />
            <p className="font-medium">Quizical</p>
        </div>
    )
}

export default Logo;