import PublicPage from "./PublicPage";
import { ui } from "./ui";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiBookOpen,
  FiCode,
  FiPenTool,
  FiTrendingUp,
  FiCheck,
  FiMessageCircle,
  FiZap,
  FiAward,
  FiClock,
  FiSearch,
  FiLayers,
  FiTarget,
} from "react-icons/fi";
import { courses, api } from "./store";
const symbols = {
  design: FiPenTool,
  code: FiCode,
  growth: FiTrendingUp,
};
export default function Landing({ onAuth }) {
  const [contentPage, setContentPage] = useState(null);
  const [publishedPages, setPublishedPages] = useState([]);
  const [topic, setTopic] = useState("All topics");
  const [query, setQuery] = useState("");
  const [catalog, setCatalog] = useState(courses);
  const [challenges, setChallenges] = useState([
    {
      id: "sample-starter-design",
      title: "Design a welcoming course card",
      category: "Design",
      description:
        "Sketch an interface that feels clear, accessible, and welcoming.",
    },
    {
      id: "sample-starter-web",
      title: "Build your personal introduction page",
      category: "Development",
      description:
        "Turn a blank page into a little corner of the web that feels like you.",
    },
    {
      id: "sample-starter-growth",
      title: "Plan your next seven days of learning",
      category: "Personal growth",
      description:
        "Make space for a small daily habit and a little more momentum.",
    },
  ]);
  useEffect(() => {
    let active = true;
    api("/content")
      .then((value) => {
        if (active && Array.isArray(value)) setPublishedPages(value);
      })
      .catch(() => {});
    const slug = new URLSearchParams(window.location.search).get("page");
    if (slug)
      api("/pages/" + encodeURIComponent(slug))
        .then((value) => {
          if (active) setContentPage(value);
        })
        .catch(() => {});
    api("/courses")
      .then((value) => {
        if (active && Array.isArray(value) && value.length) setCatalog(value);
      })
      .catch(() => {});
    api("/discover")
      .then((value) => {
        if (active && value.challenges?.length) setChallenges(value.challenges);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);
  const shown = catalog.filter(
    (c) =>
      (topic === "All topics" || c.category === topic) &&
      `${c.title} ${c.category}`.toLowerCase().includes(query.toLowerCase()),
  );
  function explore(category) {
    setTopic(category);
    setQuery("");
    document.getElementById("explore")?.scrollIntoView({
      behavior: "smooth",
    });
  }
  if (contentPage) return <PublicPage page={contentPage} onAuth={onAuth} />;
  return (
    <div className={ui("public-site")} id="home">
      <a className={ui("skip-link")} href="#public-content">
        Skip to content
      </a>
      <header className={ui("site-header")}>
        <a href="#home" className={ui("brand")} aria-label="Studybuddy home">
          <img src="/brand/mark.svg" width="40" height="40" alt="" />
          <span>
            studybuddy<span className={ui("brand-dot")}>.</span>
          </span>
        </a>
        <nav aria-label="Website navigation">
          <a href="#explore">Explore courses</a>
          <a href="#how-it-works">How it works</a>
          <a href="#learn-together">Community</a>
        </nav>
        <div className={ui("site-auth")}>
          <button className={ui("site-signin")} onClick={() => onAuth("login")}>
            Sign in
          </button>
          <button
            className={ui("button primary")}
            onClick={() => onAuth("register")}
          >
            Create an account <FiArrowUpRight />
          </button>
        </div>
      </header>
      <main id="public-content" className={ui("public-main")}>
        <section className={ui("website-hero")}>
          <div className={ui("website-hero-copy")}>
            <span className={ui("site-kicker")}>
              <span />A LITTLE CURIOSITY. A WORLD OF POSSIBILITIES.
            </span>
            <h1>
              Big ideas start
              <br />
              with a little{" "}
              <span>
                curiosity<span className={ui("hero-spark")}>✦</span>
              </span>
            </h1>
            <p>
              Discover something new, put it into practice, and find your people
              along the way. Your next chapter starts with Studybuddy.
            </p>
            <div className={ui("site-hero-actions")}>
              <button
                className={ui("button primary")}
                onClick={() => onAuth("register")}
              >
                Start your learning journey <FiArrowRight />
              </button>
              <a className={ui("site-secondary")} href="#explore">
                Explore courses <FiArrowUpRight />
              </a>
            </div>
            <div className={ui("site-benefits")}>
              <span>
                <FiCheck />
                Learn at your own pace
              </span>
              <span>
                <FiCheck />
                Grow together
              </span>
            </div>
          </div>
          <div className={ui("website-hero-art")} aria-hidden="true">
            <div className={ui("art-circle one")} />
            <div className={ui("art-circle two")} />
            <span className={ui("art-spark top")}>✦</span>
            <span className={ui("art-spark bottom")}>✧</span>
            <div className={ui("illustrated-book back")}>
              <span>
                IDEAS
                <br />
                IN MOTION
              </span>
            </div>
            <div className={ui("illustrated-book front")}>
              <img src="/brand/mark.svg" alt="" />
              <span>
                A little better.
                <br />
                Every day.
              </span>
              <i />
            </div>
            <div className={ui("site-floating idea")}>
              <span>✦</span>Your next “aha!” moment
            </div>
            <div className={ui("site-floating lesson")}>
              <span>
                <FiCheck />
              </span>
              <div>
                Small steps. Real progress.
                <small>One discovery at a time.</small>
              </div>
            </div>
            <div className={ui("site-art-dots")} />
          </div>
        </section>
        <section
          className={ui("site-value-strip")}
          aria-label="What you can do"
        >
          <span>
            <FiBookOpen />
            Bite-sized lessons
          </span>
          <span>
            <FiZap />
            Practice that sticks
          </span>
          <span>
            <FiMessageCircle />A space to connect
          </span>
          <span>
            <FiAward />
            Progress worth celebrating
          </span>
        </section>
        <section className={ui("site-section")} id="explore">
          <div className={ui("site-section-heading")}>
            <div>
              <span className={ui("site-kicker")}>FOLLOW YOUR CURIOSITY</span>
              <h2>Find your next favorite thing.</h2>
              <p>
                A fresh skill, a different perspective, or that idea you’ve
                always wanted to try.
              </p>
            </div>
            <span className={ui("catalog-note")}>
              {catalog.length} thoughtfully crafted courses
            </span>
          </div>
          <div className={ui("public-catalog-toolbar")}>
            <div className={ui("public-topic-tabs")} aria-label="Course topics">
              {["All topics", "Design", "Development", "Personal growth"].map(
                (t) => (
                  <button
                    className={ui(topic === t ? "selected" : "")}
                    aria-pressed={topic === t}
                    onClick={() => setTopic(t)}
                    key={t}
                  >
                    {t}
                  </button>
                ),
              )}
            </div>
            <label className={ui("public-search")}>
              <FiSearch />
              <input
                type="search"
                aria-label="Search public courses"
                placeholder="What sparks your curiosity?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </label>
          </div>
          <div className={ui("public-course-grid")}>
            {shown.map((c) => {
              const Icon = symbols[c.icon];
              return (
                <article className={ui("public-course")} key={c.id}>
                  <div className={ui(`course-art ${c.color}`)}>
                    <span className={ui("art-orbit")} />
                    <span className={ui("art-grid")} />
                    <Icon />
                    <span className={ui("level")}>{c.level}</span>
                  </div>
                  <div className={ui("public-course-body")}>
                    <span className={ui("eyebrow")}>{c.category}</span>
                    <h3>{c.title}</h3>
                    <p>{c.description}</p>
                    <div className={ui("public-course-meta")}>
                      <span>
                        <FiBookOpen />
                        {c.lessons.length} lessons
                      </span>
                      <span>
                        <FiClock />
                        {c.duration}
                      </span>
                    </div>
                    <button onClick={() => onAuth("register")}>
                      Start learning <FiArrowUpRight />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
          {!shown.length && (
            <div className={ui("empty-state")}>
              <FiSearch />
              <h3>A different search could spark something.</h3>
              <p>Try another topic or explore all six courses.</p>
              <button
                className={ui("button primary")}
                onClick={() => {
                  setTopic("All topics");
                  setQuery("");
                }}
              >
                Show all courses
              </button>
            </div>
          )}
        </section>
        <section className={ui("learning-paths site-section")}>
          <div className={ui("site-section-heading")}>
            <div>
              <span className={ui("site-kicker")}>
                THERE’S MORE THAN ONE WAY TO GROW
              </span>
              <h2>Choose your own adventure.</h2>
              <p>Start with what interests you. See where it takes you.</p>
            </div>
          </div>
          <div className={ui("path-grid")}>
            {[
              [
                "Design",
                "Make something people love.",
                "From thoughtful interfaces to everyday creativity.",
                FiPenTool,
                "lavender",
              ],
              [
                "Development",
                "Bring your ideas to life.",
                "Build for the web and think a little more like a problem solver.",
                FiCode,
                "peach",
              ],
              [
                "Personal growth",
                "Find your next gear.",
                "Better habits, clearer communication, and a more confident you.",
                FiTrendingUp,
                "mint",
              ],
            ].map(([category, title, description, Icon, color]) => (
              <button
                className={ui(`path-card ${color}`)}
                key={category}
                onClick={() => explore(category)}
              >
                <span className={ui("path-icon")}>
                  <Icon />
                </span>
                <span className={ui("path-copy")}>
                  <span className={ui("eyebrow")}>{category}</span>
                  <strong>{title}</strong>
                  <span>{description}</span>
                </span>
                <FiArrowUpRight />
              </button>
            ))}
          </div>
        </section>
        <section className={ui("practice-section site-section")}>
          <div className={ui("site-section-heading")}>
            <div>
              <span className={ui("site-kicker")}>
                LESS SCROLLING. MORE MAKING.
              </span>
              <h2>A little practice. Something to be proud of.</h2>
              <p>
                Try a starter challenge and turn your next lesson into a
                real-world skill.
              </p>
            </div>
            <span className={ui("catalog-note")}>
              Self-guided sample challenges
            </span>
          </div>
          <div className={ui("practice-grid")}>
            {challenges.map((a, i) => (
              <article className={ui("practice-card")} key={a.id}>
                <div className={ui("practice-visual")}>
                  <span className={ui("practice-number")}>0{i + 1}</span>
                  <span className={ui("practice-sticker")}>
                    {i === 0 ? (
                      <FiPenTool />
                    ) : i === 1 ? (
                      <FiLayers />
                    ) : (
                      <FiTarget />
                    )}
                  </span>
                  <span className={ui("practice-spark")}>✦</span>
                </div>
                <div className={ui("practice-body")}>
                  <span className={ui("sample-label")}>SAMPLE CHALLENGE</span>
                  <h3>{a.title}</h3>
                  <p>
                    {a.description
                      .split("This ")[0]
                      .replace("Sample challenge: ", "")}
                  </p>
                  <div>
                    <span>{a.category}</span>
                    <button onClick={() => onAuth("register")}>
                      Give it a try <FiArrowRight />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className={ui("site-how site-section")} id="how-it-works">
          <div className={ui("site-section-heading")}>
            <div>
              <span className={ui("site-kicker")}>
                LESS OVERTHINKING. MORE DISCOVERING.
              </span>
              <h2>Your next chapter, in three little steps.</h2>
            </div>
          </div>
          <div className={ui("site-steps")}>
            {[
              [
                "01",
                "Make yourself at home.",
                "Create your account with Google or email. Your own learning space is ready when you are.",
                FiBookOpen,
              ],
              [
                "02",
                "Learn it. Try it. Make it yours.",
                "Explore a course, practice with a quiz, and put your new skills to work on an assignment.",
                FiZap,
              ],
              [
                "03",
                "Keep growing, together.",
                "Share a challenge, exchange feedback, and celebrate your progress with the community.",
                FiMessageCircle,
              ],
            ].map(([number, title, description, Icon]) => (
              <article key={number}>
                <div>
                  <span>{number}</span>
                  <Icon />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>
        <section
          className={ui("site-community site-section")}
          id="learn-together"
        >
          <div className={ui("community-art")} aria-hidden="true">
            <span className={ui("community-line")} />
            <span className={ui("community-bubble bubble-one")}>
              <FiCode />
            </span>
            <span className={ui("community-bubble bubble-two")}>
              <FiPenTool />
            </span>
            <span className={ui("community-bubble bubble-three")}>
              <FiMessageCircle />
            </span>
            <span className={ui("community-star")}>✦</span>
            <div className={ui("community-note")}>
              Different perspectives.
              <br />
              <strong>Brighter possibilities.</strong>
            </div>
          </div>
          <div className={ui("community-copy")}>
            <span className={ui("site-kicker")}>BETTER, TOGETHER</span>
            <h2>
              Find your people.
              <br />
              Build your momentum.
            </h2>
            <p>
              Learning feels different when you have someone to share it with.
              Ask a question in the study lounge, share an assignment, or give
              feedback that helps a buddy grow.
            </p>
            <button
              className={ui("button primary")}
              onClick={() => onAuth("register")}
            >
              Find your learning community <FiArrowRight />
            </button>
          </div>
        </section>
        <section className={ui("site-faq site-section")} id="questions">
          <div>
            <span className={ui("site-kicker")}>A LITTLE CLARITY</span>
            <h2>
              Curious about
              <br />
              something?
            </h2>
            <p>A few things to know before you begin.</p>
          </div>
          <div className={ui("faq-list")}>
            {[
              [
                "Do I need experience to start?",
                "No. Begin with a beginner course and move at your own pace. Each course includes short lessons, practical exercises, and a practice quiz.",
              ],
              [
                "Can I sign up with Google?",
                "Yes. Choose Continue with Google on the sign-up form, or create an account using your email and a password.",
              ],
              [
                "How does learning together work?",
                "Signed-in learners can talk in the study lounge, share community assignments, submit work, and exchange marks and written feedback. Starter sample challenges are self-guided and are not graded.",
              ],
              [
                "Is Studybuddy free to use?",
                "The current courses and community features are free. There are no payment or subscription steps in this version.",
              ],
            ].map(([q, a]) => (
              <details key={q}>
                <summary>
                  {q}
                  <span>+</span>
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>
        <section className={ui("site-final-cta")}>
          <span className={ui("site-kicker")}>YOUR POTENTIAL IS LIMITLESS</span>
          <h2>
            A small step today.
            <br />A whole new possibility tomorrow.
          </h2>
          <p>
            You don’t need to have it all figured out. Just bring your
            curiosity.
          </p>
          <button
            className={ui("button dark")}
            onClick={() => onAuth("register")}
          >
            Create your free account <FiArrowUpRight />
          </button>
          <span className={ui("cta-star")} aria-hidden="true">
            ✦
          </span>
        </section>
      </main>
      {publishedPages.length > 0 && (
        <nav
          aria-label="Published resources"
          className="mx-auto flex max-w-6xl flex-wrap gap-5 px-6 py-8"
        >
          {publishedPages.map((p) => (
            <a
              className="text-sm text-violet-600"
              href={"/?page=" + encodeURIComponent(p.slug)}
              key={p.slug}
            >
              {p.title}
            </a>
          ))}
        </nav>
      )}
      <footer className={ui("site-footer")}>
        <a href="#home" className={ui("brand")}>
          <img src="/brand/mark.svg" width="32" height="32" alt="" />
          <span>
            studybuddy<span className={ui("brand-dot")}>.</span>
          </span>
        </a>
        <p>Made for curious minds. A little better, every day.</p>
        <a href="#explore">
          Keep exploring <FiArrowUpRight />
        </a>
      </footer>
    </div>
  );
}
Landing.propTypes = {
  onAuth: PropTypes.func.isRequired,
};
