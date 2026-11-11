import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import {
  FiX,
  FiArrowRight,
  FiBookOpen,
  FiClock,
  FiCheck,
} from "react-icons/fi";
import CourseArtwork from "./CourseArtwork";
export default function CoursePreview({ course, onClose, onStart }) {
  const dialog = useRef();
  useEffect(() => {
    dialog.current?.showModal();
  }, []);
  return (
    <dialog
      ref={dialog}
      aria-labelledby="course-preview-title"
      onCancel={onClose}
      className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%_-_2rem)] max-w-2xl overflow-auto rounded-[24px] border-0 bg-white p-0 text-slate-800 shadow-2xl backdrop:bg-slate-950/50 backdrop:backdrop-blur-sm dark:bg-slate-900 dark:text-slate-100"
    >
      <div className="relative p-3">
        <CourseArtwork course={course} />
        <button
          onClick={onClose}
          aria-label="Close course preview"
          className="absolute right-6 top-6 rounded-full bg-white/90 p-2 text-slate-600 shadow-sm dark:bg-slate-900/90 dark:text-slate-200"
        >
          <FiX />
        </button>
      </div>
      <div className="px-7 pb-8 pt-3 sm:px-9">
        <div className="flex flex-wrap items-center gap-2 text-[10px]">
          <span className="rounded-full bg-violet-50 px-3 py-1 text-violet-600 dark:bg-violet-950/30 dark:text-violet-300">
            {course.level}
          </span>
          {course.isSample && (
            <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
              Demo curriculum
            </span>
          )}
        </div>
        <h2
          id="course-preview-title"
          className="mt-4 font-heading text-2xl font-bold tracking-tight"
        >
          {course.title}
        </h2>
        <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">
          {course.description}
        </p>
        <div className="mt-5 flex gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-2">
            <FiBookOpen />
            {course.lessons.length} lessons
          </span>
          <span className="flex items-center gap-2">
            <FiClock />
            {course.duration}
          </span>
        </div>
        <h3 className="mt-7 text-sm font-semibold">A little look inside</h3>
        <ol className="mt-3 divide-y divide-slate-100">
          {course.lessons.map((lesson, i) => (
            <li
              key={lesson.title}
              className="flex items-center gap-3 py-3 text-sm text-slate-600 dark:text-slate-200"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-violet-50 text-[10px] text-violet-500 dark:bg-violet-950/30 dark:text-violet-400">
                {String(i + 1).padStart(2, "0")}
              </span>
              {lesson.title}
              <FiCheck className="ml-auto text-emerald-400" />
            </li>
          ))}
        </ol>
        <button
          onClick={onStart}
          className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-violet-600 px-5 py-3.5 text-sm font-semibold text-white hover:bg-violet-700"
        >
          Create an account to start
          <FiArrowRight />
        </button>
        <p className="mt-3 text-center text-[10px] text-slate-400">
          Learn at your pace. Your progress stays with you.
        </p>
      </div>
    </dialog>
  );
}
CoursePreview.propTypes = {
  course: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  onStart: PropTypes.func.isRequired,
};
