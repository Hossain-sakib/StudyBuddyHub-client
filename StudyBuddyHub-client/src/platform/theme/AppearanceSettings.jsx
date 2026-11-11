import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";
import { useTheme } from "./theme-context";
export default function AppearanceSettings() {
  const { preference, setTheme } = useTheme();
  return (
    <section className="col-span-full rounded-2xl border border-slate-200/70 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
      <h2 className="font-heading text-lg font-bold text-slate-800 dark:text-slate-100">
        A space that feels right.
      </h2>
      <p className="mt-2 text-xs leading-6 text-slate-400">
        Choose your appearance. This preference stays on this device.
      </p>
      <fieldset className="mt-5 grid gap-3 sm:grid-cols-3">
        <legend className="sr-only">Website appearance</legend>
        {[
          ["light", "Light", FiSun],
          ["dark", "Dark", FiMoon],
          ["system", "Use device setting", FiMonitor],
        ].map(([value, label, Icon]) => (
          <label
            key={value}
            className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-4 text-xs transition ${preference === value ? "border-violet-300 bg-violet-50 text-violet-700 dark:border-violet-700 dark:bg-violet-950/40 dark:text-violet-200" : "border-slate-200 text-slate-500 hover:border-violet-200 dark:border-slate-700 dark:text-slate-400"}`}
          >
            <input
              type="radio"
              name="appearance"
              value={value}
              checked={preference === value}
              onChange={() => setTheme(value)}
              className="accent-violet-600"
            />
            <Icon className="h-4 w-4" />
            {label}
          </label>
        ))}
      </fieldset>
    </section>
  );
}
