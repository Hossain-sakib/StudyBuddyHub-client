import { ui } from "../ui";
import { FiMessageCircle, FiSend } from "react-icons/fi";
import PropTypes from "prop-types";
export default function StudyLounge({
  busy,
  chat,
  chatError,
  page,
  room,
  sendMessage,
  setRoom,
  user,
}) {
  return (
    page === "community" && (
      <section className={ui("lounge panel")}>
        <aside className={ui("rooms")}>
          <span className={ui("eyebrow")}>FIND YOUR PEOPLE</span>
          <h3>Study spaces</h3>
          {[
            ["general", "The common room"],
            ["design", "Design corner"],
            ["development", "Code & coffee"],
          ].map(([id, label]) => (
            <button
              className={ui(room === id ? "selected" : "")}
              onClick={() => setRoom(id)}
              key={id}
            >
              <span>#</span>
              {label}
            </button>
          ))}
          <div className={ui("room-note")}>
            <FiMessageCircle />
            <p>
              {user
                ? "Messages are shared with other signed-in learners. Be kind, stay curious."
                : "This is your private demo lounge. Sign in to exchange messages with other learners."}
            </p>
          </div>
        </aside>
        <div className={ui("chat-main")}>
          <div className={ui("chat-heading")}>
            <h2>
              #{" "}
              {
                {
                  general: "The common room",
                  design: "Design corner",
                  development: "Code & coffee",
                }[room]
              }
            </h2>
            <p>A little conversation can spark a big idea.</p>
          </div>
          <div className={ui("messages")} aria-live="polite">
            {chatError && <p className={ui("error-message")}>{chatError}</p>}
            {!chat.length && (
              <div className={ui("empty-state")}>
                <FiMessageCircle />
                <h3>Start something good.</h3>
                <p>Share what you’re learning or ask your first question.</p>
              </div>
            )}
            {chat.map((m) => (
              <article className={ui("message")} key={m.id}>
                <span className={ui("avatar")}>{m.name.slice(0, 1)}</span>
                <div>
                  <div className={ui("message-meta")}>
                    <b>{m.name}</b>
                    <time>
                      {new Date(m.createdAt).toLocaleTimeString(undefined, {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </time>
                  </div>
                  <p>{m.text}</p>
                </div>
              </article>
            ))}
          </div>
          <form className={ui("message-form")} onSubmit={sendMessage}>
            <input
              name="message"
              aria-label="Message"
              placeholder="Share a thought. Ask a question. Say hello."
              required
              maxLength={1000}
              autoComplete="off"
            />
            <button
              className={ui("button primary")}
              aria-label="Send message"
              disabled={busy}
            >
              <FiSend />
            </button>
          </form>
        </div>
      </section>
    )
  );
}
StudyLounge.propTypes = {
  busy: PropTypes.any,
  chat: PropTypes.any,
  chatError: PropTypes.any,
  page: PropTypes.any,
  room: PropTypes.any,
  sendMessage: PropTypes.any,
  setRoom: PropTypes.any,
  user: PropTypes.any,
};
