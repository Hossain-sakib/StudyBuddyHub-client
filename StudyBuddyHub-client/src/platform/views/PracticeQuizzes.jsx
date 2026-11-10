import { ui } from "../ui";
import { FiZap, FiClock, FiAward, FiArrowRight } from "react-icons/fi";
import PropTypes from "prop-types";
export default function PracticeQuizzes({ courses, page, quiz, state }) {
  return (
    page === "quizzes" && (
      <div className={ui("quiz-grid")}>
        {courses.map((c) => (
          <article className={ui("quiz-card panel")} key={c.id}>
            <span className={ui(`icon-tile ${c.color}`)}>
              <FiZap />
            </span>
            <span className={ui("eyebrow")}>{c.category}</span>
            <h2>{c.title}</h2>
            <p>Three quick questions. A fresh perspective.</p>
            <div className={ui("quiz-meta")}>
              <span>
                <FiClock /> About 3 minutes
              </span>
              <span>{c.quiz.length} questions</span>
            </div>
            {state.quizzes[c.id] && (
              <div className={ui("last-score")}>
                <FiAward /> Latest score: {state.quizzes[c.id].score}/
                {state.quizzes[c.id].total}
              </div>
            )}
            <button className={ui("button primary")} onClick={() => quiz(c)}>
              {state.quizzes[c.id] ? "Practice again" : "Let’s give it a go"}
              <FiArrowRight />
            </button>
          </article>
        ))}
      </div>
    )
  );
}
PracticeQuizzes.propTypes = {
  courses: PropTypes.any,
  page: PropTypes.any,
  quiz: PropTypes.any,
  state: PropTypes.any,
};
