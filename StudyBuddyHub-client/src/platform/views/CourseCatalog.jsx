import { ui } from "../ui";
import { FiSearch } from "react-icons/fi";
import PropTypes from "prop-types";
export default function CourseCatalog({
  courseCard,
  filter,
  page,
  search,
  setFilter,
  setSearch,
  visibleCourses,
}) {
  return (
    page === "courses" && (
      <>
        <div className={ui("catalog-toolbar")}>
          <div className={ui("tabs")}>
            {["All topics", "Design", "Development", "Personal growth"].map(
              (f) => (
                <button
                  className={ui(filter === f ? "selected" : "")}
                  key={f}
                  onClick={() => setFilter(f)}
                >
                  {f}
                </button>
              ),
            )}
          </div>
          <label className={ui("search")}>
            <FiSearch />
            <input
              aria-label="Search courses"
              placeholder="Find your next interest…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
        </div>
        <div className={ui("course-grid")}>
          {visibleCourses.map(courseCard)}
        </div>
        {!visibleCourses.length && (
          <div className={ui("empty-state")}>
            <FiSearch />
            <h2>No courses found</h2>
            <p>Try another topic or a shorter search.</p>
            <button
              className={ui("button primary")}
              onClick={() => {
                setFilter("All topics");
                setSearch("");
              }}
            >
              Show all courses
            </button>
          </div>
        )}
      </>
    )
  );
}
CourseCatalog.propTypes = {
  courseCard: PropTypes.any,
  filter: PropTypes.any,
  page: PropTypes.any,
  search: PropTypes.any,
  setFilter: PropTypes.any,
  setSearch: PropTypes.any,
  visibleCourses: PropTypes.any,
};
