import { ui } from "./ui";
import { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import {
  FiPlus,
  FiArrowRight,
  FiUsers,
  FiX,
  FiClock,
  FiEdit2,
  FiTrash2,
  FiCheck,
  FiAward,
} from "react-icons/fi";
import { api } from "./store";
export default function SharedAssignments({ user, notify, openAuth }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [modal, setModal] = useState(null);
  const [busy, setBusy] = useState(false);
  const dialog = useRef();
  const refresh = useCallback(async () => {
    try {
      setItems(await api("/assignments"));
      setError("");
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    if (user) refresh();
  }, [user, refresh]);
  useEffect(() => {
    if (modal) dialog.current?.showModal();
  }, [modal]);
  async function act(endpoint, method, body, success) {
    setBusy(true);
    try {
      await api(endpoint, {
        method,
        ...(body
          ? {
              body: JSON.stringify(body),
            }
          : {}),
      });
      await refresh();
      setModal(null);
      notify(success);
    } catch (e) {
      notify(e.message);
    } finally {
      setBusy(false);
    }
  }
  if (!user)
    return (
      <section className={ui("panel empty-state")}>
        <FiUsers />
        <h2>Learn with your people.</h2>
        <p>
          Create an account to share assignments, submit work, and exchange
          marks and feedback.
        </p>
        <button className={ui("button primary")} onClick={openAuth}>
          Join the learning community <FiArrowRight />
        </button>
      </section>
    );
  return (
    <section className={ui("panel")}>
      <div className={ui("section-heading")}>
        <div>
          <h2>Community assignments</h2>
          <p>Share a challenge. Try something new. Give thoughtful feedback.</p>
        </div>
        <button
          className={ui("button primary")}
          onClick={() =>
            setModal({
              type: "form",
            })
          }
        >
          <FiPlus /> Share an assignment
        </button>
      </div>
      {error && (
        <div className={ui("error-message")}>
          {error}{" "}
          <button className={ui("text-button")} onClick={refresh}>
            Try again
          </button>
        </div>
      )}
      {loading ? (
        <p className={ui("subtle")} role="status">
          Finding your next challenge…
        </p>
      ) : !items.length ? (
        <div className={ui("empty-state")}>
          <FiUsers />
          <h2>Good ideas grow when shared.</h2>
          <p>Be the first to create an assignment for your study community.</p>
        </div>
      ) : (
        <div className={ui("shared-grid")}>
          {items.map((a) => {
            const submission = a.submissions.find((s) => s.userId === user.id);
            return (
              <article className={ui("shared-card")} key={a.id}>
                <div className={ui("section-heading")}>
                  <span className={ui("little-pill")}>{a.category}</span>
                  <b className={ui("marks")}>{a.marks} marks</b>
                </div>
                <h3>{a.title}</h3>
                <p>{a.description || "A new challenge for curious minds."}</p>
                <div className={ui("shared-author")}>
                  By {a.ownerId === user.id ? "you" : a.ownerName}
                  {a.due && (
                    <span>
                      <FiClock /> Due {a.due}
                    </span>
                  )}
                </div>
                {submission && (
                  <div className={ui("last-score")}>
                    <FiAward />
                    {submission.grade === null
                      ? "Submitted · awaiting feedback"
                      : `${submission.grade}/${a.marks} marks · feedback ready`}
                  </div>
                )}
                <div className={ui("shared-actions")}>
                  <button
                    className={ui("button white")}
                    onClick={() =>
                      setModal({
                        type: "view",
                        assignment: a,
                      })
                    }
                  >
                    {a.ownerId === user.id
                      ? `Review ${a.submissions.length} submissions`
                      : submission
                        ? "View my submission"
                        : "View assignment"}
                    <FiArrowRight />
                  </button>
                  {a.ownerId === user.id && (
                    <>
                      <button
                        className={ui("icon-button")}
                        aria-label={`Edit ${a.title}`}
                        onClick={() =>
                          setModal({
                            type: "form",
                            assignment: a,
                          })
                        }
                      >
                        <FiEdit2 />
                      </button>
                      <button
                        className={ui("icon-button")}
                        aria-label={`Remove ${a.title}`}
                        onClick={() =>
                          setModal({
                            type: "delete",
                            assignment: a,
                          })
                        }
                      >
                        <FiTrash2 />
                      </button>
                    </>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      )}
      {modal && (
        <dialog
          ref={dialog}
          className={ui("modal shared-dialog")}
          aria-labelledby="shared-dialog-title"
          onCancel={(e) => {
            if (busy) e.preventDefault();
            else setModal(null);
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget && !busy) {
              const r = e.currentTarget.getBoundingClientRect();
              if (
                e.clientX < r.left ||
                e.clientX > r.right ||
                e.clientY < r.top ||
                e.clientY > r.bottom
              )
                setModal(null);
            }
          }}
        >
          <button
            className={ui("modal-close icon-button")}
            disabled={busy}
            aria-label="Close assignment dialog"
            onClick={() => setModal(null)}
          >
            <FiX />
          </button>
          {modal.type === "form" && (
            <>
              <span className={ui("eyebrow purple-text")}>LEARN TOGETHER</span>
              <h2 id="shared-dialog-title">
                {modal.assignment
                  ? "Refine your challenge."
                  : "Share a little challenge."}
              </h2>
              <form
                className={ui("modal-form")}
                onSubmit={(e) => {
                  e.preventDefault();
                  const data = Object.fromEntries(
                    new FormData(e.currentTarget),
                  );
                  data.marks = Number(data.marks);
                  act(
                    `/assignments${modal.assignment ? `/${modal.assignment.id}` : ""}`,
                    modal.assignment ? "PUT" : "POST",
                    data,
                    modal.assignment
                      ? "Assignment updated."
                      : "Your challenge is live in the community.",
                  );
                }}
              >
                <label>
                  Title
                  <input
                    name="title"
                    required
                    maxLength={120}
                    defaultValue={modal.assignment?.title}
                  />
                </label>
                <label>
                  Instructions
                  <textarea
                    name="description"
                    rows={4}
                    maxLength={2000}
                    defaultValue={modal.assignment?.description}
                  />
                </label>
                <div className={ui("form-columns")}>
                  <label>
                    Topic
                    <select
                      name="category"
                      defaultValue={modal.assignment?.category || "Design"}
                    >
                      {[
                        "Design",
                        "Development",
                        "Personal growth",
                        "Other",
                      ].map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </label>
                  <label>
                    Total marks
                    <input
                      type="number"
                      name="marks"
                      required
                      min={1}
                      max={1000}
                      defaultValue={modal.assignment?.marks || 100}
                    />
                  </label>
                </div>
                <label>
                  Due date (optional)
                  <input
                    type="date"
                    name="due"
                    defaultValue={modal.assignment?.due}
                  />
                </label>
                <button className={ui("button primary")} disabled={busy}>
                  {modal.assignment ? "Save assignment" : "Share assignment"}
                  <FiCheck />
                </button>
              </form>
            </>
          )}
          {modal.type === "view" && (
            <>
              <span className={ui("eyebrow purple-text")}>
                {modal.assignment.category} · {modal.assignment.marks} MARKS
              </span>
              <h2 id="shared-dialog-title">{modal.assignment.title}</h2>
              <p className={ui("shared-instructions")}>
                {modal.assignment.description}
              </p>
              {modal.assignment.ownerId === user.id ? (
                <>
                  <h3 className={ui("review-title")}>Learner submissions</h3>
                  {!modal.assignment.submissions.length && (
                    <p className={ui("subtle")}>
                      No submissions yet. Give your buddies a little time.
                    </p>
                  )}
                  {modal.assignment.submissions.map((s) => (
                    <article className={ui("review-card")} key={s.userId}>
                      <h3>{s.name}</h3>
                      <p>{s.text}</p>
                      <div className={ui("last-score")}>
                        {s.grade === null
                          ? "Awaiting your feedback"
                          : `${s.grade}/${modal.assignment.marks} marks`}
                      </div>
                      {s.feedback && <p>Feedback: {s.feedback}</p>}
                      <button
                        className={ui("text-button")}
                        onClick={() =>
                          setModal({
                            type: "grade",
                            assignment: modal.assignment,
                            submission: s,
                          })
                        }
                      >
                        {s.grade === null
                          ? "Give marks & feedback"
                          : "Edit feedback"}
                        <FiArrowRight />
                      </button>
                    </article>
                  ))}
                </>
              ) : (
                (() => {
                  const s = modal.assignment.submissions.find(
                    (entry) => entry.userId === user.id,
                  );
                  return (
                    <>
                      <div className={ui("review-title")}>
                        <h3>{s ? "Your submission" : "Give it a go."}</h3>
                      </div>
                      {s?.grade !== null && s ? (
                        <div className={ui("review-card")}>
                          <p>{s.text}</p>
                          <div className={ui("last-score")}>
                            <FiAward />
                            {s.grade}/{modal.assignment.marks} marks
                          </div>
                          <h3>Feedback from {modal.assignment.ownerName}</h3>
                          <p>{s.feedback || "No written feedback yet."}</p>
                        </div>
                      ) : (
                        <form
                          className={ui("modal-form")}
                          onSubmit={(e) => {
                            e.preventDefault();
                            const text = new FormData(e.currentTarget).get(
                              "text",
                            );
                            act(
                              `/assignments/${modal.assignment.id}/submissions`,
                              "POST",
                              {
                                text,
                              },
                              "Work submitted. Your buddy can now give feedback.",
                            );
                          }}
                        >
                          <label>
                            Your work or project link
                            <textarea
                              name="text"
                              required
                              maxLength={4000}
                              rows={5}
                              defaultValue={s?.text}
                              placeholder="Share your work or paste a project link…"
                            />
                          </label>
                          <p className={ui("subtle")}>
                            Your work is visible to you and the assignment
                            author.
                          </p>
                          <button
                            className={ui("button primary")}
                            disabled={busy}
                          >
                            {s ? "Update my submission" : "Submit my work"}
                            <FiArrowRight />
                          </button>
                        </form>
                      )}
                    </>
                  );
                })()
              )}
            </>
          )}
          {modal.type === "grade" && (
            <>
              <h2 id="shared-dialog-title">
                A little feedback goes a long way.
              </h2>
              <p>
                {modal.submission.name} · {modal.assignment.title}
              </p>
              <div className={ui("review-card")}>
                <p>{modal.submission.text}</p>
              </div>
              <form
                className={ui("modal-form")}
                onSubmit={(e) => {
                  e.preventDefault();
                  const data = Object.fromEntries(
                    new FormData(e.currentTarget),
                  );
                  data.grade = Number(data.grade);
                  act(
                    `/assignments/${modal.assignment.id}/submissions/${modal.submission.userId}`,
                    "PATCH",
                    data,
                    "Marks and feedback saved.",
                  );
                }}
              >
                <label>
                  Marks (out of {modal.assignment.marks})
                  <input
                    name="grade"
                    type="number"
                    min={0}
                    max={modal.assignment.marks}
                    step="0.5"
                    required
                    defaultValue={modal.submission.grade ?? ""}
                  />
                </label>
                <label>
                  Helpful feedback
                  <textarea
                    name="feedback"
                    rows={4}
                    maxLength={2000}
                    defaultValue={modal.submission.feedback}
                    placeholder="What worked well? What could they try next?"
                  />
                </label>
                <button className={ui("button primary")} disabled={busy}>
                  Save feedback <FiCheck />
                </button>
              </form>
            </>
          )}
          {modal.type === "delete" && (
            <>
              <h2 id="shared-dialog-title">Remove this challenge?</h2>
              <p>
                “{modal.assignment.title}” and all its submissions and marks
                will be deleted for everyone.
              </p>
              <div className={ui("modal-actions")}>
                <button
                  className={ui("button white")}
                  onClick={() => setModal(null)}
                >
                  Keep it
                </button>
                <button
                  className={ui("button danger")}
                  disabled={busy}
                  onClick={() =>
                    act(
                      `/assignments/${modal.assignment.id}`,
                      "DELETE",
                      null,
                      "Assignment removed.",
                    )
                  }
                >
                  Remove for everyone
                </button>
              </div>
            </>
          )}
        </dialog>
      )}
    </section>
  );
}
SharedAssignments.propTypes = {
  user: PropTypes.object,
  notify: PropTypes.func.isRequired,
  openAuth: PropTypes.func.isRequired,
};
