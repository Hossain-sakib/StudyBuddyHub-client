import { AdminInsights, IntegrationStatus } from "./AdminInsights";
import Select from "./Select";
import CurriculumEditor from "./CurriculumEditor";
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
  const [statusFilter, setStatusFilter] = useState("All statuses");
  const [sort, setSort] = useState("Newest first");
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    setQuery("");
    setStatusFilter("All statuses");
    setPageNumber(1);
  }, [module]);
  useEffect(() => {
    setPageNumber(1);
  }, [query, statusFilter, sort]);
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
  const statuses = [
    ...new Set(
      rows.map((row) =>
        row.disabled ? "Disabled" : row.status || row.role || "Active",
      ),
    ),
  ];
  const visible = rows
    .filter(
      (row) =>
        JSON.stringify(row).toLowerCase().includes(query.toLowerCase()) &&
        (statusFilter === "All statuses" ||
          (row.disabled ? "Disabled" : row.status || row.role || "Active") ===
            statusFilter),
    )
    .sort((a, b) =>
      sort === "A to Z"
        ? String(a.name || a.title || a.number || "").localeCompare(
            String(b.name || b.title || b.number || ""),
          )
        : String(b.updatedAt || b.createdAt || "").localeCompare(
            String(a.updatedAt || a.createdAt || ""),
          ),
    );
  const pages = Math.max(1, Math.ceil(visible.length / 20));
  const currentPage = Math.min(pageNumber, pages);
  const pagedRows = visible.slice((currentPage - 1) * 20, currentPage * 20);
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
      <div className="md:hidden">
        <Select
          label="Administration module"
          value={module}
          onChange={(e) => setModule(e.target.value)}
        >
          {[
            ["overview", "Overview"],
            ["users", "Users"],
            ...(overview?.resources || []).map((r) => [r.key, r.title]),
            ["assignments", "Assignment moderation"],
            ["messages", "Message moderation"],
            ["media", "Media library"],
          ].map(([key, title]) => (
            <option key={key} value={key}>
              {title}
            </option>
          ))}
        </Select>
      </div>
      <nav
        aria-label="Administration modules"
        className="hidden flex-wrap gap-2 md:flex"
      >
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
          <IntegrationStatus />
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
          <AdminInsights module={module} rows={rows} />
          <div className="mt-6 grid gap-3 lg:grid-cols-[minmax(0,1fr)_190px_170px]">
            <label className="flex min-h-11 items-center gap-2 rounded-xl border border-violet-100 px-3 py-2 text-slate-400 dark:border-violet-900/60">
              <FiSearch />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search admin records"
                className="min-w-0 flex-1 border-0 bg-transparent text-sm text-slate-700 outline-none dark:text-slate-200"
                placeholder="Find a record…"
              />
            </label>
            <Select
              label="Filter admin status"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              {["All statuses", ...statuses].map((v) => (
                <option key={v}>{v}</option>
              ))}
            </Select>
            <Select
              label="Sort admin records"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              {["Newest first", "A to Z"].map((v) => (
                <option key={v}>{v}</option>
              ))}
            </Select>
          </div>
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
                {pagedRows.map((row) => (
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
                            {module === "leads" && !row.contactId && (
                              <button
                                className="whitespace-nowrap text-xs text-violet-600 dark:text-violet-300"
                                disabled={busy}
                                onClick={() =>
                                  setDialog({ type: "convert", row })
                                }
                              >
                                Convert to contact
                              </button>
                            )}
                            {module === "inventory" && (
                              <button
                                className="whitespace-nowrap text-xs text-violet-600 dark:text-violet-300"
                                disabled={busy}
                                onClick={() =>
                                  setDialog({ type: "stock", row })
                                }
                              >
                                Adjust stock
                              </button>
                            )}
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
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
            <span>
              {visible.length} matching records · Page {currentPage} of {pages}
            </span>
            <div className="flex gap-2">
              <button
                className="rounded-lg border border-slate-200 px-3 py-2 disabled:opacity-40 dark:border-slate-700"
                disabled={currentPage === 1}
                onClick={() => setPageNumber(currentPage - 1)}
              >
                Previous records
              </button>
              <button
                className="rounded-lg border border-slate-200 px-3 py-2 disabled:opacity-40 dark:border-slate-700"
                disabled={currentPage === pages}
                onClick={() => setPageNumber(currentPage + 1)}
              >
                Next records
              </button>
            </div>
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
          className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%_-_2rem)] max-w-3xl overflow-auto rounded-2xl border-0 bg-white p-7 text-slate-700 shadow-2xl backdrop:bg-slate-950/50 dark:bg-slate-900 dark:text-slate-200"
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
                : dialog.type === "convert"
                  ? "Convert lead to contact?"
                  : dialog.type === "stock"
                    ? "Adjust inventory stock"
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
          {dialog.type === "stock" ? (
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const values = new FormData(e.currentTarget);
                mutate(`/admin/inventory/${dialog.row.id}/adjust`, "POST", {
                  delta: Number(values.get("delta")),
                  reason: values.get("reason"),
                });
              }}
            >
              <p className="text-sm">
                {dialog.row.name} · Current stock: {dialog.row.quantity}
              </p>
              <label className="block text-sm">
                Quantity change (negative to remove)
                <input
                  className={inputClass}
                  type="number"
                  name="delta"
                  required
                  step="1"
                  min="-1000000"
                  max="1000000"
                />
              </label>
              <label className="block text-sm">
                Reason
                <input
                  className={inputClass}
                  name="reason"
                  required
                  maxLength={200}
                />
              </label>
              <button className={buttonClass} disabled={busy}>
                Save stock adjustment
              </button>
            </form>
          ) : dialog.type === "edit" ? (
            <form
              className="mt-6 grid gap-4 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                const form = new FormData(e.currentTarget);
                const body = Object.fromEntries(
                  [...form].map(([key, value]) => [
                    key,
                    ["lessons", "quiz"].includes(resource.fields[key].type)
                      ? JSON.parse(value)
                      : resource.fields[key].type === "number" && value !== ""
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
              {Object.entries(resource.fields).map(([key, f]) =>
                ["lessons", "quiz"].includes(f.type) ? (
                  <CurriculumEditor
                    key={key}
                    name={key}
                    initial={dialog.row?.[key]}
                  />
                ) : (
                  <label
                    className={`block text-xs font-medium text-slate-600 dark:text-slate-200 ${f.type === "textarea" ? "sm:col-span-2" : ""}`}
                    key={key}
                  >
                    {f.label}
                    {f.required ? " *" : ""}
                    {f.type === "select" ? (
                      <Select
                        label={f.label}
                        name={key}
                        className={inputClass}
                        defaultValue={dialog.row?.[key] || f.options[0]}
                      >
                        {f.options.map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </Select>
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
                ),
              )}
              <button disabled={busy} className={buttonClass}>
                Save record <FiArrowRight />
              </button>
            </form>
          ) : (
            <>
              <p className="mt-5 text-sm leading-7 text-slate-500 dark:text-slate-400">
                {dialog.type === "toggle"
                  ? `This changes sign-in access for ${dialog.row.email}. Their data will be retained.`
                  : dialog.type === "convert"
                    ? "Create a contact from this lead and mark the lead as won. Repeating the conversion will not duplicate the contact."
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
                    dialog.type === "convert"
                      ? mutate(
                          `/admin/leads/${dialog.row.id}/convert`,
                          "POST",
                          {},
                        )
                      : dialog.type === "toggle"
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
