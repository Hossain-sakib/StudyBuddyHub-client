import BrandImage from "./BrandImage";
import ThemeToggle from "./theme/ThemeToggle";
import NotificationCenter from "./NotificationCenter";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  FiGrid,
  FiBookOpen,
  FiCheckSquare,
  FiMessageCircle,
  FiBarChart2,
  FiSettings,
  FiMenu,
  FiX,
  FiChevronRight,
  FiArrowUpRight,
  FiShield,
  FiZap,
} from "react-icons/fi";
const links = [
  ["dashboard", FiGrid, "Overview"],
  ["courses", FiBookOpen, "My learning"],
  ["assignments", FiCheckSquare, "Assignments"],
  ["quizzes", FiZap, "Practice quizzes"],
  ["community", FiMessageCircle, "Study lounge"],
  ["progress", FiBarChart2, "My progress"],
];
export default function WorkspaceShell({ user, page, onNavigate, children }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const escape = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);
  const title =
    links.find(([id]) => id === page)?.[2] ||
    (page === "admin" ? "Administration" : "Settings");
  function go(id) {
    setOpen(false);
    onNavigate(id);
  }
  return (
    <div className="min-h-screen bg-[#f5f6fa] text-[#25283d] dark:bg-slate-950 dark:text-slate-100">
      <a
        href="#main-content"
        className="sr-only fixed left-4 top-4 z-[80] rounded-xl bg-white px-4 py-3 text-sm shadow-lg focus:not-sr-only dark:bg-slate-900"
      >
        Skip to workspace content
      </a>
      {open && (
        <button
          aria-label="Close navigation"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-sm lg:hidden"
        />
      )}
      <aside
        aria-label="Workspace sidebar"
        className={`fixed inset-y-0 left-0 z-50 flex w-[252px] flex-col border-r border-slate-200/70 bg-white overflow-y-auto overscroll-contain px-5 py-6 transition-transform duration-200 motion-reduce:transition-none lg:translate-x-0  dark:border-slate-700/70 dark:bg-slate-900 ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="mb-8 flex items-center justify-between">
          <a
            href="#dashboard"
            onClick={() => go("dashboard")}
            className="flex items-center gap-2.5 font-heading text-[22px] font-extrabold tracking-[-1px]"
          >
            <BrandImage src="/brand/mark.svg" alt="" width="37" height="37" />
            studybuddy
            <span className="-ml-2 text-violet-500 dark:text-violet-400">
              .
            </span>
          </a>
          <button
            aria-label="Close navigation menu"
            onClick={() => setOpen(false)}
            className="rounded-lg p-1.5 text-slate-400 lg:hidden"
          >
            <FiX />
          </button>
        </div>
        <p className="mb-4 px-3 text-[10px] font-bold uppercase tracking-[.18em] text-slate-400">
          Your learning space
        </p>
        <nav aria-label="Main navigation" className="space-y-1.5">
          {links.map(([id, Icon, label]) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={page === id ? "page" : undefined}
              onClick={() => go(id)}
              className={`group flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-[13px] font-medium transition-colors ${page === id ? "bg-violet-50 font-semibold text-violet-700 dark:bg-violet-950/30 dark:text-violet-300" : "text-slate-500 hover:bg-slate-50 hover:text-slate-800 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-slate-100"}`}
            >
              <Icon className="h-[18px] w-[18px]" />
              <span>{label}</span>
              {page === id && (
                <span className="ml-auto h-1.5 w-1.5 rounded-full bg-violet-500" />
              )}
            </a>
          ))}
        </nav>
        {user.role === "admin" && (
          <a
            href="#admin"
            onClick={() => go("admin")}
            className={`mt-5 flex items-center gap-3 rounded-xl border px-3.5 py-2.5 text-[13px] font-semibold ${page === "admin" ? "border-slate-800 bg-slate-900 text-white" : "border-slate-200 text-slate-600 hover:bg-slate-50 dark:border-slate-700/70 dark:text-slate-200 dark:hover:bg-slate-800/50"}`}
          >
            <FiShield />
            Administration
            <FiChevronRight className="ml-auto" />
          </a>
        )}
        <div className="mt-auto pt-4">
          <div className="relative mb-6 hidden overflow-hidden rounded-2xl [@media(min-height:900px)]:block bg-[#f0edff] p-5 dark:bg-slate-800">
            <span
              className="absolute -right-2 -top-3 text-7xl text-violet-200"
              aria-hidden="true"
            >
              ✦
            </span>
            <p className="relative font-heading text-sm font-bold leading-6 text-violet-950 dark:text-violet-200">
              A little better.
              <br />
              Every day.
            </p>
            <p className="mt-2 text-xs leading-6 text-violet-600/80 dark:text-violet-300">
              Your next discovery is closer than you think.
            </p>
            <button
              onClick={() => go("courses")}
              className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-violet-700 dark:text-violet-300"
            >
              Find your next course
              <FiArrowUpRight />
            </button>
          </div>
          <a
            href="#settings"
            onClick={() => go("settings")}
            className={`mb-4 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm ${page === "settings" ? "bg-violet-50 text-violet-700 dark:bg-violet-950/30 dark:text-violet-300" : "text-slate-500 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800/50"}`}
          >
            <FiSettings />
            Settings
          </a>
          <button
            onClick={() => go("settings")}
            className="flex w-full items-center gap-3 border-t border-slate-100 pt-5 text-left dark:border-slate-700/70"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 font-semibold text-amber-900 dark:bg-amber-900/40 dark:text-amber-200">
              {user.name.slice(0, 1).toUpperCase()}
            </span>
            <span className="min-w-0 flex-1">
              <strong className="block truncate text-xs font-semibold">
                {user.name}
              </strong>
              <span className="mt-1 block text-[10px] text-slate-400">
                {user.role === "admin" ? "Administrator" : "Curious mind"}
              </span>
            </span>
            <FiChevronRight className="text-slate-300 dark:text-slate-500" />
          </button>
        </div>
      </aside>
      <div className="lg:pl-[252px]">
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between gap-4 border-b border-slate-200/60 bg-white/95 px-5 backdrop-blur-xl sm:px-8 dark:border-slate-700/70 dark:bg-slate-900/95">
          <div className="flex items-center gap-3">
            <button
              aria-label="Open navigation"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="rounded-lg border border-slate-200 p-2 text-slate-500 lg:hidden dark:border-slate-700/70 dark:text-slate-400"
            >
              <FiMenu />
            </button>
            <div className="flex items-center gap-3 text-xs">
              <span className="hidden text-slate-400 sm:inline">Workspace</span>
              <FiChevronRight className="hidden h-3 w-3 text-slate-300 sm:block dark:text-slate-500" />
              <span className="font-medium text-slate-600 dark:text-slate-200">
                {title}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:gap-5">
            <ThemeToggle />
            <NotificationCenter userId={user.id} onNavigate={go} />
            <span className="hidden text-xs text-slate-400 md:block">
              {new Date().toLocaleDateString(undefined, {
                weekday: "short",
                month: "short",
                day: "numeric",
              })}
            </span>
            <button
              onClick={() => go("settings")}
              className="hidden md:inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-[10px] font-medium text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-950/30 dark:text-emerald-300"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Account connected
            </button>
            <button
              aria-label="Open profile settings"
              onClick={() => go("settings")}
              className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-violet-100 text-xs font-bold text-violet-700 ring-1 ring-violet-100 dark:border-slate-700 dark:bg-violet-900/40 dark:text-violet-300"
            >
              {user.name.slice(0, 1).toUpperCase()}
            </button>
          </div>
        </header>
        <main
          id="main-content"
          className="mx-auto max-w-[1440px] overflow-y-auto overscroll-contain px-5 py-6 sm:px-8 sm:py-9 xl:px-10"
        >
          {children}
        </main>
      </div>
    </div>
  );
}
WorkspaceShell.propTypes = {
  user: PropTypes.object.isRequired,
  page: PropTypes.string.isRequired,
  onNavigate: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
