import PropTypes from "prop-types";
import {
  FiArrowUpRight,
  FiArrowRight,
  FiBookOpen,
  FiCheckSquare,
  FiAward,
  FiTrendingUp,
  FiClock,
  FiPlay,
  FiPause,
  FiPlus,
  FiTarget,
  FiZap,
} from "react-icons/fi";
const cards = [
  [
    "Courses enrolled",
    FiBookOpen,
    "bg-violet-50 text-violet-600 dark:bg-violet-950/30 dark:text-violet-300",
  ],
  [
    "Lessons completed",
    FiCheckSquare,
    "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-300",
  ],
  [
    "Learning XP earned",
    FiAward,
    "bg-amber-50 text-amber-600 dark:bg-amber-950/30 dark:text-amber-300",
  ],
  [
    "Courses completed",
    FiTrendingUp,
    "bg-pink-50 text-pink-600 dark:bg-pink-950/30 dark:text-pink-300",
  ],
];
export default function DashboardOverview({
  courseCard,
  enrolled,
  finished,
  focusSeconds,
  focusing,
  go,
  lessonCount,
  nextCourse,
  openCourse,
  page,
  setFocusSeconds,
  setFocusing,
  setModal,
  state,
  xp,
}) {
  if (page !== "dashboard") return null;
  const today = new Date().toLocaleDateString("en-CA");
  const start = new Date();
  start.setDate(start.getDate() - 6);
  const since = start.toLocaleDateString("en-CA");
  const days = state.activity.filter((d) => d >= since && d <= today).length;
  const goal = Math.min(1, days / state.goal);
  const circumference = 2 * Math.PI * 43;
  const nextLesson = nextCourse?.lessons.find(
    (_, i) => !state.completed[nextCourse.id]?.includes(i),
  );
  const pending = state.assignments.filter((a) => !a.done);
  const values = [enrolled.length, lessonCount, xp, finished];
  return (
    <div className="space-y-7">
      <section className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_290px]">
        <div className="relative isolate overflow-hidden rounded-[22px] bg-[#29243d] p-7 text-white sm:p-9">
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-28 -z-10 h-96 w-96 rounded-full border-[55px] border-white/[.035]"
          />
          <div className="relative grid gap-7 sm:grid-cols-[1fr_170px]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[.15em] text-violet-200 dark:border-slate-700 dark:bg-slate-900/5">
                <span className="h-1 w-1 rounded-full bg-[#e2f2ba]" />
                Your next little breakthrough
              </span>
              <h2 className="mt-5 font-heading text-[28px] font-bold leading-[1.3] tracking-[-1px] text-white sm:text-[34px]">
                Keep showing up.
                <br />
                <span className="text-[#dcc8ff]">
                  The possibilities add up.
                </span>
              </h2>
              <p className="mt-4 max-w-sm text-xs leading-7 text-violet-100/65">
                A little focus today can lead to something brilliant tomorrow.
                Pick up your next lesson and make it yours.
              </p>
              <button
                onClick={() =>
                  nextCourse ? openCourse(nextCourse) : go("courses")
                }
                className="mt-6 inline-flex items-center gap-4 rounded-xl bg-[#e2f2ba] px-5 py-3 text-xs font-bold text-[#343b25] transition hover:bg-[#d3e7a4]"
              >
                Pick up where you left off
                <FiArrowUpRight className="h-4 w-4" />
              </button>
            </div>
            <div
              className="hidden items-center justify-center sm:flex"
              aria-hidden="true"
            >
              <div className="relative h-48 w-36 rotate-12 rounded-xl border border-white/10 bg-[#9c7bce] shadow-[14px_18px_0_0_#ffffff0a] dark:border-slate-700">
                <div className="absolute inset-x-3 bottom-2 h-2 rounded bg-white/75 dark:bg-slate-900/75" />
                <img
                  src="/brand/mark.svg"
                  width="48"
                  height="48"
                  className="mx-auto mt-8 -rotate-12 rounded-xl"
                  alt=""
                />
                <p className="mt-5 text-center font-heading text-sm font-semibold leading-6 text-white">
                  Curiosity
                  <br />
                  looks good on you.
                </p>
                <span className="absolute -right-5 -top-5 text-5xl text-[#e2f2ba]">
                  ✦
                </span>
              </div>
            </div>
          </div>
          <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5 dark:border-slate-700">
            <span className="flex items-center gap-2 text-[10px] text-violet-100/50">
              <FiBookOpen />
              {nextLesson
                ? "Up next: " + nextLesson.title
                : "Your next discovery is waiting."}
            </span>
            <button
              onClick={() => go("courses")}
              className="inline-flex items-center gap-2 text-[10px] text-violet-200"
            >
              View my learning
              <FiArrowRight />
            </button>
          </div>
        </div>
        <section className="rounded-[22px] border border-slate-200/70 bg-white p-6 dark:border-slate-700/70 dark:bg-slate-900">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
              <FiTarget className="text-violet-400" />
              Weekly intention
            </span>
            <button
              onClick={() => go("settings")}
              aria-label="Edit learning goal"
              className="rounded-lg p-1 text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50"
            >
              <FiArrowUpRight />
            </button>
          </div>
          <div
            className="relative mx-auto my-5 h-[120px] w-[120px]"
            role="progressbar"
            aria-label="Weekly active-day goal"
            aria-valuemin={0}
            aria-valuemax={state.goal}
            aria-valuenow={Math.min(days, state.goal)}
          >
            <svg
              className="h-full w-full -rotate-90"
              viewBox="0 0 100 100"
              aria-hidden="true"
            >
              <circle
                cx="50"
                cy="50"
                r="43"
                fill="none"
                stroke="#f0edf7"
                strokeWidth="6"
              />
              <circle
                cx="50"
                cy="50"
                r="43"
                fill="none"
                stroke="#9672cc"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={`${circumference * goal} ${circumference}`}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <strong className="font-heading text-3xl font-bold text-slate-700 dark:text-slate-200">
                {days}
                <span className="text-sm font-medium text-slate-300 dark:text-slate-500">
                  {" "}
                  / {state.goal}
                </span>
              </strong>
              <span className="mt-1 text-[10px] text-slate-400">
                active days
              </span>
            </div>
          </div>
          <h3 className="text-center font-heading text-sm font-bold text-slate-700 dark:text-slate-200">
            {days >= state.goal
              ? "Your intention, achieved."
              : "A little consistency goes a long way."}
          </h3>
          <div className="mt-5 flex justify-between">
            {Array.from(
              {
                length: 7,
              },
              (_, i) => {
                const d = new Date();
                d.setDate(d.getDate() - 6 + i);
                const active = state.activity.includes(
                  d.toLocaleDateString("en-CA"),
                );
                return (
                  <span key={i} className="flex flex-col items-center gap-2">
                    <span className="text-[8px] text-slate-400">
                      {d.toLocaleDateString(undefined, {
                        weekday: "narrow",
                      })}
                    </span>
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full text-[9px] ${active ? "bg-violet-500 text-white" : "bg-slate-50 text-slate-300 dark:bg-slate-800/50 dark:text-slate-500"}`}
                    >
                      {active ? "✓" : d.getDate()}
                    </span>
                  </span>
                );
              },
            )}
          </div>
        </section>
      </section>
      <section
        aria-label="Learning statistics"
        className="grid grid-cols-2 gap-3 lg:grid-cols-4"
      >
        {cards.map(([label, Icon, color], i) => (
          <article
            key={label}
            className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white p-4 sm:p-5 dark:border-slate-700/70 dark:bg-slate-900"
          >
            <span
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${color}`}
            >
              <Icon className="h-[18px] w-[18px]" />
            </span>
            <div>
              <strong className="block font-heading text-2xl font-bold leading-none tracking-tight text-slate-700 dark:text-slate-200">
                {values[i]}
              </strong>
              <span className="mt-2 block text-[10px] text-slate-400">
                {label}
              </span>
            </div>
          </article>
        ))}
      </section>
      <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_290px]">
        <div className="space-y-6">
          <section>
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <h2 className="font-heading text-lg font-bold tracking-tight text-slate-800 dark:text-slate-100">
                  Keep your curiosity going
                  <span className="ml-2 rounded-md bg-violet-100 px-2 py-0.5 text-[10px] font-semibold text-violet-600 dark:bg-violet-900/40 dark:text-violet-300">
                    {enrolled.length}
                  </span>
                </h2>
                <p className="mt-1.5 text-xs text-slate-400">
                  Right where you left off. Ready when you are.
                </p>
              </div>
              <button
                onClick={() => go("courses")}
                className="inline-flex items-center gap-2 text-xs font-medium text-violet-500 dark:text-violet-400"
              >
                View all
                <FiArrowRight />
              </button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {enrolled.slice(0, 2).map(courseCard)}
            </div>
            {!enrolled.length && (
              <div className="rounded-2xl border border-dashed border-violet-200 bg-white p-9 text-center dark:border-violet-900/60 dark:bg-slate-900">
                <FiBookOpen className="mx-auto text-3xl text-violet-300" />
                <h3 className="mt-4 text-sm font-semibold">
                  Your next chapter starts here.
                </h3>
                <button
                  onClick={() => go("courses")}
                  className="mt-4 text-xs font-semibold text-violet-600 dark:text-violet-300"
                >
                  Find your first course →
                </button>
              </div>
            )}
          </section>
          <section className="grid gap-3 sm:grid-cols-2">
            <button
              onClick={() => go("quizzes")}
              className="flex items-center gap-4 rounded-2xl border border-[#eadffc] bg-[#f1eafa] p-5 text-left dark:border-slate-700/70 dark:bg-slate-800"
            >
              <span className="rounded-xl bg-white/70 p-3 text-violet-500 dark:bg-slate-900/70 dark:text-violet-400">
                <FiZap />
              </span>
              <span>
                <strong className="block text-xs font-semibold text-violet-950 dark:text-violet-200">
                  A little practice, a fresh perspective.
                </strong>
                <span className="mt-1.5 block text-[10px] text-violet-500 dark:text-violet-400">
                  Try a quick quiz →
                </span>
              </span>
            </button>
            <button
              onClick={() => {
                go("assignments");
                setModal({
                  type: "assignment",
                });
              }}
              className="flex items-center gap-4 rounded-2xl border border-[#e0eadb] bg-[#edf2e9] p-5 text-left dark:border-slate-700/70 dark:bg-slate-800"
            >
              <span className="rounded-xl bg-white/70 p-3 text-emerald-600 dark:bg-slate-900/70 dark:text-emerald-300">
                <FiPlus />
              </span>
              <span>
                <strong className="block text-xs font-semibold text-emerald-950 dark:text-emerald-200">
                  Big ideas start with a small plan.
                </strong>
                <span className="mt-1.5 block text-[10px] text-emerald-600 dark:text-emerald-300">
                  Create an assignment →
                </span>
              </span>
            </button>
          </section>
        </div>
        <aside className="space-y-5">
          <section className="rounded-2xl border border-slate-200/70 bg-white p-6 dark:border-slate-700/70 dark:bg-slate-900">
            <div className="flex items-center justify-between">
              <h3 className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-200">
                <span className="h-2 w-2 rounded-full bg-amber-300" />A moment
                to focus
              </h3>
              <span className="text-[8px] font-bold uppercase tracking-widest text-slate-300 dark:text-slate-500">
                Your time
              </span>
            </div>
            <p className="mt-3 text-[11px] text-slate-400">
              One thing at a time. You’ve got this.
            </p>
            <div
              role="timer"
              aria-live="off"
              className="my-6 text-center font-heading text-[46px] font-semibold leading-none tracking-[4px] text-[#8b71ac] dark:text-slate-300"
            >
              {String(Math.floor(focusSeconds / 60)).padStart(2, "0")}
              <span className="text-violet-200">:</span>
              {String(focusSeconds % 60).padStart(2, "0")}
            </div>
            {focusSeconds === 0 && (
              <p
                role="status"
                className="mb-4 text-center text-xs text-emerald-600 dark:text-emerald-300"
              >
                Session complete. Time for a little break.
              </p>
            )}
            <button
              onClick={() => {
                if (!focusSeconds) setFocusSeconds(1500);
                setFocusing(!focusing);
              }}
              className="flex w-full items-center justify-between rounded-xl bg-[#8e73b6] px-4 py-3 text-xs font-medium text-white hover:bg-[#7b60a4]"
            >
              {focusing
                ? "Pause session"
                : focusSeconds === 0
                  ? "Start again"
                  : "Start focus session"}
              {focusing ? <FiPause /> : <FiPlay />}
            </button>
            {focusSeconds !== 1500 && (
              <button
                onClick={() => {
                  setFocusing(false);
                  setFocusSeconds(1500);
                }}
                className="mt-3 w-full text-center text-[10px] text-slate-400"
              >
                Reset timer
              </button>
            )}
          </section>
          <section className="rounded-2xl border border-slate-200/70 bg-white p-6 dark:border-slate-700/70 dark:bg-slate-900">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                On your radar
              </h3>
              <FiClock className="h-3.5 w-3.5 text-slate-300 dark:text-slate-500" />
            </div>
            {pending.slice(0, 3).map((a) => (
              <button
                key={a.id}
                onClick={() => go("assignments")}
                className="flex w-full items-center gap-3 border-b border-slate-100 py-3 text-left last:border-0 dark:border-slate-700/70"
              >
                <span className="rounded-lg bg-orange-50 p-2 text-orange-400 dark:bg-orange-950/30">
                  <FiCheckSquare />
                </span>
                <span className="min-w-0">
                  <strong className="block truncate text-[11px] font-medium text-slate-600 dark:text-slate-200">
                    {a.title}
                  </strong>
                  <span
                    className={`mt-1 block text-[9px] ${a.due && a.due < today ? "text-rose-500 dark:text-rose-400" : "text-slate-400"}`}
                  >
                    {a.due || "No due date"}
                    {a.due && a.due < today ? " · Overdue" : ""}
                  </span>
                </span>
              </button>
            ))}
            {!pending.length && (
              <div className="py-2 text-center">
                <FiCheckSquare className="mx-auto text-2xl text-violet-200" />
                <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
                  A clear desk. A fresh start.
                </p>
                <p className="mt-2 text-[10px] leading-6 text-slate-400">
                  Add a task to make room for your next idea.
                </p>
                <button
                  onClick={() => {
                    go("assignments");
                    setModal({
                      type: "assignment",
                    });
                  }}
                  className="mt-3 inline-flex items-center gap-2 text-[10px] font-medium text-violet-500 dark:text-violet-400"
                >
                  Create an assignment
                  <FiPlus />
                </button>
              </div>
            )}
          </section>
        </aside>
      </div>
    </div>
  );
}
DashboardOverview.propTypes = {
  courseCard: PropTypes.func.isRequired,
  enrolled: PropTypes.array.isRequired,
  finished: PropTypes.number.isRequired,
  focusSeconds: PropTypes.number.isRequired,
  focusing: PropTypes.bool.isRequired,
  go: PropTypes.func.isRequired,
  lessonCount: PropTypes.number.isRequired,
  nextCourse: PropTypes.object,
  openCourse: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired,
  setFocusSeconds: PropTypes.func.isRequired,
  setFocusing: PropTypes.func.isRequired,
  setModal: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
  xp: PropTypes.number.isRequired,
};
