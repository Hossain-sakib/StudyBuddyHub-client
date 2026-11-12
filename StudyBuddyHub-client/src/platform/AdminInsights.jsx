import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { api } from "./store";
export function IntegrationStatus() {
  const [data, setData] = useState(null);
  useEffect(() => {
    let active = true;
    api("/admin/integrations")
      .then((d) => active && setData(d))
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);
  if (!data) return null;
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
      <h3 className="text-sm font-bold">Connected services</h3>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {[
          ["Database", data.database],
          ["Cloudinary", data.media],
          ["Email delivery", data.email],
        ].map(([name, status]) => (
          <div
            key={name}
            className="flex items-center justify-between gap-3 rounded-xl bg-slate-50 p-3 text-xs dark:bg-slate-800"
          >
            <span>{name}</span>
            <span
              className={
                status === "missing"
                  ? "text-amber-700 dark:text-amber-300"
                  : "text-emerald-700 dark:text-emerald-300"
              }
            >
              {status === "missing" ? "Setup needed" : status}
            </span>
          </div>
        ))}
      </div>
      {data.demo && (
        <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
          Demo seed completed: {data.demo.total} labeled records. Existing
          records were preserved.
        </p>
      )}
    </section>
  );
}
export function AdminInsights({ module, rows }) {
  const today = new Date().toISOString().slice(0, 10);
  let stats = [];
  if (module === "leads")
    stats = [
      [
        "Open leads",
        rows.filter((r) => !["Won", "Lost"].includes(r.status)).length,
      ],
      ["Qualified", rows.filter((r) => r.status === "Qualified").length],
      ["Won", rows.filter((r) => r.status === "Won").length],
    ];
  if (module === "tasks")
    stats = [
      ["To do", rows.filter((r) => r.status === "To do").length],
      ["In progress", rows.filter((r) => r.status === "In progress").length],
      [
        "Overdue",
        rows.filter((r) => r.due && r.due < today && r.status !== "Done")
          .length,
      ],
    ];
  if (module === "inventory")
    stats = [
      ["Items", rows.length],
      ["Low stock", rows.filter((r) => r.quantity <= r.reorderAt).length],
      ["Out of stock", rows.filter((r) => r.quantity === 0).length],
    ];
  if (module === "invoices")
    stats = [
      ["Awaiting payment", rows.filter((r) => r.status === "Sent").length],
      [
        "Overdue",
        rows.filter((r) => r.status === "Sent" && r.due && r.due < today)
          .length,
      ],
      ...Array.from(
        new Set(rows.filter((r) => r.status === "Sent").map((r) => r.currency)),
      ).map((currency) => [
        `${currency} outstanding`,
        new Intl.NumberFormat(undefined, {
          style: "currency",
          currency,
        }).format(
          rows
            .filter((r) => r.status === "Sent" && r.currency === currency)
            .reduce((n, r) => n + (r.amountMinor || 0), 0) / 100,
        ),
      ]),
    ];
  if (!stats.length) return null;
  return (
    <div className="mt-5 grid gap-3 sm:grid-cols-3">
      {stats.map(([title, value]) => (
        <div
          key={title}
          className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800/50"
        >
          <p className="text-xs text-slate-500 dark:text-slate-400">{title}</p>
          <p className="mt-2 text-lg font-bold text-slate-800 dark:text-slate-100">
            {value}
          </p>
        </div>
      ))}
    </div>
  );
}
AdminInsights.propTypes = {
  module: PropTypes.string.isRequired,
  rows: PropTypes.array.isRequired,
};
