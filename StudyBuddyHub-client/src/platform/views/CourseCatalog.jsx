import { useState } from "react";
import { FiSearch, FiBookOpen, FiBookmark } from "react-icons/fi";
import PropTypes from "prop-types";
export default function CourseCatalog({
  courseCard,
  filter,
  page,
  search,
  setFilter,
  setSearch,
  visibleCourses,
  state,
}) {
  const [collection, setCollection] = useState("All courses");
  const [sort, setSort] = useState("Recommended");
  if (page !== "courses") return null;
  const result = visibleCourses
    .filter((c) =>
      collection === "Enrolled"
        ? state.enrolled.includes(c.id)
        : collection === "Saved"
          ? (state.bookmarks || []).includes(c.id)
          : true,
    )
    .sort((a, b) =>
      sort === "A to Z"
        ? a.title.localeCompare(b.title)
        : sort === "Your progress"
          ? (state.completed[b.id]?.length || 0) / b.lessons.length -
            (state.completed[a.id]?.length || 0) / a.lessons.length
          : 0,
    );
  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5 dark:border-slate-700/70">
        <div className="flex rounded-xl border border-slate-200/80 bg-white p-1 dark:border-slate-700/70 dark:bg-slate-900">
          {["All courses", "Enrolled", "Saved"].map((name) => (
            <button
              key={name}
              aria-pressed={collection === name}
              onClick={() => setCollection(name)}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-medium ${collection === name ? "bg-[#302a43] text-white shadow-sm" : "text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"}`}
            >
              {name === "Saved" ? (
                <FiBookmark />
              ) : name === "Enrolled" ? (
                <FiBookOpen />
              ) : null}
              {name}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-3 text-[11px] text-slate-400">
          Sort by
          <select
            aria-label="Sort courses"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-600 dark:border-slate-700/70 dark:bg-slate-900 dark:text-slate-200"
          >
            {["Recommended", "A to Z", "Your progress"].map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
      </div>
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div className="flex flex-wrap gap-2">
          {["All topics", "Design", "Development", "Personal growth"].map(
            (f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={`rounded-full border px-3.5 py-2 text-[11px] font-medium ${filter === f ? "border-violet-300 bg-violet-50 text-violet-700 dark:border-violet-900/60 dark:bg-violet-950/30 dark:text-violet-300" : "border-slate-200 bg-white text-slate-400 hover:bg-slate-50 dark:border-slate-700/70 dark:bg-slate-900 dark:hover:bg-slate-800/50"}`}
              >
                {f}
              </button>
            ),
          )}
        </div>
        <label className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-300 dark:border-slate-700/70 dark:bg-slate-900 dark:text-slate-500">
          <FiSearch className="h-4 w-4" />
          <input
            aria-label="Search courses"
            placeholder="Find your next interest…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full min-w-0 border-0 bg-transparent text-xs text-slate-600 outline-none md:w-48 dark:text-slate-200"
          />
        </label>
      </div>
      <p aria-live="polite" className="text-[11px] text-slate-400">
        {result.length} {result.length === 1 ? "course" : "courses"} to keep
        your curiosity going
      </p>
      <div className="grid gap-5 sm:grid-cols-2 2xl:grid-cols-3">
        {result.map(courseCard)}
      </div>
      {!result.length && (
        <div className="rounded-2xl border border-dashed border-slate-200 bg-white px-6 py-16 text-center dark:border-slate-700/70 dark:bg-slate-900">
          <FiSearch className="mx-auto text-3xl text-violet-200" />
          <h2 className="mt-5 font-heading text-lg font-bold">
            No courses found
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            {collection === "Saved"
              ? "Save a course using its bookmark button to find it here."
              : "Try another topic or a shorter search."}
          </p>
          <button
            className="mt-6 rounded-xl bg-violet-600 px-5 py-3 text-xs font-semibold text-white"
            onClick={() => {
              setFilter("All topics");
              setSearch("");
              setCollection("All courses");
            }}
          >
            Show all courses
          </button>
        </div>
      )}
    </section>
  );
}
CourseCatalog.propTypes = {
  courseCard: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  setSearch: PropTypes.func.isRequired,
  visibleCourses: PropTypes.array.isRequired,
  state: PropTypes.object.isRequired,
};
