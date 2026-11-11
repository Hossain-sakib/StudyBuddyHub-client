import { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import {
  FiBell,
  FiCheck,
  FiArrowUpRight,
  FiAward,
  FiClock,
  FiMessageCircle,
  FiX,
} from "react-icons/fi";
import { api } from "./store";
function relative(date) {
  const minutes = Math.floor((Date.now() - new Date(date).getTime()) / 60000);
  return minutes < 1
    ? "Just now"
    : minutes < 60
      ? `${minutes}m ago`
      : minutes < 1440
        ? `${Math.floor(minutes / 60)}h ago`
        : new Date(date).toLocaleDateString(undefined, {
            month: "short",
            day: "numeric",
          });
}
export default function NotificationCenter({ userId, onNavigate }) {
  const [open, setOpen] = useState(false),
    [items, setItems] = useState([]),
    [count, setCount] = useState(0),
    [error, setError] = useState(""),
    [loading, setLoading] = useState(true),
    [busy, setBusy] = useState(false);
  const root = useRef(),
    button = useRef();
  const load = useCallback(async () => {
    try {
      const data = await api("/notifications");
      setItems(data.items);
      setCount(data.unreadCount);
      setError("");
    } catch {
      setError("Updates are temporarily unavailable.");
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    let active = true;
    const refresh = () => {
      if (active && document.visibilityState === "visible") load();
    };
    setItems([]);
    setCount(0);
    load();
    const timer = setInterval(refresh, 30000);
    document.addEventListener("visibilitychange", refresh);
    return () => {
      active = false;
      clearInterval(timer);
      document.removeEventListener("visibilitychange", refresh);
    };
  }, [load, userId]);
  useEffect(() => {
    if (!open) return;
    load();
    const outside = (e) => {
      if (!root.current?.contains(e.target)) setOpen(false);
    };
    const key = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    document.addEventListener("mousedown", outside);
    document.addEventListener("keydown", key);
    return () => {
      document.removeEventListener("mousedown", outside);
      document.removeEventListener("keydown", key);
    };
  }, [open, load]);
  async function read(item) {
    setBusy(true);
    try {
      if (!item.readAt)
        await api("/notifications/" + item.id, {
          method: "PATCH",
        });
      setOpen(false);
      onNavigate(item.target);
      await load();
    } catch {
      setError("Could not update this notification. Please retry.");
    } finally {
      setBusy(false);
    }
  }
  return (
    <div ref={root} className="relative">
      <button
        ref={button}
        aria-label={`Notifications${count ? `, ${count} unread` : ""}`}
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={() => setOpen(!open)}
        className="relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 hover:text-violet-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
      >
        <FiBell className="h-4 w-4" />
        {count > 0 && (
          <span className="absolute -right-1 -top-1 flex min-w-[16px] items-center justify-center rounded-full border-2 border-white bg-violet-600 px-1 text-[8px] font-bold leading-[14px] text-white dark:border-slate-900">
            {count > 99 ? "99+" : count}
          </span>
        )}
      </button>
      {open && (
        <section
          role="dialog"
          aria-label="Notifications"
          className="fixed left-4 right-4 top-[88px] z-50 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl sm:absolute sm:left-auto sm:right-0 sm:top-12 sm:w-[380px] dark:border-slate-700 dark:bg-slate-900"
        >
          <div className="flex items-center justify-between border-b border-slate-100 p-5 dark:border-slate-800">
            <div>
              <h2 className="text-sm font-bold text-slate-800 dark:text-slate-100">
                Your little updates
              </h2>
              <p className="mt-1 text-[10px] text-slate-400">
                Progress, feedback, and a gentle nudge.
              </p>
            </div>
            <button
              aria-label="Close notifications"
              onClick={() => {
                setOpen(false);
                button.current?.focus();
              }}
              className="rounded-lg p-1 text-slate-400"
            >
              <FiX />
            </button>
          </div>
          {count > 0 && (
            <div className="flex justify-end border-b border-slate-100 px-5 py-2.5 dark:border-slate-800">
              <button
                disabled={busy}
                onClick={async () => {
                  setBusy(true);
                  try {
                    await api("/notifications/read", {
                      method: "PATCH",
                    });
                    await load();
                  } catch {
                    setError("Please try again.");
                  } finally {
                    setBusy(false);
                  }
                }}
                className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-violet-600 dark:text-violet-300"
              >
                <FiCheck />
                Mark all as read
              </button>
            </div>
          )}
          <div className="max-h-[min(60vh,440px)] overflow-y-auto">
            {error ? (
              <div className="p-7 text-center">
                <p
                  role="status"
                  className="text-xs text-slate-500 dark:text-slate-400"
                >
                  {error}
                </p>
                <button
                  onClick={load}
                  className="mt-3 text-xs font-semibold text-violet-500 dark:text-violet-400"
                >
                  Try again
                </button>
              </div>
            ) : loading ? (
              <p
                role="status"
                className="p-8 text-center text-xs text-slate-400"
              >
                Loading your updates…
              </p>
            ) : !items.length ? (
              <div className="p-9 text-center">
                <FiBell className="mx-auto text-2xl text-violet-200 dark:text-violet-700" />
                <h3 className="mt-4 text-sm font-semibold text-slate-700 dark:text-slate-200">
                  You’re all caught up.
                </h3>
                <p className="mt-2 text-xs leading-6 text-slate-400">
                  Your progress and feedback will appear here.
                </p>
              </div>
            ) : (
              items.map((item) => {
                const Icon =
                  item.type === "achievement"
                    ? FiAward
                    : item.type === "reminder"
                      ? FiClock
                      : FiMessageCircle;
                return (
                  <button
                    key={item.id}
                    disabled={busy}
                    onClick={() => read(item)}
                    className={`flex w-full gap-3 border-b border-slate-100 p-4 text-left transition last:border-0 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800 ${!item.readAt ? "bg-violet-50/50 dark:bg-violet-950/30" : ""}`}
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-violet-500 dark:bg-violet-900 dark:text-violet-300">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-start justify-between gap-2">
                        <strong className="text-[11px] font-semibold leading-5 text-slate-700 dark:text-slate-100">
                          {item.title}
                        </strong>
                        {!item.readAt && (
                          <i className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                        )}
                      </span>
                      <span className="mt-1 block text-[10px] leading-5 text-slate-400 dark:text-slate-400">
                        {item.body}
                      </span>
                      <span className="mt-2 flex items-center justify-between text-[9px] text-slate-300 dark:text-slate-500">
                        {relative(item.createdAt)}
                        <FiArrowUpRight />
                      </span>
                    </span>
                  </button>
                );
              })
            )}
          </div>
        </section>
      )}
    </div>
  );
}
NotificationCenter.propTypes = {
  userId: PropTypes.string.isRequired,
  onNavigate: PropTypes.func.isRequired,
};
