import { ui } from "../ui";
import { FiCheck } from "react-icons/fi";
import PropTypes from "prop-types";
export default function SubmissionPanel({
  busy,
  modal,
  notify,
  setModal,
  state,
  update,
}) {
  return (
    modal.type === "submission" && (
      <>
        <h2 id="dialog-title">Share what you’ve made.</h2>
        <p>{modal.assignment.title}</p>
        <form
          className={ui("modal-form")}
          onSubmit={async (e) => {
            e.preventDefault();
            const text = new FormData(e.currentTarget).get("submission").trim();
            if (!text) return;
            if (
              await update({
                ...state,
                assignments: state.assignments.map((a) =>
                  a.id === modal.assignment.id
                    ? {
                        ...a,
                        submission: text,
                        done: true,
                      }
                    : a,
                ),
              })
            ) {
              setModal(null);
              notify("Work submitted. Take a moment to celebrate!");
            }
          }}
        >
          <label>
            Your work or project link
            <textarea
              name="submission"
              required
              maxLength={4000}
              rows={5}
              defaultValue={modal.assignment.submission}
              placeholder="Paste your work, a link, or a reflection here."
            />
          </label>
          <button className={ui("button primary")} disabled={busy}>
            Save submission <FiCheck />
          </button>
        </form>
      </>
    )
  );
}
SubmissionPanel.propTypes = {
  busy: PropTypes.any,
  modal: PropTypes.any,
  notify: PropTypes.any,
  setModal: PropTypes.any,
  state: PropTypes.any,
  update: PropTypes.any,
};
