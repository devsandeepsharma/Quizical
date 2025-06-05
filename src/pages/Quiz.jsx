import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { questions } from "../data/questions";
import Button from "../components/ui/Button";

const Quiz = () => {

    const { category } = useParams();
    const navigate = useNavigate();

    const filteredQuestions = questions.filter(question => question.category === category);

    const [current, setCurrent] = useState(0);
    const [answers, setAnswers] = useState(Array(filteredQuestions.length).fill(null)); 

    const handleAnswerSelect = (answer, index) => {
        const newAnswers = [...answers];
        newAnswers[index] = answer;
        setAnswers(newAnswers);
    };

    const nextQuestion = () => {
        if(current === 4) {
            navigate(`/results/${checkAnswers()}`);
            return;
        }

        setCurrent(prev => prev + 1);
    }

    const prevQuestion = () => {
        setCurrent(prev => prev - 1);
    }

    const checkAnswers = () => {
        let score = 0;

        filteredQuestions.forEach((question, index) => {
            if (answers[index] === question.answer) {
                score++;
            }
        });

        return score;
    };

    return (
        <main className="p-4 max-w-6xl mx-auto">
            <p>{current + 1} of {filteredQuestions.length}</p>
            <p>{filteredQuestions[current].question}</p>
            {
                filteredQuestions[current].options.map((option, index) => (
                    <Button 
                        variant="outline" 
                        className={`w-full !justify-start my-2 ${answers[current] === option ? 'bg-green-200 border-green-600' : ''}`} 
                        onClick={() => handleAnswerSelect(option, current)}
                        key={option}>{index + 1}. {option}</Button>
                ))
            }
            <Button variant="secondary"
            onClick={prevQuestion}
            disabled={current === 0}>Previous</Button>
            <Button
                onClick={nextQuestion}
            >
                {current + 1 === filteredQuestions.length ? "Submit": "Next"}
            </Button>
        </main>
    )
}

export default Quiz;