/** Shared Tailwind recipe expansion; styling stays in the public/workspace modules. */
export const commonRecipes = {
  button:
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs font-semibold transition duration-150 disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none [&_svg]:h-4 [&_svg]:w-4",
  primary: "bg-violet-600 text-white shadow-sm hover:bg-violet-700",
  eyebrow:
    "text-[11px] tracking-[.8px] font-semibold uppercase text-[#776487] block max-[701px]:text-[10px] dark:text-slate-100",
  "empty-state":
    "text-center p-[65px_20px] text-[#776487] [&>svg]:w-[40px] [&>svg]:h-[40px] [&>svg]:mb-[16px] [&>svg]:text-[#776487] [&_h2]:text-[20px] [&_h2]:text-[#8a709e] [&_p]:text-[12px] [&_p]:m-[13px_0_22px] [&_p]:leading-[1.8] [&>.button]:mt-[4px] max-[701px]:p-[40px_12px] max-[701px]:[&_h2]:text-[17px] max-[701px]:[&_p]:text-[13px] dark:text-slate-100 dark:[&>svg]:text-slate-100 dark:[&_h2]:text-slate-300",
};
export function applyRecipes(recipes, tokens = "") {
  return tokens
    .split(/\s+/)
    .filter(Boolean)
    .map((token) => token + " " + (recipes[token] || ""))
    .join(" ");
}
