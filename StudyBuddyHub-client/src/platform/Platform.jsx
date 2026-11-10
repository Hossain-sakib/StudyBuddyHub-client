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
  FiSettings,
  FiArrowUpRight,
  FiArrowRight,
  FiChevronRight,
  FiPlus,
  FiX,
  FiMenu,
  FiZap,
  FiCode,
  FiPenTool,
  FiTrendingUp,
  FiClock,
} from "react-icons/fi";
import { googleIdentity, googleError } from "./googleAuth";
import Landing from "./Landing";
import SharedAssignments from "./SharedAssignments";
import { api, courses as starterCourses, createWorkspace } from "./store";
const icons = {
  design: FiPenTool,
  code: FiCode,
  growth: FiTrendingUp,
};
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
  const [courses, setCourses] = useState(starterCourses);
  const [page, setPage] = useState(readPage);
  const [state, setState] = useState(createWorkspace);
  const [user, setUser] = useState(null);
  const [booting, setBooting] = useState(true);
  const [search, setSearch] = useState("");
  const [assignmentMode, setAssignmentMode] = useState("personal");
  const [filter, setFilter] = useState("All topics");
  const [mobile, setMobile] = useState(false);
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
  function notify(message) {
    setNotice(message);
    clearTimeout(noticeTimer.current);
    noticeTimer.current = setTimeout(() => setNotice(""), 5000);
  }
  function go(value) {
    window.location.hash = value;
    setPage(value);
    setMobile(false);
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
    const handle = () => setPage(readPage());
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
    const timer = setInterval(
      () =>
        setFocusSeconds((s) => {
          if (s <= 1) {
            setFocusing(false);
            return 0;
          }
          return s - 1;
        }),
      1000,
    );
    return () => clearInterval(timer);
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
    const Icon = icons[c.icon];
    const progress = percent(state, c);
    return (
      <article className={ui("course-card")} key={c.id}>
        <div className={ui(`course-art ${c.color}`)}>
          <span className={ui("art-orbit")} />
          <span className={ui("art-grid")} />
          <Icon />
          <span className={ui("level")}>{c.level}</span>
          <span className={ui("art-dot")} />
        </div>
        <div className={ui("course-content")}>
          <span className={ui(`eyebrow ${c.color}-text`)}>{c.category}</span>
          <h3>{c.title}</h3>
          <p className={ui("teacher")}>
            <span className={ui(`tiny-avatar ${c.color}`)}>
              {c.teacher
                .split(" ")
                .map((w) => w[0])
                .join("")}
            </span>
            {c.teacher}
          </p>
          <div className={ui("course-meta")}>
            <span>
              <FiBookOpen /> {c.lessons.length} lessons
            </span>
            <span>
              <FiClock /> {c.duration}
            </span>
          </div>
          {state.enrolled.includes(c.id) && (
            <>
              <div className={ui("progress-label")}>
                <span>
                  {progress === 100
                    ? "Completed. You did it!"
                    : "Your progress"}
                </span>
                <b>{progress}%</b>
              </div>
              <div className={ui("progress-track")}>
                <span
                  style={{
                    width: `${progress}%`,
                  }}
                />
              </div>
            </>
          )}
          <button
            className={ui("course-button")}
            onClick={() => openCourse(c)}
            disabled={busy}
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
          <>
            {mobile && (
              <button
                className={ui("sidebar-shade")}
                aria-label="Close navigation"
                onClick={() => setMobile(false)}
              />
            )}
            <aside className={ui(`sidebar ${mobile ? "is-open" : ""}`)}>
              <a
                className={ui("brand")}
                href="#dashboard"
                onClick={() => setMobile(false)}
              >
                <img
                  className={ui("brand-mark")}
                  src="/brand/mark.svg"
                  width="38"
                  height="38"
                  alt=""
                />
                <span>
                  studybuddy<span className={ui("brand-dot")}>.</span>
                </span>
              </a>
              <div className={ui("workspace-label")}>YOUR LEARNING SPACE</div>
              <nav aria-label="Main navigation">
                {nav.map(([id, Icon, label]) => (
                  <a
                    href={`#${id}`}
                    key={id}
                    onClick={() => {
                      setMobile(false);
                      setSearch("");
                    }}
                    className={ui(page === id ? "active" : "")}
                  >
                    <Icon />
                    <span>{label}</span>
                    {id === "community" && (
                      <span className={ui("nav-new")}>NEW</span>
                    )}
                  </a>
                ))}
              </nav>
              <div className={ui("sidebar-bottom")}>
                {user?.role === "admin" && (
                  <a
                    href="#admin"
                    className="mb-4 flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white"
                  >
                    Administration
                  </a>
                )}
                <div className={ui("sidebar-tip")}>
                  <span className={ui("tip-spark")}>✦</span>
                  <strong>
                    A little every day.
                    <br />A lot along the way.
                  </strong>
                  <p>
                    Your next big idea starts
                    <br />
                    with a small step.
                  </p>
                  <button onClick={() => go("courses")}>
                    Find your next course <FiArrowRight />
                  </button>
                </div>
                <a
                  href="#settings"
                  className={ui(
                    page === "settings" ? "settings active" : "settings",
                  )}
                >
                  <FiSettings /> Settings
                </a>
                <button
                  className={ui("profile")}
                  onClick={() => {
                    setAuthMode("login");
                    setModal({
                      type: "auth",
                    });
                  }}
                >
                  <span className={ui("avatar")}>
                    {(user?.name || state.name).slice(0, 1).toUpperCase()}
                  </span>
                  <span>
                    <strong>{user?.name || state.name}</strong>
                    <small>{user ? "Learner account" : "Demo workspace"}</small>
                  </span>
                  <FiChevronRight />
                </button>
              </div>
            </aside>
            <div className={ui("main-shell")}>
              <header className={ui("topbar")}>
                <div className={ui("breadcrumb")}>
                  <button
                    className={ui("icon-button mobile-menu")}
                    aria-label="Open navigation"
                    onClick={() => setMobile(true)}
                  >
                    <FiMenu />
                  </button>
                  <span>My workspace</span>
                  <FiChevronRight />
                  <strong>
                    {nav.find((n) => n[0] === page)?.[2] || "Settings"}
                  </strong>
                </div>
                <div className={ui("top-actions")}>
                  <span className={ui("date-label")}>
                    {new Date().toLocaleDateString(undefined, {
                      month: "short",
                      day: "numeric",
                      weekday: "short",
                    })}
                  </span>
                  <button
                    className={ui("mode-label")}
                    onClick={() =>
                      user
                        ? go("settings")
                        : (setAuthMode("register"),
                          setModal({
                            type: "auth",
                          }))
                    }
                  >
                    {user ? "Account connected" : "Demo mode"}
                    <span />
                  </button>
                  <span className={ui("avatar small")}>
                    {(user?.name || state.name).slice(0, 1).toUpperCase()}
                  </span>
                </div>
              </header>
              <main id="main-content">
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
                {!user && (
                  <div className={ui("demo-strip")}>
                    <span>
                      <span className={ui("live-dot")} />
                      Your personal demo · progress is saved in this browser
                    </span>
                    <button
                      onClick={() => {
                        setAuthMode("register");
                        setModal({
                          type: "auth",
                        });
                      }}
                    >
                      Create an account <FiArrowRight />
                    </button>
                  </div>
                )}
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
                      className={ui(
                        assignmentMode === "shared" ? "selected" : "",
                      )}
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
                  <Suspense
                    fallback={<p role="status">Loading administration…</p>}
                  >
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
              </main>
            </div>
          </>
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
