import Select from "../Select";
import AccountSecurity from "../AccountSecurity";
import AppearanceSettings from "../theme/AppearanceSettings";
import { ui } from "../ui";
import { FiCheck, FiLogOut, FiArrowRight, FiDownload } from "react-icons/fi";
import { api, createWorkspace } from "../store";
import PropTypes from "prop-types";
export default function AccountSettings({
  busy,
  download,
  go,
  notify,
  page,
  session,
  setAuthMode,
  setFocusing,
  setModal,
  setState,
  setUser,
  state,
  update,
  user,
}) {
  return (
    page === "settings" && (
      <div className={ui("settings-grid")}>
        <AppearanceSettings />
        {user && <AccountSecurity user={user} setUser={setUser} />}
        <form
          className={ui("panel settings-form")}
          onSubmit={async (e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const name = data.get("name").trim();
            if (!name) return;
            if (
              await update({
                ...state,
                name,
                goal: Number(data.get("goal")),
              })
            ) {
              if (user)
                setUser({
                  ...user,
                  name,
                });
              notify("Your preferences have been saved.");
            }
          }}
        >
          <h2>A space that feels like you.</h2>
          <p className={ui("subtle")}>
            Small adjustments for a better learning rhythm.
          </p>
          <label>
            Your name
            <input
              name="name"
              required
              maxLength={50}
              defaultValue={user?.name || state.name}
              key={user?.id || "demo"}
            />
          </label>
          <label>
            Your weekly goal
            <Select
              label="Your weekly goal"
              name="goal"
              defaultValue={state.goal}
            >
              {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                <option key={n} value={n}>
                  {n} active {n === 1 ? "day" : "days"} per week
                </option>
              ))}
            </Select>
          </label>
          <button className={ui("button primary")} disabled={busy}>
            Save changes <FiCheck />
          </button>
        </form>
        <section className={ui("panel account-panel")}>
          <h2>Your account</h2>
          <p>
            {user
              ? `Signed in as ${user.email}`
              : "You’re exploring the demo. Create an account to save progress on the server and join the study lounge."}
          </p>
          {user ? (
            <button
              className={ui("button white")}
              onClick={async () => {
                try {
                  await api("/auth/logout", {
                    method: "POST",
                  });
                  session.current++;
                  setUser(null);
                  setState(createWorkspace());
                  setFocusing(false);
                  go("home");
                  notify("You’ve signed out. Your account progress is saved.");
                } catch (e) {
                  notify(e.message);
                }
              }}
            >
              <FiLogOut /> Sign out
            </button>
          ) : (
            <button
              className={ui("button primary")}
              onClick={() => {
                setAuthMode("register");
                setModal({
                  type: "auth",
                });
              }}
            >
              Create your account <FiArrowRight />
            </button>
          )}
          <hr />
          <h3>Your data, in your hands.</h3>
          <p>
            Download a copy of your learning progress and personal assignments.
          </p>
          <button className={ui("text-button")} onClick={download}>
            <FiDownload /> Export your data
          </button>
        </section>
      </div>
    )
  );
}
AccountSettings.propTypes = {
  busy: PropTypes.any,
  download: PropTypes.any,
  go: PropTypes.any,
  notify: PropTypes.any,
  page: PropTypes.any,
  session: PropTypes.any,
  setAuthMode: PropTypes.any,
  setFocusing: PropTypes.any,
  setModal: PropTypes.any,
  setState: PropTypes.any,
  setUser: PropTypes.any,
  state: PropTypes.any,
  update: PropTypes.any,
  user: PropTypes.any,
};
