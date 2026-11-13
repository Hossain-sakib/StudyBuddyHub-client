import { lazy, Suspense, useEffect, useState } from "react";
import Landing from "./platform/Landing";
import { api } from "./platform/store";
const Platform = lazy(() => import("./platform/Platform"));
// Visitors load the public website first. Workspace code is downloaded only when needed.
export default function App() {
  const [session, setSession] = useState(null),
    [intent, setIntent] = useState(null);
  useEffect(() => {
    let active = true;
    api("/session")
      .then((data) => {
        if (active) setSession(data);
      })
      .catch(() => {
        if (active) setSession({ user: null });
      });
    function readIntent() {
      if (/^#(reset-password|verify-email)=[a-f0-9]{64}$/.test(location.hash))
        setIntent("account-action");
      else if (new URLSearchParams(location.search).get("signup") === "1")
        setIntent("register");
    }
    readIntent();
    window.addEventListener("hashchange", readIntent);
    return () => {
      active = false;
      window.removeEventListener("hashchange", readIntent);
    };
  }, []);
  const website = <Landing onAuth={setIntent} />;
  if (!session?.user && !intent) return website;
  const authMode = intent === "login" || intent === "register" ? intent : null;
  return (
    <Suspense fallback={website}>
      <Platform initialSession={session} initialAuthMode={authMode} />
    </Suspense>
  );
}
