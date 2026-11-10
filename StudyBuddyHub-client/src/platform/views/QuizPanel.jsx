import { ui } from "../ui";
import { FiAward, FiArrowRight, FiCheck } from "react-icons/fi";
import PropTypes from "prop-types";
export default function QuizPanel({
  busy,
  go,
  modal,
  quizAnswers,
  quizResult,
  setModal,
  setQuizAnswers,
  submitQuiz,
}) {
  return (
    modal.type === "quiz" && (
      <>
        <span className={ui("eyebrow purple-text")}>A LITTLE PRACTICE</span>
        <h2 id="dialog-title">{modal.course.title}</h2>
        {quizResult !== null ? (
          <div className={ui("quiz-results")}>
            <span className={ui("result-icon")}>
              <FiAward />
            </span>
            <h3>
              {quizResult === modal.course.quiz.length
                ? "Look at you go!"
                : "Every attempt is a step forward."}
            </h3>
            <div className={ui("result-score")}>
              {quizResult}
              <span> / {modal.course.quiz.length}</span>
            </div>
            <p>Your latest result is saved in My progress.</p>
            {modal.course.quiz.map((q, i) => (
              <div
                className={ui(
                  `answer-review ${quizAnswers[i] === q.answer ? "correct" : ""}`,
                )}
                key={q.question}
              >
                <b>
                  {quizAnswers[i] === q.answer ? "✓" : "↗"} {q.question}
                </b>
                <p>Correct answer: {q.choices[q.answer]}</p>
              </div>
            ))}
            <button
              className={ui("button primary")}
              onClick={() => {
                setModal(null);
                go("progress");
              }}
            >
              See my progress <FiArrowRight />
            </button>
          </div>
        ) : (
          <form className={ui("quiz-form")} onSubmit={submitQuiz}>
            {modal.course.quiz.map((q, i) => (
              <fieldset key={q.question}>
                <legend>
                  <span>{i + 1}</span>
                  {q.question}
                </legend>
                {q.choices.map((choice, j) => (
                  <label
                    className={ui(
                      quizAnswers[i] === j ? "answer selected" : "answer",
                    )}
                    key={choice}
                  >
                    <input
                      type="radio"
                      name={`question-${i}`}
                      value={j}
                      required
                      onChange={() =>
                        setQuizAnswers({
                          ...quizAnswers,
                          [i]: j,
                        })
                      }
                    />
                    {choice}
                  </label>
                ))}
              </fieldset>
            ))}
            <button className={ui("button primary")} disabled={busy}>
              Check my answers <FiCheck />
            </button>
          </form>
        )}
      </>
    )
  );
}
QuizPanel.propTypes = {
  busy: PropTypes.any,
  go: PropTypes.any,
  modal: PropTypes.any,
  quizAnswers: PropTypes.any,
  quizResult: PropTypes.any,
  setModal: PropTypes.any,
  setQuizAnswers: PropTypes.any,
  submitQuiz: PropTypes.any,
};
