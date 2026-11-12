import BrandImage from "./BrandImage";
import PropTypes from "prop-types";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
export default function PublicFooter({ onAuth, pages }) {
  return (
    <footer className="bg-[#29243d] px-5 pb-6 pt-14 text-white sm:px-9">
      <div className="mx-auto max-w-[1208px]">
        <div className="grid gap-10 pb-11 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-2.5 font-heading text-2xl font-bold tracking-tight"
            >
              <BrandImage src="/brand/mark.svg" width="38" height="38" alt="" />
              studybuddy<span className="-ml-2 text-violet-300">.</span>
            </a>
            <p className="mt-5 max-w-xs text-xs leading-7 text-violet-100/50">
              A home for curious minds. Small lessons, thoughtful practice, and
              a little encouragement to keep growing.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-[10px] text-violet-200">
              <span className="text-lg text-[#e2f2ba]">✦</span>A little better,
              every day.
            </span>
          </div>
          <div>
            <h2 className="text-[10px] font-semibold uppercase tracking-[.18em] text-white/40">
              Discover
            </h2>
            <div className="mt-5 flex flex-col items-start gap-4 text-xs text-white/75">
              <a href="#explore" className="hover:text-white">
                Explore courses
              </a>
              <a href="#how-it-works" className="hover:text-white">
                How it works
              </a>
              <a href="#learn-together" className="hover:text-white">
                Learning community
              </a>
              <a href="#questions" className="hover:text-white">
                Your questions, answered
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-[10px] font-semibold uppercase tracking-[.18em] text-white/40">
              Your next chapter
            </h2>
            <div className="mt-5 flex flex-col items-start gap-4 text-xs text-white/75">
              <button
                onClick={() => onAuth("login")}
                className="hover:text-white"
              >
                Sign in to your workspace
              </button>
              <button
                onClick={() => onAuth("register")}
                className="hover:text-white"
              >
                Create a free account
              </button>
              {pages.slice(0, 3).map((p) => (
                <a
                  href={"/?page=" + encodeURIComponent(p.slug)}
                  key={p.slug}
                  className="hover:text-white"
                >
                  {p.title}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-heading text-lg font-semibold leading-7 text-violet-100">
              Curiosity is a<br />
              good place to start.
            </h2>
            <button
              onClick={() => onAuth("register")}
              className="mt-5 inline-flex items-center gap-3 rounded-xl bg-[#e2f2ba] px-4 py-3 text-[11px] font-bold text-[#363c29]"
            >
              Find your next idea
              <FiArrowUpRight />
            </button>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-[10px] text-white/35 dark:border-slate-700">
          <p>
            © {new Date().getFullYear()} Studybuddy. Made for curious minds.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-white/50"
          >
            Back to the top
            <FiArrowRight className="-rotate-90" />
          </a>
        </div>
      </div>
    </footer>
  );
}
PublicFooter.propTypes = {
  onAuth: PropTypes.func.isRequired,
  pages: PropTypes.array.isRequired,
};
