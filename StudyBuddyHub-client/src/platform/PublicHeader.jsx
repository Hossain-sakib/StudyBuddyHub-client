import BrandImage from "./BrandImage";
import ThemeToggle from "./theme/ThemeToggle";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
const links = [
  ["#explore", "Explore courses"],
  ["#how-it-works", "How it works"],
  ["#learn-together", "Community"],
  ["#questions", "FAQs"],
];
export default function PublicHeader({ onAuth }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const key = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", key);
    return () => document.removeEventListener("keydown", key);
  }, [open]);
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/50 bg-[#fffdf9]/95 backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-950">
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between gap-3 px-4 sm:px-9">
        <a
          href="#home"
          aria-label="Studybuddy home"
          className="flex items-center gap-2.5 font-heading text-lg sm:text-[22px] font-extrabold tracking-[-1px] text-[#29223b] dark:text-slate-100"
        >
          <BrandImage
            src="/brand/mark.svg"
            width="37"
            height="37"
            className="h-8 w-8 sm:h-[37px] sm:w-[37px]"
            alt=""
          />
          studybuddy
          <span className="-ml-2 text-violet-500 dark:text-violet-400">.</span>
        </a>
        <nav
          aria-label="Website navigation"
          className="hidden items-center gap-7 text-xs font-medium text-slate-500 md:flex dark:text-slate-400"
        >
          {links.map(([href, label]) => (
            <a
              className="transition hover:text-violet-600 dark:hover:text-violet-300"
              key={href}
              href={href}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-5">
          <ThemeToggle />
          <button
            onClick={() => onAuth("login")}
            className="text-xs font-semibold text-slate-600 hover:text-violet-600 dark:text-slate-200 dark:hover:text-violet-300"
          >
            Sign in
          </button>
          <button
            onClick={() => onAuth("register")}
            className="hidden items-center gap-3 rounded-xl bg-[#29243d] px-4 py-3 text-[11px] font-semibold text-white shadow-sm transition hover:bg-violet-700 sm:inline-flex"
          >
            Create an account
            <FiArrowUpRight className="h-3.5 w-3.5" />
          </button>
          <button
            aria-label={open ? "Close website menu" : "Open website menu"}
            aria-expanded={open}
            aria-controls="public-mobile-menu"
            onClick={() => setOpen(!open)}
            className="rounded-lg border border-slate-200 p-2 text-slate-600 md:hidden dark:border-slate-700/70 dark:text-slate-200"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="public-mobile-menu"
          aria-label="Mobile website navigation"
          className="space-y-1 border-t border-slate-100 bg-white px-5 py-4 shadow-lg md:hidden dark:border-slate-700/70 dark:bg-slate-900"
        >
          {links.map(([href, label]) => (
            <a
              href={href}
              onClick={() => setOpen(false)}
              key={href}
              className="block rounded-xl px-3 py-3 text-sm text-slate-600 hover:bg-violet-50 dark:text-slate-200 dark:hover:bg-violet-950/30"
            >
              {label}
            </a>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              onAuth("register");
            }}
            className="mt-2 w-full rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white"
          >
            Create your account
          </button>
        </nav>
      )}
    </header>
  );
}
PublicHeader.propTypes = {
  onAuth: PropTypes.func.isRequired,
};
