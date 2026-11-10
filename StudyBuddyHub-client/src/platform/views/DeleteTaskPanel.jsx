import { ui } from "../ui";
import PropTypes from "prop-types";
export default function DeleteTaskPanel({
  busy,
  modal,
  setModal,
  state,
  update,
}) {
  return (
    modal.type === "delete" && (
      <>
        <h2 id="dialog-title">Remove this assignment?</h2>
        <p>
          “{modal.assignment.title}” and its submission will be removed from
          your workspace.
        </p>
        <div className={ui("modal-actions")}>
          <button className={ui("button white")} onClick={() => setModal(null)}>
            Keep it
          </button>
          <button
            className={ui("button danger")}
            disabled={busy}
            onClick={async () => {
              if (
                await update({
                  ...state,
                  assignments: state.assignments.filter(
                    (a) => a.id !== modal.assignment.id,
                  ),
                })
              )
                setModal(null);
            }}
          >
            Remove assignment
          </button>
        </div>
      </>
    )
  );
}
DeleteTaskPanel.propTypes = {
  busy: PropTypes.any,
  modal: PropTypes.any,
  setModal: PropTypes.any,
  state: PropTypes.any,
  update: PropTypes.any,
};
