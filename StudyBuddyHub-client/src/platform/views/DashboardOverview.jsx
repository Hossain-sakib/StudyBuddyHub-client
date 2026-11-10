import { ui } from "../ui";
import {
  FiArrowUpRight,
  FiZap,
  FiCheck,
  FiTarget,
  FiBookOpen,
  FiCheckSquare,
  FiAward,
  FiTrendingUp,
  FiArrowRight,
  FiSun,
  FiPlay,
  FiClock,
  FiChevronRight,
  FiPlus,
} from "react-icons/fi";
import PropTypes from "prop-types";
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
  return (
    page === "dashboard" && (
      <>
        <section className={ui("dashboard-top")}>
          <div className={ui("hero")}>
            <div className={ui("hero-copy")}>
              <span className={ui("hero-tag")}>
                <span />
                YOUR POTENTIAL IS LIMITLESS
              </span>
              <h2>
                Small steps.
                <br />
                <span>Brilliant possibilities.</span>
              </h2>
              <p>
                You don’t need to have it all figured out.
                <br />
                Just keep showing up. We’ll be right here.
              </p>
              <button
                className={ui("button dark")}
                onClick={() => openCourse(nextCourse)}
              >
                Pick up where you left off <FiArrowUpRight />
              </button>
              <div className={ui("hero-foot")}>
                <span className={ui("mini-faces")}>
                  <i>A</i>
                  <i>S</i>
                  <i>E</i>
                </span>
                <span>
                  A little progress is still progress <span>✦</span>
                </span>
              </div>
            </div>
            <div className={ui("hero-illustration")} aria-hidden="true">
              <span className={ui("float-star s1")}>✦</span>
              <span className={ui("float-star s2")}>✧</span>
              <div className={ui("orbital-ring")} />
              <div className={ui("book book-back")}>
                <span />
              </div>
              <div className={ui("book book-front")}>
                <FiZap />
                <i />
                <i />
              </div>
              <div className={ui("floating-card float-top")}>
                <span>✦</span> Aha! moment unlocked
              </div>
              <div className={ui("floating-card float-bottom")}>
                <span className={ui("float-check")}>
                  <FiCheck />
                </span>
                <div>
                  One step closer
                  <small>to your next big thing</small>
                </div>
              </div>
              <span className={ui("tiny-orbit")} />
              <span className={ui("squiggle")}>〰</span>
            </div>
          </div>
          <section className={ui("weekly-goal")}>
            <div className={ui("section-top")}>
              <span className={ui("icon-tile pink")}>
                <FiTarget />
              </span>
              <span className={ui("subtle")}>THIS WEEK’S GOAL</span>
              <button
                className={ui("icon-button")}
                aria-label="Edit learning goal"
                onClick={() => go("settings")}
              >
                <FiArrowUpRight />
              </button>
            </div>
            <h3>You’ve got this!</h3>
            <p>A little consistency goes a long way.</p>
            <div
              className={ui("goal-ring")}
              style={{
                "--progress": `${Math.min(100, (state.activity.filter((d) => Date.now() - new Date(d).getTime() < 7 * 86400000).length / state.goal) * 100)}%`,
              }}
            >
              <div>
                <b>
                  {
                    state.activity.filter(
                      (d) => Date.now() - new Date(d).getTime() < 7 * 86400000,
                    ).length
                  }
                  <span> / {state.goal}</span>
                </b>
                <small>active days</small>
              </div>
            </div>
            <div className={ui("week-days")}>
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
                    <span className={ui(active ? "done" : "")} key={i}>
                      <small>
                        {d.toLocaleDateString(undefined, {
                          weekday: "narrow",
                        })}
                      </small>
                      <i>{active ? <FiCheck /> : d.getDate()}</i>
                    </span>
                  );
                },
              )}
            </div>
            <span className={ui("goal-caption")}>
              Show up. Stay curious. Keep going. ✨
            </span>
          </section>
        </section>
        <section className={ui("stats-grid")} aria-label="Learning statistics">
          {[
            [
              FiBookOpen,
              enrolled.length,
              "Courses enrolled",
              "purple",
              "A world of possibilities",
            ],
            [
              FiCheckSquare,
              lessonCount,
              "Lessons completed",
              "green",
              "One step at a time",
            ],
            [
              FiAward,
              xp,
              "Learning XP earned",
              "orange",
              "Curiosity looks good on you",
            ],
            [
              FiTrendingUp,
              finished,
              "Courses completed",
              "pink",
              "Keep the momentum going",
            ],
          ].map(([Icon, value, label, color, caption]) => (
            <article className={ui("stat")} key={label}>
              <span className={ui(`icon-tile ${color}`)}>
                <Icon />
              </span>
              <div>
                <b>{value}</b>
                <span>{label}</span>
                <small>{caption}</small>
              </div>
            </article>
          ))}
        </section>
        <div className={ui("content-columns")}>
          <section>
            <div className={ui("section-heading")}>
              <div>
                <h2>
                  Keep your curiosity going{" "}
                  <span className={ui("count-pill")}>{enrolled.length}</span>
                </h2>
                <p>Right where you left off. Ready when you are.</p>
              </div>
              <button
                className={ui("text-button")}
                onClick={() => go("courses")}
              >
                View all <FiArrowRight />
              </button>
            </div>
            <div className={ui("course-grid two")}>
              {enrolled.slice(0, 2).map(courseCard)}
            </div>
            <div className={ui("discovery-banner")}>
              <span className={ui("discovery-icon")}>✧</span>
              <div>
                <h3>A new interest could be one click away.</h3>
                <p>Step outside your comfort zone. Discover something new.</p>
              </div>
              <button
                className={ui("icon-button")}
                aria-label="Discover courses"
                onClick={() => go("courses")}
              >
                <FiArrowUpRight />
              </button>
            </div>
          </section>
          <aside className={ui("right-column")}>
            <section className={ui("focus-card")}>
              <div className={ui("section-heading")}>
                <h3>
                  <FiSun /> A moment to focus
                </h3>
                <span className={ui("little-pill")}>YOUR TIME</span>
              </div>
              <p>One thing at a time. You’ve got this.</p>
              <div className={ui("timer")}>
                {String(Math.floor(focusSeconds / 60)).padStart(2, "0")}
                <span>:</span>
                {String(focusSeconds % 60).padStart(2, "0")}
              </div>
              <div className={ui("focus-actions")}>
                <button
                  className={ui("button primary")}
                  onClick={() => {
                    if (!focusSeconds) setFocusSeconds(1500);
                    setFocusing(!focusing);
                  }}
                >
                  {focusing
                    ? "Pause session"
                    : focusSeconds === 0
                      ? "Start again"
                      : "Start focus session"}
                  <FiPlay />
                </button>
                {focusSeconds !== 1500 && (
                  <button
                    className={ui("text-button")}
                    onClick={() => {
                      setFocusing(false);
                      setFocusSeconds(1500);
                    }}
                  >
                    Reset
                  </button>
                )}
              </div>
            </section>
            <section className={ui("up-next")}>
              <div className={ui("section-heading")}>
                <h3>On your radar</h3>
                <FiClock />
              </div>
              {state.assignments
                .filter((a) => !a.done)
                .slice(0, 3)
                .map((a) => (
                  <button
                    className={ui("radar-item")}
                    key={a.id}
                    onClick={() => go("assignments")}
                  >
                    <span className={ui("icon-tile orange")}>
                      <FiCheckSquare />
                    </span>
                    <span>
                      <b>{a.title}</b>
                      <small>
                        {a.due
                          ? new Date(a.due + "T00:00:00").toLocaleDateString()
                          : "No due date"}
                      </small>
                    </span>
                    <FiChevronRight />
                  </button>
                ))}
              {!state.assignments.some((a) => !a.done) && (
                <div className={ui("empty-small")}>
                  <FiCheckSquare />
                  <strong>A clear desk, a fresh start.</strong>
                  <p>Add an assignment to plan your next step.</p>
                  <button
                    className={ui("text-button")}
                    onClick={() => {
                      go("assignments");
                      setModal({
                        type: "assignment",
                      });
                    }}
                  >
                    Create an assignment <FiPlus />
                  </button>
                </div>
              )}
            </section>
            <div className={ui("quote-card")}>
              <span>“</span>
              <p>
                Great things are done by a series of small things brought
                together.
              </p>
              <small>— Vincent van Gogh</small>
            </div>
          </aside>
        </div>
      </>
    )
  );
}
DashboardOverview.propTypes = {
  courseCard: PropTypes.any,
  enrolled: PropTypes.any,
  finished: PropTypes.any,
  focusSeconds: PropTypes.any,
  focusing: PropTypes.any,
  go: PropTypes.any,
  lessonCount: PropTypes.any,
  nextCourse: PropTypes.any,
  openCourse: PropTypes.any,
  page: PropTypes.any,
  setFocusSeconds: PropTypes.any,
  setFocusing: PropTypes.any,
  setModal: PropTypes.any,
  state: PropTypes.any,
  xp: PropTypes.any,
};
