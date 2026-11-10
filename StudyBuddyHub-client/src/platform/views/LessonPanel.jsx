import { ui } from "../ui";
import {
  FiCheck,
  FiPenTool,
  FiChevronLeft,
  FiArrowRight,
} from "react-icons/fi";
import PropTypes from "prop-types";
export default function LessonPanel({
  busy,
  completeLesson,
  modal,
  quiz,
  setModal,
  state,
}) {
  return (
    modal.type === "lesson" && (
      <>
        <span className={ui(`eyebrow ${modal.course.color}-text`)}>
          {modal.course.title}
        </span>
        <h2 id="dialog-title">{modal.course.lessons[modal.lesson].title}</h2>
        <div className={ui("lesson-tabs")}>
          {modal.course.lessons.map((l, i) => (
            <button
              key={l.title}
              onClick={() =>
                setModal({
                  ...modal,
                  lesson: i,
                })
              }
              className={ui(modal.lesson === i ? "selected" : "")}
            >
              {state.completed[modal.course.id]?.includes(i) ? (
                <FiCheck />
              ) : (
                i + 1
              )}
              <span>{l.title}</span>
            </button>
          ))}
        </div>
        <div className={ui("lesson-body")}>
          {modal.course.lessons[modal.lesson].body.split("\n\n").map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div className={ui("lesson-tip")}>
          <FiPenTool />
          <span>
            Make it yours: try the exercise before moving on. Learning sticks
            when you put it into practice.
          </span>
        </div>
        <div className={ui("modal-actions")}>
          <button
            className={ui("button white")}
            disabled={modal.lesson === 0}
            onClick={() =>
              setModal({
                ...modal,
                lesson: modal.lesson - 1,
              })
            }
          >
            <FiChevronLeft /> Previous
          </button>
          {state.completed[modal.course.id]?.includes(modal.lesson) ? (
            <button
              className={ui("button primary")}
              onClick={() =>
                modal.lesson < modal.course.lessons.length - 1
                  ? setModal({
                      ...modal,
                      lesson: modal.lesson + 1,
                    })
                  : quiz(modal.course)
              }
            >
              {modal.lesson < modal.course.lessons.length - 1
                ? "Next lesson"
                : "Try the quiz"}
              <FiArrowRight />
            </button>
          ) : (
            <button
              className={ui("button primary")}
              disabled={busy}
              onClick={() => completeLesson(modal.course, modal.lesson)}
            >
              Mark complete <FiCheck />
            </button>
          )}
        </div>
      </>
    )
  );
}
LessonPanel.propTypes = {
  busy: PropTypes.any,
  completeLesson: PropTypes.any,
  modal: PropTypes.any,
  quiz: PropTypes.any,
  setModal: PropTypes.any,
  state: PropTypes.any,
};
