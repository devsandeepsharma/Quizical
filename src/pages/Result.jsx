import { useParams } from "react-router-dom";

const Result = () => {

    const { score } = useParams();

    return <h2 className="text-lg">Your score is {score} out of 5</h2>
}

export default Result;