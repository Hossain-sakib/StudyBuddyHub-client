import PropTypes from "prop-types";
import {
  FiCode,
  FiPenTool,
  FiTrendingUp,
  FiArrowUpRight,
} from "react-icons/fi";
const palettes = {
  purple: "from-[#e9ddff] via-[#ddd1ff] to-[#c9b8f3]",
  orange: "from-[#fff0d5] via-[#ffdfb6] to-[#f2c592]",
  green: "from-[#e4f5e8] via-[#cce8d6] to-[#acd5be]",
  pink: "from-[#ffecf3] via-[#f3d2e2] to-[#e1b7d1]",
};
export default function CourseArtwork({ course, compact = false }) {
  const code = course.icon === "code";
  const Icon = code
    ? FiCode
    : course.icon === "growth"
      ? FiTrendingUp
      : FiPenTool;
  return (
    <div
      aria-hidden="true"
      className={`course-art relative isolate flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${palettes[course.color] || palettes.purple} ${compact ? "h-36" : "h-44"}`}
    >
      <span className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full border border-white/40" />
      <span className="absolute -right-10 -top-16 h-48 w-48 rounded-full border-[25px] border-white/15" />
      <span className="absolute left-4 top-4 rounded-md border border-white/50 bg-white/50 px-2 py-1 text-[8px] font-bold uppercase tracking-[.15em] text-slate-700/60">
        {course.category}
      </span>
      {code ? (
        <div className="relative mt-6 w-36 -rotate-6 overflow-hidden rounded-lg border border-white/50 bg-[#32304b] p-3 shadow-[10px_14px_0_0_#ffffff35]">
          <div className="mb-3 flex gap-1">
            <i className="h-1 w-1 rounded-full bg-rose-300" />
            <i className="h-1 w-1 rounded-full bg-amber-200" />
            <i className="h-1 w-1 rounded-full bg-emerald-200" />
          </div>
          <div className="space-y-2">
            <span className="block h-1 w-12 rounded bg-violet-300" />
            <span className="ml-3 block h-1 w-20 rounded bg-emerald-200/80" />
            <span className="ml-3 block h-1 w-16 rounded bg-amber-200/80" />
            <span className="block h-1 w-8 rounded bg-violet-300" />
          </div>
          <Icon className="absolute bottom-3 right-3 h-6 w-6 text-white/80" />
        </div>
      ) : (
        <div className="relative mt-4 flex h-24 w-24 -rotate-12 items-center justify-center rounded-2xl border border-white/80 bg-white/45 shadow-[10px_12px_0_0_#ffffff35]">
          <span className="absolute inset-2 rounded-xl border border-white/70" />
          <Icon className="h-12 w-12 stroke-[1.2] text-slate-700/60" />
        </div>
      )}
      <span className="absolute bottom-4 right-5 text-3xl text-white/80">
        ✦
      </span>
      <FiArrowUpRight className="absolute right-5 top-5 h-4 w-4 text-slate-600/30" />
    </div>
  );
}
CourseArtwork.propTypes = {
  course: PropTypes.object.isRequired,
  compact: PropTypes.bool,
};
