import { useEffect } from "react";
import PropTypes from "prop-types";
export default function PublicPage({ page, onAuth }) {
  useEffect(() => {
    document.title = `${page.title} — Studybuddy`;
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical)
      canonical.href = new URL(
        "/?page=" + encodeURIComponent(page.slug),
        window.location.origin,
      ).href;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = page.description || page.title;
  }, [page]);
  return (
    <div className="min-h-screen bg-[#fffdf9] text-slate-800">
      <header className="mx-auto flex max-w-5xl items-center justify-between gap-5 px-6 py-7">
        <a
          href="/"
          className="flex items-center gap-3 font-heading text-xl font-bold"
        >
          <img src="/brand/mark.svg" width="38" height="38" alt="" />
          studybuddy.
        </a>
        <button
          onClick={() => onAuth("register")}
          className="rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white"
        >
          Create an account
        </button>
      </header>
      <main className="mx-auto max-w-3xl px-6 py-14">
        <a href="/" className="text-sm text-violet-600">
          ← Back to Studybuddy
        </a>
        <h1 className="mt-8 font-heading text-4xl font-bold leading-tight tracking-tight">
          {page.title}
        </h1>
        {page.description && (
          <p className="mt-5 text-lg leading-8 text-slate-500">
            {page.description}
          </p>
        )}
        <article className="mt-10 whitespace-pre-wrap break-words text-base leading-9 text-slate-600">
          {page.body}
        </article>
      </main>
    </div>
  );
}
PublicPage.propTypes = {
  page: PropTypes.object.isRequired,
  onAuth: PropTypes.func.isRequired,
};
