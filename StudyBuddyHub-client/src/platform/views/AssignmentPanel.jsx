import Select from "../Select";
import { ui } from "../ui";
import { FiPlus } from "react-icons/fi";
import PropTypes from "prop-types";
export default function AssignmentPanel({
  busy,
  modal,
  notify,
  setModal,
  state,
  update,
}) {
  return (
    modal.type === "assignment" && (
      <>
        <span className={ui("eyebrow purple-text")}>MAKE A LITTLE PLAN</span>
        <h2 id="dialog-title">
          {modal.assignment
            ? "Refine your next step."
            : "What will you work on?"}
        </h2>
        <form
          className={ui("modal-form")}
          onSubmit={async (e) => {
            e.preventDefault();
            const data = Object.fromEntries(new FormData(e.currentTarget));
            data.title = data.title.trim();
            if (!data.title) return;
            if (
              await update({
                ...state,
                assignments: modal.assignment
                  ? state.assignments.map((a) =>
                      a.id === modal.assignment.id
                        ? {
                            ...a,
                            ...data,
                          }
                        : a,
                    )
                  : [
                      ...state.assignments,
                      {
                        ...data,
                        id: crypto.randomUUID(),
                        done: false,
                        submission: "",
                      },
                    ],
              })
            ) {
              setModal(null);
              notify("Your next step is on the list.");
            }
          }}
        >
          <label>
            Assignment title
            <input
              name="title"
              required
              maxLength={120}
              defaultValue={modal.assignment?.title}
              placeholder="e.g. Design a welcoming homepage"
            />
          </label>
          <label>
            A little more detail
            <textarea
              name="description"
              maxLength={2000}
              rows={3}
              defaultValue={modal.assignment?.description}
              placeholder="What would you like to accomplish?"
            />
          </label>
          <div className={ui("form-columns")}>
            <label>
              Topic
              <Select
                label="Assignment topic"
                name="category"
                defaultValue={modal.assignment?.category}
              >
                {["Design", "Development", "Personal growth", "Other"].map(
                  (c) => (
                    <option key={c}>{c}</option>
                  ),
                )}
              </Select>
            </label>
            <label>
              Due date (optional)
              <input
                type="date"
                name="due"
                defaultValue={modal.assignment?.due}
              />
            </label>
          </div>
          <button className={ui("button primary")} disabled={busy}>
            {modal.assignment ? "Save assignment" : "Add assignment"} <FiPlus />
          </button>
        </form>
      </>
    )
  );
}
AssignmentPanel.propTypes = {
  busy: PropTypes.any,
  modal: PropTypes.any,
  notify: PropTypes.any,
  setModal: PropTypes.any,
  state: PropTypes.any,
  update: PropTypes.any,
};
