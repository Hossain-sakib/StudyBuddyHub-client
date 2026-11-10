import { useCallback, useEffect, useRef, useState } from "react";
import {
  FiUploadCloud,
  FiTrash2,
  FiDownload,
  FiImage,
  FiFileText,
} from "react-icons/fi";
import { api } from "./store";
export default function MediaLibrary() {
  const [files, setFiles] = useState([]),
    [error, setError] = useState(""),
    [busy, setBusy] = useState(false),
    [loading, setLoading] = useState(true),
    [removing, setRemoving] = useState(null);
  const dialog = useRef();
  const load = useCallback(async () => {
    try {
      setFiles(await api("/files"));
      setError("");
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    load();
  }, [load]);
  useEffect(() => {
    if (removing) dialog.current?.showModal();
  }, [removing]);
  async function upload(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const file = data.get("file");
    if (!file?.size || file.size > 3 * 1024 * 1024) {
      setError("Choose an image or PDF up to 3 MB.");
      return;
    }
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/files", {
        method: "POST",
        credentials: "include",
        body: data,
        signal: AbortSignal.timeout(45000),
      });
      const value = await response.json();
      if (!response.ok) throw new Error(value.error || "Upload failed.");
      form.reset();
      await load();
    } catch (e) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  }
  return (
    <section className="rounded-2xl border border-violet-100 bg-white p-6">
      <div>
        <span className="text-xs uppercase tracking-widest text-violet-500">
          Cloudinary media
        </span>
        <h2 className="mt-2 text-xl font-bold text-slate-800">
          Your media library
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-500">
          Keep documents private or publish images for your website. PNG, JPEG,
          WebP and PDF files up to 3 MB.
        </p>
      </div>
      {error && (
        <p
          role="alert"
          className="mt-5 rounded-xl bg-rose-50 p-4 text-sm text-rose-700"
        >
          {error}
        </p>
      )}
      <form
        onSubmit={upload}
        className="mt-6 flex flex-wrap items-end gap-4 rounded-xl border border-dashed border-violet-200 bg-violet-50/40 p-5"
      >
        <label className="flex-1 text-xs font-medium text-slate-600">
          Choose a file
          <input
            name="file"
            type="file"
            required
            accept="image/png,image/jpeg,image/webp,application/pdf"
            className="mt-2 block w-full text-xs file:mr-3 file:rounded-lg file:border-0 file:bg-violet-100 file:px-3 file:py-2 file:text-violet-700"
          />
        </label>
        <label className="text-xs text-slate-600">
          Visibility
          <select
            name="visibility"
            defaultValue="private"
            className="mt-2 block rounded-lg border border-violet-100 bg-white p-2 text-sm"
          >
            <option value="private">Private document or image</option>
            <option value="public">Public website image</option>
          </select>
        </label>
        <button
          disabled={busy}
          className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-50"
        >
          <FiUploadCloud />
          {busy ? "Uploading…" : "Upload"}
        </button>
      </form>
      {loading ? (
        <p role="status" className="py-8 text-sm text-slate-500">
          Loading media…
        </p>
      ) : !files.length ? (
        <p className="py-10 text-center text-sm text-slate-500">
          No media uploaded yet. Your files will appear here.
        </p>
      ) : (
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {files.map((file) => (
            <article
              key={file.id}
              className="overflow-hidden rounded-xl border border-violet-100"
            >
              <div className="flex h-36 items-center justify-center bg-violet-50 text-4xl text-violet-300">
                {file.visibility === "public" &&
                file.type.startsWith("image/") ? (
                  <img
                    src={file.url}
                    alt={file.filename}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                ) : file.type.startsWith("image/") ? (
                  <FiImage />
                ) : (
                  <FiFileText />
                )}
              </div>
              <div className="p-4">
                <h3 className="break-all text-sm font-semibold text-slate-700">
                  {file.filename}
                </h3>
                <p className="mt-2 text-xs text-slate-400">
                  {Math.ceil(file.size / 1024)} KB · {file.visibility}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <a
                    href={file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs text-violet-600"
                  >
                    <FiDownload />
                    Open file
                  </a>
                  <button
                    aria-label={`Delete ${file.filename}`}
                    onClick={() => setRemoving(file)}
                    className="text-rose-500"
                  >
                    <FiTrash2 />
                  </button>
                </div>
                {file.visibility === "public" && (
                  <label className="mt-4 block text-xs text-slate-500">
                    Public URL
                    <input
                      readOnly
                      value={new URL(file.url, window.location.origin).href}
                      className="mt-1 w-full rounded border border-violet-100 bg-slate-50 p-2 text-xs"
                      onFocus={(e) => e.target.select()}
                    />
                  </label>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
      {removing && (
        <dialog
          ref={dialog}
          aria-labelledby="media-delete-title"
          onCancel={() => setRemoving(null)}
          className="fixed inset-0 m-auto w-[calc(100%-32px)] max-w-md rounded-2xl border-0 bg-white p-7 text-slate-700 backdrop:bg-slate-950/50"
        >
          <h2 id="media-delete-title" className="text-xl font-bold">
            Delete this file?
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-500">
            {removing.filename} will be removed from Cloudinary. Pages linking
            to it will no longer display it.
          </p>
          <div className="mt-6 flex justify-end gap-3">
            <button
              onClick={() => setRemoving(null)}
              disabled={busy}
              className="rounded-xl border border-slate-200 px-4 py-2 text-sm"
            >
              Cancel
            </button>
            <button
              disabled={busy}
              className="rounded-xl bg-rose-600 px-4 py-2 text-sm font-semibold text-white"
              onClick={async () => {
                setBusy(true);
                try {
                  await api("/files/" + removing.id, { method: "DELETE" });
                  setRemoving(null);
                  await load();
                } catch (e) {
                  setError(e.message);
                } finally {
                  setBusy(false);
                }
              }}
            >
              Delete file
            </button>
          </div>
        </dialog>
      )}
    </section>
  );
}
