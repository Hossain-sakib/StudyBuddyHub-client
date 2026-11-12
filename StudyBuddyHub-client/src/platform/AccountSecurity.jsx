import { useState } from "react";
import PropTypes from "prop-types";
import { api } from "./store";
export default function AccountSecurity({ user, setUser }) {
  const [message, setMessage] = useState(""),
    [busy, setBusy] = useState(false);
  async function act(fn) {
    setBusy(true);
    try {
      await fn();
    } catch (e) {
      setMessage(e.message);
    } finally {
      setBusy(false);
    }
  }
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
      <h2 className="text-lg font-bold">Security & notifications</h2>
      <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
        {user.emailVerified
          ? "Your email address is verified."
          : "Verify your email before turning on email updates."}
      </p>
      {!user.emailVerified && (
        <button
          disabled={busy}
          className="mt-4 rounded-xl border border-slate-200 px-4 py-2 text-sm dark:border-slate-700"
          onClick={() =>
            act(async () => {
              const data = await api("/account/verification", {
                method: "POST",
              });
              setMessage(data.message);
            })
          }
        >
          Send verification email
        </button>
      )}
      <label className="mt-6 flex items-start gap-3 text-sm leading-6">
        <input
          type="checkbox"
          className="mt-1 accent-violet-600"
          checked={!!user.emailNotifications}
          disabled={busy || !user.emailVerified}
          onChange={(e) => {
            const value = e.target.checked;
            act(async () => {
              await api("/account/preferences", {
                method: "PATCH",
                body: JSON.stringify({ emailNotifications: value }),
              });
              setUser({ ...user, emailNotifications: value });
              setMessage("Email preferences saved.");
            });
          }}
        />
        <span>
          Email me learning milestones and assignment feedback.
          <span className="block text-xs text-slate-500 dark:text-slate-400">
            In-app notifications remain available. Email delivery requires the
            email service to be configured.
          </span>
        </span>
      </label>
      {user.provider !== "google" && (
        <button
          disabled={busy}
          className="mt-5 text-sm font-medium text-violet-600 dark:text-violet-300"
          onClick={() =>
            act(async () => {
              const data = await api("/auth/forgot-password", {
                method: "POST",
                body: JSON.stringify({ email: user.email }),
              });
              setMessage(data.message);
            })
          }
        >
          Request a password reset
        </button>
      )}
      {message && (
        <p role="status" className="mt-4 text-sm leading-6">
          {message}
        </p>
      )}
    </section>
  );
}
AccountSecurity.propTypes = {
  user: PropTypes.object.isRequired,
  setUser: PropTypes.func.isRequired,
};
