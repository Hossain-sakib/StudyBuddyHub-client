import AccountAction from "./AccountAction";
import { FiBookmark } from "react-icons/fi";
import CourseArtwork from "./CourseArtwork";
import WorkspaceShell from "./WorkspaceShell";
import DeleteTaskPanel from "./views/DeleteTaskPanel";
import SubmissionPanel from "./views/SubmissionPanel";
import AssignmentPanel from "./views/AssignmentPanel";
import QuizPanel from "./views/QuizPanel";
import LessonPanel from "./views/LessonPanel";
import AuthPanel from "./views/AuthPanel";
import AccountSettings from "./views/AccountSettings";
import LearnerProgress from "./views/LearnerProgress";
import StudyLounge from "./views/StudyLounge";
import PracticeQuizzes from "./views/PracticeQuizzes";
import PersonalAssignments from "./views/PersonalAssignments";
import CourseCatalog from "./views/CourseCatalog";
import DashboardOverview from "./views/DashboardOverview";
import { lazy, Suspense } from "react";
const Admin = lazy(() => import("./Admin"));
import { ui } from "./ui";
import { useEffect, useRef, useState } from "react";
import {
  FiGrid,
  FiBookOpen,
  FiCheckSquare,
  FiMessageCircle,
  FiBarChart2,
  FiArrowUpRight,
  FiArrowRight,
  FiPlus,
  FiX,
  FiZap,
  FiClock,
} from "react-icons/fi";
import { googleIdentity, googleError } from "./googleAuth";
import Landing from "./Landing";
import SharedAssignments from "./SharedAssignments";
import { api, courses as starterCourses, createWorkspace } from "./store";
const nav = [
  ["dashboard", FiGrid, "Overview"],
  ["courses", FiBookOpen, "My learning"],
  ["assignments", FiCheckSquare, "Assignments"],
  ["quizzes", FiZap, "Practice quizzes"],
  ["community", FiMessageCircle, "Study lounge"],
  ["progress", FiBarChart2, "My progress"],
];
const percent = (state, course) =>
  course.lessons.length
    ? Math.min(
        100,
        Math.round(
          ((state.completed[course.id]?.length || 0) / course.lessons.length) *
            100,
        ),
      )
    : 0;
const today = () => new Date().toLocaleDateString("en-CA");
function readPage() {
  const page =
    typeof window === "undefined" ? "" : window.location.hash.slice(1);
  return [...nav.map((n) => n[0]), "settings", "admin"].includes(page)
    ? page
    : "dashboard";
}
export default function Platform() {
  const [accountAction, setAccountAction] = useState(null);
  useEffect(() => {
    function readAction() {
      const match = window.location.hash.match(
        /^#(reset-password|verify-email)=([a-f0-9]{64})$/,
      );
      if (match) {
        setAccountAction({ type: match[1], token: match[2] });
        window.history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search,
        );
      }
    }
    readAction();
    window.addEventListener("hashchange", readAction);
    return () => window.removeEventListener("hashchange", readAction);
  }, []);
  const [courses, setCourses] = useState(starterCourses);
  const [page, setPage] = useState(readPage);
  const [state, setState] = useState(createWorkspace);
  const [user, setUser] = useState(null);
  const [booting, setBooting] = useState(true);
  const [search, setSearch] = useState("");
  const [assignmentMode, setAssignmentMode] = useState("personal");
  const [filter, setFilter] = useState("All topics");
  const [modal, setModal] = useState(null);
  const [notice, setNotice] = useState("");
  const [busy, setBusy] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [room, setRoom] = useState("general");
  const [messages, setMessages] = useState([]);
  const [chatError, setChatError] = useState("");
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizResult, setQuizResult] = useState(null);
  const noticeTimer = useRef();
  const formRef = useRef();
  const session = useRef(0);
  const [focusSeconds, setFocusSeconds] = useState(25 * 60);
  const [focusing, setFocusing] = useState(false);
  const focusRemaining = useRef(focusSeconds);
  useEffect(() => {
    focusRemaining.current = focusSeconds;
  }, [focusSeconds]);
  function notify(message) {
    setNotice(message);
    clearTimeout(noticeTimer.current);
    noticeTimer.current = setTimeout(() => setNotice(""), 5000);
  }
  function go(value) {
    if (value === "shared-assignments") {
      setAssignmentMode("shared");
      value = "assignments";
    }
    window.location.hash = value;
    setPage(value);
    setSearch("");
  }
  useEffect(() => {
    let active = true;
    api("/courses")
      .then((value) => {
        if (active && Array.isArray(value) && value.length) setCourses(value);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, [user]);
  useEffect(() => {
    // Each workspace route starts at its heading, independent of the previous page.
    if (user?.id) window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [page, user?.id]);
  useEffect(() => {
    const handle = () => {
      if (window.location.hash !== "#main-content") setPage(readPage());
    };
    window.addEventListener("hashchange", handle);
    return () => window.removeEventListener("hashchange", handle);
  }, []);
  useEffect(() => {
    let active = true;
    const version = session.current;
    api("/session")
      .then((data) => {
        if (active && version === session.current) {
          setUser(data.user);
          setState(data.state);
        }
      })
      .catch(() => {})
      .finally(() => {
        if (active) setBooting(false);
      });
    return () => {
      active = false;
    };
  }, []);
  useEffect(() => {
    if (!focusing) return;
    const deadline = Date.now() + focusRemaining.current * 1000;
    const timer = setInterval(() => {
      const remaining = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
      setFocusSeconds(remaining);
      if (!remaining) setFocusing(false);
    }, 250);
    return () => clearInterval(timer);
    // A deadline keeps the countdown accurate when browser timers are throttled.
  }, [focusing]);
  useEffect(() => {
    if (page !== "community" || !user) return;
    let active = true;
    async function poll() {
      try {
        const data = await api(`/messages?room=${room}`);
        if (active) {
          setMessages(data);
          setChatError("");
        }
      } catch (e) {
        if (active) setChatError(e.message);
      }
    }
    setMessages([]);
    poll();
    const timer = setInterval(poll, 4000);
    return () => {
      active = false;
      clearInterval(timer);
    };
  }, [page, room, user]);
  useEffect(() => {
    if (!modal) return;
    const previous = document.activeElement;
    const timer = setTimeout(
      () => formRef.current?.querySelector("input, button, textarea")?.focus(),
      0,
    );
    function keyboard(e) {
      if (e.key === "Escape") setModal(null);
      if (e.key === "Tab") {
        const nodes = [
          ...(formRef.current?.querySelectorAll(
            'button:not(:disabled),input,textarea,select,[tabindex="0"]',
          ) || []),
        ];
        if (!nodes.length) return;
        if (e.shiftKey && document.activeElement === nodes[0]) {
          e.preventDefault();
          nodes.at(-1).focus();
        } else if (!e.shiftKey && document.activeElement === nodes.at(-1)) {
          e.preventDefault();
          nodes[0].focus();
        }
      }
    }
    document.addEventListener("keydown", keyboard);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("keydown", keyboard);
      previous?.focus();
    };
  }, [modal]);
  async function update(next) {
    setBusy(true);
    try {
      if (!user) throw new Error("Sign in to save your progress.");
      await api("/state", {
        method: "PUT",
        body: JSON.stringify(next),
      });
      setState(next);
      return true;
    } catch (e) {
      notify(e.message);
      return false;
    } finally {
      setBusy(false);
    }
  }
  const enrolled = courses.filter((c) => state.enrolled.includes(c.id));
  const lessonCount = Object.values(state.completed).reduce(
    (sum, list) => sum + list.length,
    0,
  );
  const finished = enrolled.filter((c) => percent(state, c) === 100).length;
  const xp =
    lessonCount * 50 +
    Object.values(state.quizzes).reduce((sum, q) => sum + q.score * 25, 0);
  const visibleCourses = courses.filter(
    (c) =>
      (filter === "All topics" || c.category === filter) &&
      `${c.title} ${c.category} ${c.teacher}`
        .toLowerCase()
        .includes(search.toLowerCase()),
  );
  const nextCourse =
    enrolled.find((c) => percent(state, c) < 100) || courses[0];
  async function openCourse(c) {
    if (
      !state.enrolled.includes(c.id) &&
      !(await update({
        ...state,
        enrolled: [...state.enrolled, c.id],
      }))
    )
      return;
    setModal({
      type: "lesson",
      course: c,
      lesson:
        c.lessons.findIndex((_, i) => !state.completed[c.id]?.includes(i)) < 0
          ? 0
          : c.lessons.findIndex((_, i) => !state.completed[c.id]?.includes(i)),
    });
  }
  async function completeLesson(c, index) {
    const completed = [...new Set([...(state.completed[c.id] || []), index])];
    if (
      await update({
        ...state,
        completed: {
          ...state.completed,
          [c.id]: completed,
        },
        activity: [...new Set([...state.activity, today()])],
      })
    ) {
      notify("Nice work! Lesson completed. +50 learning XP");
      if (index < c.lessons.length - 1)
        setModal({
          type: "lesson",
          course: c,
          lesson: index + 1,
        });
    }
  }
  async function authenticate(e) {
    e.preventDefault();
    const fields = Object.fromEntries(new FormData(e.currentTarget));
    setBusy(true);
    try {
      const data = await api(`/auth/${authMode}`, {
        method: "POST",
        body: JSON.stringify(fields),
      });
      if (authMode === "forgot-password") {
        notify(data.message);
        return;
      }
      session.current++;
      setUser(data.user);
      setState(data.state);
      setModal(null);
      go("dashboard");
      notify(
        `Welcome${authMode === "register" ? " aboard" : " back"}, ${data.user.name}!`,
      );
    } catch (error) {
      notify(error.message);
    } finally {
      setBusy(false);
    }
  }
  async function continueWithGoogle() {
    setBusy(true);
    try {
      const idToken = await googleIdentity();
      const data = await api("/auth/google", {
        method: "POST",
        body: JSON.stringify({
          idToken,
        }),
      });
      session.current++;
      setUser(data.user);
      setState(data.state);
      setModal(null);
      go("dashboard");
      notify(`Welcome, ${data.user.name}!`);
    } catch (error) {
      notify(googleError(error));
    } finally {
      setBusy(false);
    }
  }
  async function submitQuiz(e) {
    e.preventDefault();
    const c = modal.course;
    if (c.quiz.some((_, i) => quizAnswers[i] === undefined)) {
      notify("Choose an answer for every question.");
      return;
    }
    const score = c.quiz.filter((q, i) => q.answer === quizAnswers[i]).length;
    if (
      await update({
        ...state,
        quizzes: {
          ...state.quizzes,
          [c.id]: {
            score,
            total: c.quiz.length,
            date: new Date().toISOString(),
          },
        },
        activity: [...new Set([...state.activity, today()])],
      })
    )
      setQuizResult(score);
  }
  async function sendMessage(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const text = new FormData(form).get("message").trim();
    if (!text) return;
    setBusy(true);
    try {
      if (user) {
        const message = await api("/messages", {
          method: "POST",
          body: JSON.stringify({
            text,
            room,
          }),
        });
        setMessages((current) => [
          ...current.filter((m) => m.id !== message.id),
          message,
        ]);
      }
      form.reset();
    } catch (error) {
      notify(error.message);
    } finally {
      setBusy(false);
    }
  }
  function quiz(c) {
    setQuizAnswers({});
    setQuizResult(null);
    setModal({
      type: "quiz",
      course: c,
    });
  }
  function download() {
    const blob = new Blob(
      [
        JSON.stringify(
          {
            ...state,
            exportedAt: new Date().toISOString(),
          },
          null,
          2,
        ),
      ],
      {
        type: "application/json",
      },
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "studybuddy-progress.json";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  const chat = user ? messages : state.messages.filter((m) => m.room === room);
  function courseCard(c) {
    const progress = percent(state, c);
    const saved = (state.bookmarks || []).includes(c.id);
    return (
      <article
        key={c.id}
        className="course-card group overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-2 shadow-sm transition hover:border-violet-200 hover:shadow-md dark:border-slate-700/70 dark:bg-slate-900 dark:hover:border-violet-900/60"
      >
        <div className="relative">
          <CourseArtwork course={c} />
          <button
            disabled={busy}
            aria-label={`${saved ? "Unsave" : "Save"} ${c.title}`}
            aria-pressed={saved}
            onClick={async () => {
              const bookmarks = saved
                ? (state.bookmarks || []).filter((id) => id !== c.id)
                : [...(state.bookmarks || []), c.id];
              if (
                await update({
                  ...state,
                  bookmarks,
                })
              )
                notify(
                  saved
                    ? "Course removed from saved."
                    : "Course saved for later.",
                );
            }}
            className={`absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/80 shadow-sm  dark:border-slate-700 ${saved ? "bg-violet-600 text-white" : "bg-white/90 text-slate-500 hover:text-violet-600 dark:bg-slate-900/90 dark:text-slate-400 dark:hover:text-violet-300"}`}
          >
            <FiBookmark className="h-3.5 w-3.5" />
          </button>
        </div>
        <div className="px-3 pb-3 pt-5">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[9px] font-semibold uppercase tracking-wider text-violet-400">
              {c.category}
            </span>
            <span className="rounded-md bg-slate-50 px-2 py-1 text-[8px] text-slate-400 dark:bg-slate-800/50">
              {c.level}
            </span>
          </div>
          <h3 className="mt-3 font-heading text-sm font-bold leading-6 tracking-tight text-slate-700 dark:text-slate-200">
            {c.title}
          </h3>
          <p className="mt-3 flex items-center gap-2 text-[10px] text-slate-400">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-50 text-[7px] font-semibold text-violet-400 dark:bg-violet-950/30">
              {c.teacher
                .split(" ")
                .slice(0, 2)
                .map((w) => w[0])
                .join("")}
            </span>
            {c.teacher}
          </p>
          <div className="mt-4 flex items-center justify-between border-b border-slate-100 pb-4 text-[9px] text-slate-400 dark:border-slate-700/70">
            <span className="flex items-center gap-1.5">
              <FiBookOpen />
              {c.lessons.length} lessons
            </span>
            <span className="flex items-center gap-1.5">
              <FiClock />
              {c.duration}
            </span>
          </div>
          {state.enrolled.includes(c.id) && (
            <div className="mt-4">
              <div className="flex justify-between text-[9px] text-slate-400">
                <span>
                  {progress === 100
                    ? "Completed. You did it!"
                    : "Your progress"}
                </span>
                <strong className="font-medium text-violet-500 dark:text-violet-400">
                  {progress}%
                </strong>
              </div>
              <div className="mt-2 h-1 overflow-hidden rounded-full bg-violet-50 dark:bg-violet-950/30">
                <span
                  className="block h-full rounded-full bg-violet-400 transition-all"
                  style={{
                    width: progress + "%",
                  }}
                />
              </div>
            </div>
          )}
          <button
            disabled={busy}
            onClick={() => openCourse(c)}
            className="mt-5 flex w-full items-center justify-between rounded-lg bg-violet-50 px-3 py-2.5 text-[10px] font-semibold text-violet-600 hover:bg-violet-100 dark:bg-violet-950/30 dark:text-violet-300 dark:hover:bg-violet-900/40"
          >
            {progress === 100
              ? "Revisit course"
              : state.enrolled.includes(c.id)
                ? "Continue learning"
                : "Start learning"}
            <FiArrowRight />
          </button>
        </div>
      </article>
    );
  }
  if (accountAction)
    return (
      <AccountAction
        action={accountAction}
        onClose={() => {
          setAccountAction(null);
          window.location.assign("/");
        }}
      />
    );
  return (
    <div className={ui("app-shell")}>
      <div
        inert={modal ? "" : undefined}
        aria-hidden={modal ? true : undefined}
      >
        {!user && (
          <Landing
            onAuth={(mode) => {
              setAuthMode(mode);
              setModal({
                type: "auth",
              });
            }}
          />
        )}
        {user && (
          <WorkspaceShell user={user} page={page} onNavigate={go}>
            <div className={ui("page-heading")}>
              <div>
                <div className={ui("overline")}>
                  {page === "dashboard"
                    ? "LET’S MAKE TODAY COUNT"
                    : "A LITTLE CURIOSITY GOES A LONG WAY"}
                </div>
                <h1>
                  {page === "dashboard" ? (
                    <>
                      Hey {user?.name || state.name}, ready to grow?{" "}
                      <span className={ui("wave")}>✦</span>
                    </>
                  ) : (
                    {
                      courses: "Your next “aha!” moment.",
                      assignments: "Big ideas. Small steps.",
                      quizzes: "Put your knowledge to play.",
                      community: "Better, together.",
                      progress: "Look how far you’ve come.",
                      settings: "Make yourself at home.",
                      admin: "Everything, in one place.",
                    }[page]
                  )}
                </h1>
                <p>
                  {
                    {
                      dashboard:
                        "A fresh day, a new discovery. Let’s learn something amazing.",
                      courses:
                        "Explore a little. Learn a lot. Find something that sparks your curiosity.",
                      assignments:
                        "Keep your learning on track, one assignment at a time.",
                      quizzes:
                        "No pressure. Just practice, feedback, and a little more confidence.",
                      community:
                        "Ask a question, share a win, or find your next study buddy.",
                      progress:
                        "Every lesson is a step forward. Here’s your learning story.",
                      settings:
                        "Your profile, your goals, your learning journey.",
                      admin: "Manage your learning and business workspace.",
                    }[page]
                  }
                </p>
              </div>
              {page === "dashboard" && (
                <button
                  className={ui("button white")}
                  onClick={() => go("courses")}
                >
                  Explore courses <FiArrowUpRight />
                </button>
              )}
              {page === "assignments" && assignmentMode === "personal" && (
                <button
                  className={ui("button primary")}
                  onClick={() =>
                    setModal({
                      type: "assignment",
                    })
                  }
                >
                  <FiPlus /> New assignment
                </button>
              )}
            </div>

            <DashboardOverview
              courseCard={courseCard}
              enrolled={enrolled}
              finished={finished}
              focusSeconds={focusSeconds}
              focusing={focusing}
              go={go}
              lessonCount={lessonCount}
              nextCourse={nextCourse}
              openCourse={openCourse}
              page={page}
              setFocusSeconds={setFocusSeconds}
              setFocusing={setFocusing}
              setModal={setModal}
              state={state}
              xp={xp}
            />
            <CourseCatalog
              courseCard={courseCard}
              filter={filter}
              page={page}
              search={search}
              setFilter={setFilter}
              setSearch={setSearch}
              visibleCourses={visibleCourses}
              state={state}
            />
            {page === "assignments" && (
              <div className={ui("assignment-tabs tabs")}>
                <button
                  className={ui(
                    assignmentMode === "personal" ? "selected" : "",
                  )}
                  onClick={() => setAssignmentMode("personal")}
                >
                  My tasks
                </button>
                <button
                  className={ui(assignmentMode === "shared" ? "selected" : "")}
                  onClick={() => setAssignmentMode("shared")}
                >
                  Community assignments
                </button>
              </div>
            )}
            {page === "assignments" && assignmentMode === "shared" && (
              <SharedAssignments
                user={user}
                notify={notify}
                openAuth={() => {
                  setAuthMode("register");
                  setModal({
                    type: "auth",
                  });
                }}
              />
            )}
            <PersonalAssignments
              assignmentMode={assignmentMode}
              busy={busy}
              page={page}
              setModal={setModal}
              state={state}
              today={today}
              update={update}
            />
            <PracticeQuizzes
              courses={courses}
              page={page}
              quiz={quiz}
              state={state}
            />
            <StudyLounge
              busy={busy}
              chat={chat}
              chatError={chatError}
              page={page}
              room={room}
              sendMessage={sendMessage}
              setRoom={setRoom}
              user={user}
            />
            <LearnerProgress
              download={download}
              enrolled={enrolled}
              finished={finished}
              lessonCount={lessonCount}
              page={page}
              percent={percent}
              state={state}
              xp={xp}
            />
            <AccountSettings
              busy={busy}
              download={download}
              go={go}
              notify={notify}
              page={page}
              session={session}
              setAuthMode={setAuthMode}
              setFocusing={setFocusing}
              setModal={setModal}
              setState={setState}
              setUser={setUser}
              state={state}
              update={update}
              user={user}
            />
            {page === "admin" && (
              <Suspense fallback={<p role="status">Loading administration…</p>}>
                <Admin user={user} />
              </Suspense>
            )}
            <footer className={ui("page-footer")}>
              <span>
                <span className={ui("brand-dot")}>✦</span> Made for curious
                minds.
              </span>
              <span>A little better, every day.</span>
            </footer>
          </WorkspaceShell>
        )}
      </div>
      {notice && (
        <div className={ui("toast")} role="status">
          <FiMessageCircle />
          <span>{notice}</span>
          <button aria-label="Dismiss message" onClick={() => setNotice("")}>
            <FiX />
          </button>
        </div>
      )}
      {modal && (
        <div
          className={ui("modal-backdrop")}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget && !busy) setModal(null);
          }}
        >
          <section
            className={ui(
              `modal ${modal.type === "lesson" ? "lesson-modal" : ""}`,
            )}
            role="dialog"
            aria-modal="true"
            aria-labelledby="dialog-title"
            ref={formRef}
          >
            <button
              className={ui("modal-close icon-button")}
              aria-label="Close dialog"
              disabled={busy}
              onClick={() => setModal(null)}
            >
              <FiX />
            </button>
            <AuthPanel
              authMode={authMode}
              authenticate={authenticate}
              booting={booting}
              busy={busy}
              continueWithGoogle={continueWithGoogle}
              modal={modal}
              setAuthMode={setAuthMode}
            />
            <LessonPanel
              busy={busy}
              completeLesson={completeLesson}
              modal={modal}
              quiz={quiz}
              setModal={setModal}
              state={state}
            />
            <QuizPanel
              busy={busy}
              go={go}
              modal={modal}
              quizAnswers={quizAnswers}
              quizResult={quizResult}
              setModal={setModal}
              setQuizAnswers={setQuizAnswers}
              submitQuiz={submitQuiz}
            />
            <AssignmentPanel
              busy={busy}
              modal={modal}
              notify={notify}
              setModal={setModal}
              state={state}
              update={update}
            />
            <SubmissionPanel
              busy={busy}
              modal={modal}
              notify={notify}
              setModal={setModal}
              state={state}
              update={update}
            />
            <DeleteTaskPanel
              busy={busy}
              modal={modal}
              setModal={setModal}
              state={state}
              update={update}
            />
          </section>
        </div>
      )}
    </div>
  );
}
