import MediaLibrary from "./MediaLibrary";
import { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { api } from "./store";
import {
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiX,
  FiDownload,
  FiShield,
  FiSearch,
  FiArrowRight,
} from "react-icons/fi";
const inputClass =
  "mt-2 w-full rounded-xl border border-violet-100 bg-violet-50/40 px-3 py-2.5 text-sm text-slate-800 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-100 dark:border-violet-900/60 dark:bg-violet-950/30 dark:text-slate-100";
const buttonClass =
  "inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-violet-700 disabled:opacity-50";
export default function Admin({ user }) {
  const [overview, setOverview] = useState(null);
  const [module, setModule] = useState("overview");
  const [rows, setRows] = useState([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [busy, setBusy] = useState(false);
  const [dialog, setDialog] = useState(null);
  const modal = useRef();
  const resource = overview?.resources.find((r) => r.key === module);
  const endpoint = ["users", "assignments", "messages"].includes(module)
    ? `/admin/${module}`
    : `/admin/resources/${module}`;
  const refresh = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const data = await api("/admin/overview");
      setOverview(data);
      if (module !== "overview" && module !== "media")
        setRows(await api(endpoint));
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [module, endpoint]);
  useEffect(() => {
    if (user.role === "admin") refresh();
  }, [refresh, user.role]);
  useEffect(() => {
    if (dialog) modal.current?.showModal();
  }, [dialog]);
  async function mutate(url, method, body) {
    setBusy(true);
    setError("");
    try {
      await api(url, {
        method,
        ...(body
          ? {
              body: JSON.stringify(body),
            }
          : {}),
      });
      setDialog(null);
      await refresh();
    } catch (e) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  }
  if (user.role !== "admin")
    return (
      <div
        role="alert"
        className="rounded-2xl border border-red-100 bg-white p-8 text-slate-700 dark:border-red-900/60 dark:bg-slate-900 dark:text-slate-200"
      >
        Administrator access is required.
      </div>
    );
  const visible = rows.filter((row) =>
    JSON.stringify(row).toLowerCase().includes(query.toLowerCase()),
  );
  function exportRows() {
    const fields = resource
      ? ["id", ...Object.keys(resource.fields)]
      : module === "users"
        ? ["id", "name", "email", "role", "disabled"]
        : ["id", "title", "text", "createdAt"];
    const cell = (v) => {
      const text = String(v ?? "");
      return (
        '"' +
        (/^[=+\-@]/.test(text) ? "'" + text : text).replaceAll('"', '""') +
        '"'
      );
    };
    const csv = [fields, ...visible.map((row) => fields.map((key) => row[key]))]
      .map((row) => row.map(cell).join(","))
      .join("\r\n");
    const url = URL.createObjectURL(
      new Blob(["\uFEFF" + csv], {
        type: "text/csv;charset=utf-8",
      }),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = `${module}-export.csv`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  return (
    <section className="space-y-6">
      <div className="rounded-2xl bg-gradient-to-r from-violet-700 to-purple-500 p-7 text-white">
        <div className="flex items-center gap-3">
          <FiShield className="text-2xl" />
          <h2 className="text-xl font-bold">Your control center</h2>
        </div>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-violet-100">
          Manage learning, content, relationships, and day-to-day operations.
          Administrative changes are recorded in the activity log.
        </p>
      </div>
      <nav aria-label="Administration modules" className="flex flex-wrap gap-2">
        {[
          ["overview", "Overview"],
          ["users", "Users"],
          ...(overview?.resources || []).map((r) => [r.key, r.title]),
          ["assignments", "Assignment moderation"],
          ["messages", "Message moderation"],
          ["media", "Media library"],
        ].map(([key, title]) => (
          <button
            key={key}
            onClick={() => {
              setModule(key);
              setQuery("");
            }}
            className={`rounded-xl border px-3 py-2 text-xs font-medium ${module === key ? "border-violet-600 bg-violet-600 text-white" : "border-violet-100 bg-white text-slate-600 hover:bg-violet-50 dark:border-violet-900/60 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-violet-950/30"}`}
          >
            {title}
          </button>
        ))}
      </nav>
      {error && (
        <p
          role="alert"
          className="rounded-xl border border-red-100 bg-red-50 p-4 text-sm text-red-800 dark:border-red-900/60 dark:bg-red-950/30 dark:text-red-200"
        >
          {error}
        </p>
      )}
      {loading && (
        <p role="status" className="text-sm text-slate-500 dark:text-slate-400">
          Loading this workspace…
        </p>
      )}
      {module === "overview" ? (
        <>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {Object.entries(overview?.counts || {}).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setModule(key)}
                className="rounded-2xl border border-violet-100 bg-white p-5 text-left shadow-sm dark:border-violet-900/60 dark:bg-slate-900"
              >
                <span className="block text-3xl font-bold tracking-tight text-violet-700 dark:text-violet-300">
                  {value}
                </span>
                <span className="mt-2 block text-sm capitalize text-slate-500 dark:text-slate-400">
                  {key}
                </span>
              </button>
            ))}
          </div>
          <div className="rounded-2xl border border-violet-100 bg-white p-6 dark:border-violet-900/60 dark:bg-slate-900">
            <h3 className="font-semibold text-slate-800 dark:text-slate-100">
              Recent administrative activity
            </h3>
            {!overview?.auditLogs.length && (
              <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                Your administrative changes will appear here.
              </p>
            )}
            <ul className="mt-4 divide-y divide-violet-50">
              {overview?.auditLogs.map((event) => (
                <li
                  key={event.id}
                  className="flex flex-wrap justify-between gap-3 py-3 text-sm"
                >
                  <span className="text-slate-700 dark:text-slate-200">
                    {event.action}{" "}
                    <span className="text-violet-600 dark:text-violet-300">
                      {event.resource}
                    </span>
                  </span>
                  <time className="text-xs text-slate-400">
                    {new Date(event.createdAt).toLocaleString()}
                  </time>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : module === "media" ? (
        <MediaLibrary />
      ) : (
        <div className="rounded-2xl border border-violet-100 bg-white p-5 md:p-7 dark:border-violet-900/60 dark:bg-slate-900">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-violet-500 dark:text-violet-400">
                {resource?.group || "Administration"}
              </span>
              <h2 className="mt-1 text-xl font-bold capitalize">
                {resource?.title || module}
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={exportRows}
                className="inline-flex items-center gap-2 rounded-xl border border-violet-100 px-3 py-2 text-xs text-slate-600 dark:border-violet-900/60 dark:text-slate-200"
              >
                <FiDownload /> Export CSV
              </button>
              {resource && (
                <button
                  className={buttonClass}
                  onClick={() =>
                    setDialog({
                      type: "edit",
                    })
                  }
                >
                  <FiPlus /> Add record
                </button>
              )}
            </div>
          </div>
          <label className="mt-6 flex max-w-md items-center gap-2 rounded-xl border border-violet-100 px-3 py-2 text-slate-400 dark:border-violet-900/60">
            <FiSearch />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search admin records"
              className="min-w-0 flex-1 border-0 bg-transparent text-sm text-slate-700 outline-none dark:text-slate-200"
              placeholder="Find a record…"
            />
          </label>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-violet-100 text-xs text-slate-500 dark:border-violet-900/60 dark:text-slate-400">
                  <th className="p-3">Name / title</th>
                  <th className="p-3">Details</th>
                  <th className="p-3">Status</th>
                  <th className="p-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {visible.map((row) => (
                  <tr
                    key={row.id}
                    className="border-b border-violet-50 align-top dark:border-violet-900/60"
                  >
                    <td className="max-w-xs break-words p-3 font-medium text-slate-700 dark:text-slate-200">
                      {row.name || row.title || row.number || row.id}
                    </td>
                    <td className="max-w-sm break-words p-3 text-xs leading-6 text-slate-500 dark:text-slate-400">
                      {row.email ||
                        row.customer ||
                        row.description ||
                        row.text ||
                        row.sku ||
                        "—"}
                    </td>
                    <td className="p-3">
                      <span className="rounded-lg bg-violet-50 px-2 py-1 text-xs text-violet-700 dark:bg-violet-950/30 dark:text-violet-300">
                        {row.disabled
                          ? "Disabled"
                          : row.status ||
                            row.role ||
                            (row.isSample ? "Sample" : "Active")}
                      </span>
                    </td>
                    <td className="p-3">
                      <div className="flex justify-end gap-3">
                        {module === "users" ? (
                          row.role !== "admin" && (
                            <button
                              aria-label={`${row.disabled ? "Enable" : "Disable"} ${row.name}`}
                              className="text-xs text-violet-600 dark:text-violet-300"
                              onClick={() =>
                                setDialog({
                                  type: "toggle",
                                  row,
                                })
                              }
                            >
                              {row.disabled ? "Enable" : "Disable"}
                            </button>
                          )
                        ) : (
                          <>
                            {resource && (
                              <button
                                aria-label={`Edit ${row.title || row.name || row.number}`}
                                onClick={() =>
                                  setDialog({
                                    type: "edit",
                                    row,
                                  })
                                }
                                className="text-violet-500 dark:text-violet-400"
                              >
                                <FiEdit2 />
                              </button>
                            )}
                            <button
                              aria-label={`Delete ${row.title || row.name || row.id}`}
                              onClick={() =>
                                setDialog({
                                  type: "delete",
                                  row,
                                })
                              }
                              className="text-rose-500 dark:text-rose-400"
                            >
                              <FiTrash2 />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {!loading && !visible.length && (
              <div className="py-12 text-center text-sm text-slate-500 dark:text-slate-400">
                No records yet.{" "}
                {resource
                  ? "Add the first one to get started."
                  : "Nothing to review."}
              </div>
            )}
          </div>
        </div>
      )}
      {dialog && (
        <dialog
          ref={modal}
          onCancel={(e) => {
            if (busy) e.preventDefault();
            else setDialog(null);
          }}
          className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%_-_2rem)] max-w-xl overflow-auto rounded-2xl border-0 bg-white p-7 text-slate-700 shadow-2xl backdrop:bg-slate-950/50 dark:bg-slate-900 dark:text-slate-200"
          aria-labelledby="admin-dialog-title"
        >
          <button
            disabled={busy}
            aria-label="Close admin dialog"
            onClick={() => setDialog(null)}
            className="absolute right-4 top-4 p-2 text-slate-400"
          >
            <FiX />
          </button>
          <h2 id="admin-dialog-title" className="pr-6 text-xl font-bold">
            {dialog.type === "edit"
              ? `${dialog.row ? "Edit" : "Add"} ${resource?.title.toLowerCase()}`
              : dialog.type === "toggle"
                ? "Change account access?"
                : "Delete this record?"}
          </h2>
          {error && (
            <p
              role="alert"
              className="mt-4 text-sm text-red-700 dark:text-red-300"
            >
              {error}
            </p>
          )}
          {dialog.type === "edit" ? (
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const form = new FormData(e.currentTarget);
                const body = Object.fromEntries(
                  [...form].map(([key, value]) => [
                    key,
                    resource.fields[key].type === "number" && value !== ""
                      ? Number(value)
                      : value,
                  ]),
                );
                mutate(
                  `${endpoint}${dialog.row ? "/" + dialog.row.id : ""}`,
                  dialog.row ? "PUT" : "POST",
                  body,
                );
              }}
            >
              {Object.entries(resource.fields).map(([key, f]) => (
                <label
                  className="block text-xs font-medium text-slate-600 dark:text-slate-200"
                  key={key}
                >
                  {f.label}
                  {f.required ? " *" : ""}
                  {f.type === "select" ? (
                    <select
                      name={key}
                      className={inputClass}
                      defaultValue={dialog.row?.[key] || f.options[0]}
                    >
                      {f.options.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  ) : f.type === "textarea" ? (
                    <textarea
                      name={key}
                      rows={4}
                      maxLength={f.max}
                      className={inputClass}
                      defaultValue={
                        dialog.row?.[key] ||
                        (key === "lessonBody"
                          ? dialog.row?.lessons?.[0]?.body
                          : "")
                      }
                    />
                  ) : (
                    <input
                      name={key}
                      type={f.type}
                      required={f.required}
                      min={f.min}
                      max={f.max}
                      maxLength={f.max}
                      className={inputClass}
                      defaultValue={
                        dialog.row?.[key] ??
                        (key === "lessonTitle"
                          ? dialog.row?.lessons?.[0]?.title
                          : "")
                      }
                    />
                  )}
                </label>
              ))}
              <button disabled={busy} className={buttonClass}>
                Save record <FiArrowRight />
              </button>
            </form>
          ) : (
            <>
              <p className="mt-5 text-sm leading-7 text-slate-500 dark:text-slate-400">
                {dialog.type === "toggle"
                  ? `This changes sign-in access for ${dialog.row.email}. Their data will be retained.`
                  : "This removes the selected record. This action cannot be undone."}
              </p>
              <div className="mt-6 flex justify-end gap-3">
                <button
                  disabled={busy}
                  onClick={() => setDialog(null)}
                  className="rounded-xl border border-slate-200 px-4 py-2 text-sm dark:border-slate-700/70"
                >
                  Cancel
                </button>
                <button
                  disabled={busy}
                  className={buttonClass}
                  onClick={() =>
                    dialog.type === "toggle"
                      ? mutate(`/admin/users/${dialog.row.id}`, "PATCH", {
                          disabled: !dialog.row.disabled,
                        })
                      : mutate(`${endpoint}/${dialog.row.id}`, "DELETE")
                  }
                >
                  Confirm
                </button>
              </div>
            </>
          )}
        </dialog>
      )}
    </section>
  );
}
Admin.propTypes = {
  user: PropTypes.shape({
    role: PropTypes.string,
  }).isRequired,
};
