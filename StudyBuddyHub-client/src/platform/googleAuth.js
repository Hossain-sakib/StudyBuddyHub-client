// Firebase web configuration is public; backend secrets never belong here.
const config = {
  apiKey:
    import.meta.env.VITE_apiKey || "AIzaSyCeTkL--MNmwVGGMs6GfbSE3b1pwZ8ghEM",
  authDomain:
    import.meta.env.VITE_authDomain || "studdy-buddy-hub-8cc52.firebaseapp.com",
  projectId: import.meta.env.VITE_projectId || "studdy-buddy-hub-8cc52",
  appId:
    import.meta.env.VITE_appId || "1:984801036133:web:5cf1cabf3347324856c38c",
};
export async function googleIdentity() {
  const [
    { initializeApp, getApps },
    { getAuth, GoogleAuthProvider, signInWithPopup, signOut },
  ] = await Promise.all([import("@firebase/app"), import("@firebase/auth")]);
  const app =
    getApps().find((app) => app.name === "studybuddy-google") ||
    initializeApp(config, "studybuddy-google");
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  try {
    const result = await signInWithPopup(auth, provider);
    return await result.user.getIdToken();
  } finally {
    // The backend's HttpOnly session is the application session.
    await signOut(auth).catch(() => {});
  }
}
export function googleError(error) {
  const messages = {
    "auth/popup-closed-by-user":
      "Google sign-in was cancelled. You can try again anytime.",
    "auth/cancelled-popup-request": "Another sign-in window is already open.",
    "auth/popup-blocked":
      "Your browser blocked the Google window. Allow pop-ups for this site and try again.",
    "auth/unauthorized-domain":
      "Google sign-in is not enabled for this website yet. Add its domain in Firebase Authentication settings.",
    "auth/operation-not-allowed":
      "Enable the Google sign-in provider in Firebase Authentication to use this option.",
    "auth/network-request-failed":
      "Could not reach Google. Check your connection and try again.",
  };
  return (
    messages[error.code] ||
    error.message ||
    "Google sign-in failed. Please try again."
  );
}
