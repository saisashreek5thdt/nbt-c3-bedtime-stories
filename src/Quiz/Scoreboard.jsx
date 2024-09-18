/* eslint-disable react/prop-types */
export default function Scoreboard({ score, answers }) {
  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-full w-full">
        <h2 className="text-3xl font-bold mb-4">Quiz Results</h2>
        <p className="text-lg font-semibold mb-4">
          Your Score: {score} / {answers.length}
        </p>
        {/* <ul>
          {answers.map((answer, index) => (
            <li key={index} className="mb-3">
              <p className="text-lg font-semibold">{answer.question}</p>
              <p className="text-sm">
                <span className="font-bold">Your Answer:</span>{" "}
                <span
                  className={`${
                    answer.selectedAnswer === answer.correctAnswer
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {answer.selectedAnswer}
                </span>
              </p>
              <p className="text-sm font-bold">
                Correct Answer: {answer.correctAnswer}
              </p>
            </li>
          ))}
        </ul> */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="text-left">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Question
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Selected Option
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Correct Answer
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {answers.map((answer, index) => (
                <tr key={index} className="odd:bg-gray-50">
                  <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    {answer.question}
                  </td>
                  <td
                    className={`${
                      answer.selectedAnswer === answer.correctAnswer
                        ? "text-green-600 whitespace-nowrap px-4 py-2 font-medium"
                        : "text-red-600 whitespace-nowrap px-4 py-2 font-medium"
                    }`}
                  >
                    {answer.selectedAnswer}
                  </td>
                  <td
                    className={`text-green-600 whitespace-nowrap px-4 py-2 text-base font-medium`}
                  >
                    {answer.correctAnswer}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 bg-[#c4122f] text-white px-4 py-2 rounded hover:bg-[#d5546a]"
        >
          Restart Quiz
        </button>
      </div>
    </>
  );
}
