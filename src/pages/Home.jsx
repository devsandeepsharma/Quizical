import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Button from "../components/ui/Button";

import { IoIosInfinite } from "react-icons/io";

const categories = [
    { name: "Movies", emoji: "🎬" },
    { name: "Cricket", emoji: "🏏" },
    { name: "General", emoji: "❓" },
];

const Home = () => {

    const navigate = useNavigate();

    const [selected, setSelected] = useState(null);

    const handlePlay = () => {
        if (selected) {
            navigate(`/quiz/${selected}`)
        } else {
            console.log("Please select a category!");
        }
    };

    return (
        <div className="p-4 max-w-6xl mx-auto">
            <div className="text-center">
                <IoIosInfinite size={80} className="text-yellow-400 mx-auto" />
                <h2 className="text-3xl font-bold mb-8">Welcome to Quizical</h2>
            </div>
            <div className="flex justify-center flex-wrap gap-6 my-6">
                {
                    categories.map((cat) => (
                        <motion.div
                            key={cat.name}
                            whileTap={{ scale: 0.8 }}
                            animate={{
                                scale: selected === cat.name ? 1.1 : 1,
                                backgroundColor:
                                    selected === cat.name ? "#ffe58f" : "#ffffff",
                                }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="cursor-pointer rounded-lg px-6 py-4 text-center border border-gray-800"
                            onClick={() => setSelected(cat.name)}
                        >
                            <div className="text-5xl mb-2">{cat.emoji}</div>
                            <div className="text-lg font-semibold">{cat.name}</div>
                        </motion.div>
                    ))
                }
            </div>
            <div className="text-center max-w-sm m-auto">
                <p className="text-gray-800 mb-4 mt-6">
                    Pick a category and challenge yourself. Can you top the leaderboard?
                </p>
                <Button onClick={handlePlay} className="w-full mt-2">Play Now</Button>
                <Button variant="secondary" className="w-full mt-3">Login with Google</Button>
            </div>
        </div>
    )
}

export default Home;