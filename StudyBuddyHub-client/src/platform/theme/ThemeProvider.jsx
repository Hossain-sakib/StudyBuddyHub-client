import { useCallback, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "./theme-context";
const KEY = "studybuddy-appearance";
export function ThemeProvider({ children }) {
  const [preference, setPreference] = useState("system");
  const [systemDark, setSystemDark] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let saved = "system";
    try {
      const value = localStorage.getItem(KEY);
      if (["light", "dark", "system"].includes(value)) saved = value;
    } catch {
      /* Storage may be unavailable in private browsing. */
    }
    setPreference(saved);
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemDark(media.matches);
    const changed = (e) => setSystemDark(e.matches);
    media.addEventListener("change", changed);
    const storage = (e) => {
      if (e.key === KEY)
        setPreference(
          ["light", "dark", "system"].includes(e.newValue)
            ? e.newValue
            : "system",
        );
    };
    window.addEventListener("storage", storage);
    setReady(true);
    return () => {
      media.removeEventListener("change", changed);
      window.removeEventListener("storage", storage);
    };
  }, []);
  const dark = preference === "dark" || (preference === "system" && systemDark);
  useEffect(() => {
    if (!ready) return;
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
  }, [dark, ready]);
  const choose = useCallback((value) => {
    if (!["light", "dark", "system"].includes(value)) return;
    setPreference(value);
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* Storage may be unavailable in private browsing. */
    }
  }, []);
  const value = useMemo(
    () => ({ preference, dark, setTheme: choose }),
    [preference, dark, choose],
  );
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
ThemeProvider.propTypes = { children: PropTypes.node.isRequired };
