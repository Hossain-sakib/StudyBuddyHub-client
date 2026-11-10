import { ui } from "../ui";
import {
  FiAward,
  FiDownload,
  FiTrendingUp,
  FiBookOpen,
  FiZap,
  FiCheck,
} from "react-icons/fi";
import PropTypes from "prop-types";
export default function LearnerProgress({
  download,
  enrolled,
  finished,
  lessonCount,
  page,
  percent,
  state,
  xp,
}) {
  return (
    page === "progress" && (
      <>
        <section className={ui("progress-hero")}>
          <span className={ui("icon-tile purple")}>
            <FiAward />
          </span>
          <div>
            <h2>
              {xp
                ? `${xp} reasons to keep going.`
                : "Your story is just beginning."}
            </h2>
            <p>
              {lessonCount} lessons completed · {finished} courses finished ·{" "}
              {Object.keys(state.quizzes).length} quizzes practiced
            </p>
          </div>
          <button className={ui("button white")} onClick={download}>
            <FiDownload /> Export progress
          </button>
        </section>
        <div className={ui("content-columns")}>
          <section className={ui("panel")}>
            <div className={ui("section-heading")}>
              <h2>Your learning journey</h2>
              <FiTrendingUp />
            </div>
            {enrolled.map((c) => (
              <div className={ui("journey-row")} key={c.id}>
                <span className={ui(`icon-tile ${c.color}`)}>
                  <FiBookOpen />
                </span>
                <div>
                  <h3>{c.title}</h3>
                  <p>
                    {state.completed[c.id]?.length || 0} of {c.lessons.length}{" "}
                    lessons completed
                  </p>
                  <div className={ui("progress-track")}>
                    <span
                      style={{
                        width: `${percent(state, c)}%`,
                      }}
                    />
                  </div>
                </div>
                <b>{percent(state, c)}%</b>
              </div>
            ))}
          </section>
          <section className={ui("panel")}>
            <h2>Little wins, big energy.</h2>
            {[
              [
                "First step",
                "Complete your first lesson",
                lessonCount > 0,
                FiBookOpen,
              ],
              [
                "Curious mind",
                "Take your first quiz",
                Object.keys(state.quizzes).length > 0,
                FiZap,
              ],
              [
                "See it through",
                "Complete a whole course",
                finished > 0,
                FiAward,
              ],
            ].map(([title, description, unlocked, Icon]) => (
              <div
                className={ui(`badge-row ${unlocked ? "unlocked" : ""}`)}
                key={title}
              >
                <span className={ui("icon-tile")}>
                  <Icon />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <span>{unlocked ? <FiCheck /> : "Locked"}</span>
              </div>
            ))}
          </section>
        </div>
      </>
    )
  );
}
LearnerProgress.propTypes = {
  download: PropTypes.any,
  enrolled: PropTypes.any,
  finished: PropTypes.any,
  lessonCount: PropTypes.any,
  page: PropTypes.any,
  percent: PropTypes.any,
  state: PropTypes.any,
  xp: PropTypes.any,
};
