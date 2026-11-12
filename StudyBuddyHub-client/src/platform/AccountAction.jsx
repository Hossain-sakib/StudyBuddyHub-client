import BrandImage from "./BrandImage";
import { useState } from "react";
import PropTypes from "prop-types";
import { api } from "./store";
export default function AccountAction({ action, onClose }) {
  const [busy, setBusy] = useState(false),
    [message, setMessage] = useState(""),
    [error, setError] = useState("");
  const reset = action.type === "reset-password";
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 p-4 dark:bg-slate-950">
      <section className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-7 text-slate-800 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
        <BrandImage
          src="/brand/mark.svg"
          alt="Studybuddy"
          width="48"
          height="48"
        />
        <h1 className="mt-6 text-2xl font-bold">
          {reset ? "A fresh start for your account" : "Confirm your email"}
        </h1>
        <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
          {reset
            ? "Choose a strong password of 10–128 characters."
            : "Confirm this address to receive optional learning updates."}
        </p>
        {error && (
          <p
            role="alert"
            className="mt-5 text-sm text-rose-600 dark:text-rose-300"
          >
            {error}
          </p>
        )}
        {message ? (
          <p
            role="status"
            className="mt-5 text-sm leading-6 text-emerald-700 dark:text-emerald-300"
          >
            {message}
          </p>
        ) : (
          <form
            className="mt-6 space-y-4"
            onSubmit={async (e) => {
              e.preventDefault();
              const values = Object.fromEntries(new FormData(e.currentTarget));
              if (reset && values.password !== values.confirm) {
                setError("Passwords must match.");
                return;
              }
              setBusy(true);
              setError("");
              try {
                const result = await api(
                  `/auth/${reset ? "reset-password" : "verify-email"}`,
                  {
                    method: "POST",
                    body: JSON.stringify({
                      token: action.token,
                      password: values.password,
                    }),
                  },
                );
                setMessage(result.message);
              } catch (e) {
                setError(e.message);
              } finally {
                setBusy(false);
              }
            }}
          >
            {reset && (
              <>
                {[
                  ["password", "New password"],
                  ["confirm", "Confirm new password"],
                ].map(([name, label]) => (
                  <label key={name} className="block text-sm">
                    {label}
                    <input
                      name={name}
                      type="password"
                      required
                      minLength={10}
                      maxLength={128}
                      autoComplete="new-password"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-transparent p-3 dark:border-slate-700"
                    />
                  </label>
                ))}
              </>
            )}
            <button
              disabled={busy}
              className="w-full rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white disabled:opacity-50"
            >
              {busy
                ? "One moment…"
                : reset
                  ? "Update password"
                  : "Verify email"}
            </button>
          </form>
        )}
        <button
          onClick={onClose}
          className="mt-6 text-sm font-medium text-violet-600 dark:text-violet-300"
        >
          Return to Studybuddy
        </button>
      </section>
    </main>
  );
}
AccountAction.propTypes = {
  action: PropTypes.shape({ type: PropTypes.string, token: PropTypes.string })
    .isRequired,
  onClose: PropTypes.func.isRequired,
};
