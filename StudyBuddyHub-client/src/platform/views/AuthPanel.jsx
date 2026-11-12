import BrandImage from "../BrandImage";
import { ui } from "../ui";
import { FiArrowRight } from "react-icons/fi";
import PropTypes from "prop-types";
export default function AuthPanel({
  authMode,
  authenticate,
  booting,
  busy,
  continueWithGoogle,
  modal,
  setAuthMode,
}) {
  if (authMode === "forgot-password")
    return (
      <>
        <h2 id="dialog-title">Find your way back.</h2>
        <p className={ui("subtle")}>
          Enter your account email to request a recovery link. Google accounts
          should use Google sign-in.
        </p>
        <form className={ui("modal-form")} onSubmit={authenticate}>
          <label>
            Email address
            <input
              name="email"
              type="email"
              required
              maxLength={254}
              autoComplete="email"
            />
          </label>
          <button className={ui("button primary")} disabled={busy || booting}>
            {busy ? "One moment…" : "Send recovery link"}
          </button>
        </form>
        <button
          className={ui("text-button auth-switch")}
          onClick={() => setAuthMode("login")}
        >
          Back to sign in
        </button>
      </>
    );
  return (
    modal.type === "auth" && (
      <>
        <BrandImage
          className={ui("brand-mark")}
          src="/brand/mark.svg"
          width="38"
          height="38"
          alt=""
        />
        <h2 id="dialog-title">
          {authMode === "register"
            ? "Your next chapter starts here."
            : "Good to see you again."}
        </h2>
        <p className={ui("subtle")}>
          {authMode === "register"
            ? "Save your progress. Find your people. Keep growing."
            : "Sign in to your learning space."}
        </p>
        <button
          type="button"
          className={ui("button google-button")}
          disabled={busy || booting}
          onClick={continueWithGoogle}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="#4285F4"
              d="M21.8 12.2c0-.7-.1-1.4-.2-2.1H12v4h5.5a4.7 4.7 0 0 1-2 3v2.5h3.3c1.9-1.8 3-4.3 3-7.4Z"
            />
            <path
              fill="#34A853"
              d="M12 22c2.7 0 5-.9 6.8-2.4l-3.3-2.5c-.9.6-2 1-3.5 1-2.6 0-4.8-1.7-5.6-4H3v2.6A10 10 0 0 0 12 22Z"
            />
            <path
              fill="#FBBC05"
              d="M6.4 14.1a6 6 0 0 1 0-4.2V7.3H3a10 10 0 0 0 0 9.4l3.4-2.6Z"
            />
            <path
              fill="#EA4335"
              d="M12 5.9c1.5 0 2.8.5 3.8 1.5l2.9-2.9A9.6 9.6 0 0 0 12 2a10 10 0 0 0-9 5.3l3.4 2.6c.8-2.3 3-4 5.6-4Z"
            />
          </svg>
          {busy ? "Connecting…" : "Continue with Google"}
        </button>
        <div className={ui("auth-divider")}>
          <span>or continue with email</span>
        </div>
        <form className={ui("modal-form")} onSubmit={authenticate}>
          {authMode === "register" && (
            <label>
              Your name
              <input name="name" required maxLength={50} autoComplete="name" />
            </label>
          )}
          <label>
            Email address
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              maxLength={254}
            />
          </label>
          <label>
            Password
            <input
              name="password"
              type="password"
              minLength={10}
              maxLength={128}
              required
              autoComplete={
                authMode === "register" ? "new-password" : "current-password"
              }
            />
          </label>
          {authMode === "register" && (
            <small className={ui("subtle")}>
              Use at least 10 characters. Your learning progress is saved to
              your account.
            </small>
          )}
          <button className={ui("button primary")} disabled={busy || booting}>
            {busy
              ? "One moment…"
              : authMode === "register"
                ? "Let’s get started"
                : "Sign in"}
            <FiArrowRight />
          </button>
        </form>
        {authMode === "login" && (
          <button
            type="button"
            className={ui("text-button auth-switch")}
            onClick={() => setAuthMode("forgot-password")}
          >
            Forgot password?
          </button>
        )}
        <button
          className={ui("text-button auth-switch")}
          onClick={() =>
            setAuthMode(authMode === "login" ? "register" : "login")
          }
        >
          {authMode === "login"
            ? "New here? Create an account"
            : "Already a buddy? Sign in"}
        </button>
      </>
    )
  );
}
AuthPanel.propTypes = {
  authMode: PropTypes.any,
  authenticate: PropTypes.any,
  booting: PropTypes.any,
  busy: PropTypes.any,
  continueWithGoogle: PropTypes.any,
  modal: PropTypes.any,
  setAuthMode: PropTypes.any,
};
