import { ui } from "../ui";
import {
  FiCheckSquare,
  FiPlus,
  FiCheck,
  FiClock,
  FiTrash2,
} from "react-icons/fi";
import PropTypes from "prop-types";
export default function PersonalAssignments({
  assignmentMode,
  busy,
  page,
  setModal,
  state,
  today,
  update,
}) {
  return (
    page === "assignments" &&
    assignmentMode === "personal" && (
      <section className={ui("panel")}>
        <div className={ui("section-heading")}>
          <h2>
            Your assignments{" "}
            <span className={ui("count-pill")}>{state.assignments.length}</span>
          </h2>
          <span className={ui("subtle")}>
            {state.assignments.filter((a) => a.done).length} completed
          </span>
        </div>
        {!state.assignments.length ? (
          <div className={ui("empty-state")}>
            <FiCheckSquare />
            <h2>Make room for your next big idea.</h2>
            <p>Add a task, set a date, and take it one step at a time.</p>
            <button
              className={ui("button primary")}
              onClick={() =>
                setModal({
                  type: "assignment",
                })
              }
            >
              <FiPlus /> Add your first assignment
            </button>
          </div>
        ) : (
          <div className={ui("assignment-list")}>
            {state.assignments.map((a) => (
              <article
                className={ui(`assignment-row ${a.done ? "finished" : ""}`)}
                key={a.id}
              >
                <button
                  className={ui(`check-button ${a.done ? "checked" : ""}`)}
                  aria-label={`${a.done ? "Reopen" : "Complete"} ${a.title}`}
                  disabled={busy}
                  onClick={() =>
                    update({
                      ...state,
                      assignments: state.assignments.map((t) =>
                        t.id === a.id
                          ? {
                              ...t,
                              done: !t.done,
                            }
                          : t,
                      ),
                    })
                  }
                >
                  {a.done && <FiCheck />}
                </button>
                <div className={ui("assignment-info")}>
                  <h3>{a.title}</h3>
                  <p>{a.description}</p>
                  <span className={ui("little-pill")}>{a.category}</span>
                  {a.due && (
                    <span
                      className={ui(
                        `due-date ${!a.done && a.due < today() ? "overdue" : ""}`,
                      )}
                    >
                      <FiClock />
                      {a.due}
                      {!a.done && a.due < today() ? " · Overdue" : ""}
                    </span>
                  )}
                  {a.submission && (
                    <p className={ui("submission")}>
                      Your submission: {a.submission}
                    </p>
                  )}
                </div>
                <div className={ui("row-actions")}>
                  <button
                    className={ui("text-button")}
                    onClick={() =>
                      setModal({
                        type: "assignment",
                        assignment: a,
                      })
                    }
                  >
                    Edit
                  </button>
                  <button
                    className={ui("text-button")}
                    onClick={() =>
                      setModal({
                        type: "submission",
                        assignment: a,
                      })
                    }
                  >
                    {a.submission ? "Edit submission" : "Submit work"}
                  </button>
                  <button
                    className={ui("icon-button")}
                    aria-label={`Delete ${a.title}`}
                    onClick={() =>
                      setModal({
                        type: "delete",
                        assignment: a,
                      })
                    }
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    )
  );
}
PersonalAssignments.propTypes = {
  assignmentMode: PropTypes.any,
  busy: PropTypes.any,
  page: PropTypes.any,
  setModal: PropTypes.any,
  state: PropTypes.any,
  today: PropTypes.any,
  update: PropTypes.any,
};
