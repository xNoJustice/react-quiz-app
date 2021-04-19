import logo from "./logo.svg";
import "./logo.css";
import { useState } from "react";

const Quiz = (data) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question: "What is the scientific name of a butterfly?",
      answers: ["Apis", "Coleoptera", "Formicidae", "Rhopalocera"],
      correctIndex: 3,
    },
    {
      question: "How hot is the surface of the sun?",
      answers: ["1,233 K", "5,778 K", "12,130 K", "101,300 K"],
      correctIndex: 1,
    },
    {
      question: "Who are the actors in The Internship?",
      answers: [
        "Ben Stiller, Jonah Hill",
        "Courteney Cox, Matt LeBlanc",
        "Kaley Cuoco, Jim Parsons",
        "Vince Vaughn, Owen Wilson",
      ],
      correctIndex: 3,
    },
    {
      question: "What is the capital of Spain?",
      answers: ["Berlin", "Buenos Aires", "Madrid", "San Juan"],
      correctIndex: 2,
    },
    {
      question:
        "What are the school colors of the University of Texas at Austin?",
      answers: [
        "Black, Red",
        "Blue, Orange",
        "White, Burnt Orange",
        "White, Old gold, Gold",
      ],
      correctIndex: 2,
    },
    {
      question: "What is 70 degrees Fahrenheit in Celsius?",
      answers: ["18.8889", "20", "21.1111", "158"],
      correctIndex: 2,
    },
    {
      question: "When was Mahatma Gandhi born?",
      answers: [
        "October 2, 1869",
        "December 15, 1872",
        "July 18, 1918",
        "January 15, 1929",
      ],
      correctIndex: 0,
    },
    {
      question: "How far is the moon from Earth?",
      answers: [
        "7,918 miles (12,742 km)",
        "86,881 miles (139,822 km)",
        "238,400 miles (384,400 km)",
        "35,980,000 miles (57,910,000 km)",
      ],
      correctIndex: 2,
    },
    {
      question: "What is 65 times 52?",
      answers: ["117", "3120", "3380", "3520"],
      correctIndex: 2,
    },
    {
      question: "How tall is Mount Everest?",
      answers: [
        "6,683 ft (2,037 m)",
        "7,918 ft (2,413 m)",
        "19,341 ft (5,895 m)",
        "29,029 ft (8,847 m)",
      ],
      correctIndex: 3,
    },
    {
      question: "When did The Avengers come out?",
      answers: ["May 2, 2008", "May 4, 2012", "May 3, 2013", "April 4, 2014"],
      correctIndex: 1,
    },
    {
      question: "What is 48,879 in hexidecimal?",
      answers: ["0x18C1", "0xBEEF", "0xDEAD", "0x12D591"],
      correctIndex: 1,
    },
  ];

  const handleChange = (i) => {
    if (currentQuestion + 1 === questions.length) {
      handleFinish();
    }
    if (questions[currentQuestion].correctIndex === i) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleFinish = () => {
    setShowScore(true);
  };

  const NewGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
  };

  return (
    <section className="w-full h-auto min-h-screen overflow-hidden">
      <div className="container mx-auto">
        {showScore ? (
          <div className="flex flex-col justify-center items-center mt-20">
            <h1 className="mt-2 mb-4 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Your score is {score}
            </h1>
            <button
              onClick={() => NewGame()}
              className="py-2 px-4 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-32 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
            >
              Play Again
            </button>
          </div>
        ) : (
          <div>
            <div className="flex mt-20 items-center justify-center">
              <h2 className="text-lg font-bold text-center text-black dark:text-gray-100 uppercase transition duration-500 ease-in-out transform hover:text-gray-400">
                <img src={logo} alt="logo" className="logo" />
              </h2>
            </div>
            <h1 className="text-center mt-2 mb-4 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              React Quiz App
            </h1>
            <div className="flex justify-center items-center mt-12">
              <div className="w-full max-w-md px-4 py-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                <div>
                  <div className="text-center text-white rounded-full py-2 px-2 bg-green-500">
                    Question{" "}
                    {currentQuestion > questions.length
                      ? questions.length + "/" + questions.length
                      : currentQuestion + 1 + "/" + questions.length}
                  </div>
                  <div className="self-center mb-6 text-center text-md font-light text-gray-600 sm:text-lg dark:text-white"></div>
                  <div className="mt-8">
                    <div className="text-xl font-md text-center dark:text-gray-100">
                      {questions[currentQuestion].question}
                    </div>
                    <div className="mt-4 ml-3 text-lg flex items-start flex-col">
                      {questions[currentQuestion].answers.map((answer, i) => (
                        <div
                          key={i}
                          onClick={() => handleChange(i)}
                          className="w-full bg-indigo-500 mb-2 p-2 text-gray-100 hover:text-gray-300 dark:text-gray-200 dark:hover:text-white transition-colors duration-200 focus:outline-none"
                        >
                          {answer}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Quiz;
