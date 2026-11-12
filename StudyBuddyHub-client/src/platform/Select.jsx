import { Children, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FiCheck, FiChevronDown } from "react-icons/fi";
import PropTypes from "prop-types";
// One keyboard-accessible dropdown for forms and filters. The hidden input keeps FormData simple.
export default function Select({
  label,
  name,
  value,
  defaultValue,
  onChange,
  children,
  disabled = false,
  required = false,
  className = "",
}) {
  const options = Children.toArray(children).map((option) => ({
    value: String(option.props.value ?? option.props.children),
    label: option.props.children,
    disabled: !!option.props.disabled,
  }));
  const [internal, setInternal] = useState(
    String(defaultValue ?? options[0]?.value ?? ""),
  );
  const selected = String(value ?? internal),
    index = options.findIndex((o) => o.value === selected);
  const [open, setOpen] = useState(false),
    [active, setActive] = useState(Math.max(0, index)),
    [position, setPosition] = useState(null);
  const button = useRef(),
    list = useRef(),
    search = useRef({ text: "", time: 0 });
  const id = useId();
  const chosen = options[index];
  function choose(i) {
    const option = options[i];
    if (!option || option.disabled) return;
    setInternal(option.value);
    onChange?.({ target: { name, value: option.value } });
    setOpen(false);
    button.current?.focus();
  }
  function next(from, delta) {
    for (let n = 1; n <= options.length; n++) {
      const i = (from + delta * n + options.length * 2) % options.length;
      if (!options[i].disabled) return i;
    }
    return from;
  }
  useEffect(() => {
    if (!open) return;
    const place = () => {
      const box = button.current.getBoundingClientRect();
      const height = Math.min(288, Math.max(120, options.length * 42 + 16));
      const below = innerHeight - box.bottom;
      setPosition({
        left: Math.max(
          8,
          Math.min(box.left, innerWidth - Math.max(180, box.width) - 8),
        ),
        top:
          below >= Math.min(height, 180)
            ? box.bottom + 6
            : Math.max(8, box.top - height - 6),
        width: Math.min(innerWidth - 16, Math.max(180, box.width)),
        maxHeight: Math.max(
          100,
          Math.min(288, below >= 180 ? below - 14 : box.top - 14),
        ),
      });
    };
    place();
    const outside = (e) => {
      if (
        !button.current?.contains(e.target) &&
        !list.current?.contains(e.target)
      )
        setOpen(false);
    };
    document.addEventListener("pointerdown", outside);
    window.addEventListener("resize", place);
    window.addEventListener("scroll", place, true);
    return () => {
      document.removeEventListener("pointerdown", outside);
      window.removeEventListener("resize", place);
      window.removeEventListener("scroll", place, true);
    };
  }, [open, options.length]);
  useEffect(() => {
    if (open)
      list.current
        ?.querySelector(`[data-index="${active}"]`)
        ?.scrollIntoView({ block: "nearest" });
  }, [active, open]);
  return (
    <span className="relative block min-w-0">
      {name && (
        <input type="hidden" name={name} value={selected} disabled={disabled} />
      )}
      <button
        ref={button}
        type="button"
        role="combobox"
        aria-label={label}
        aria-required={required || undefined}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={open ? id : undefined}
        aria-activedescendant={open ? `${id}-${active}` : undefined}
        disabled={disabled}
        onClick={() => {
          setActive(Math.max(0, index));
          setOpen(!open);
        }}
        onKeyDown={(e) => {
          if (["ArrowDown", "ArrowUp", "Home", "End"].includes(e.key)) {
            e.preventDefault();
            if (!open) {
              setActive(
                e.key === "End" ? options.length - 1 : Math.max(0, index),
              );
              setOpen(true);
            } else
              setActive(
                e.key === "Home"
                  ? next(options.length - 1, 1)
                  : e.key === "End"
                    ? next(0, -1)
                    : next(active, e.key === "ArrowDown" ? 1 : -1),
              );
          } else if (open && ["Enter", " "].includes(e.key)) {
            e.preventDefault();
            choose(active);
          } else if (open && e.key === "Escape") {
            e.preventDefault();
            e.stopPropagation();
            setOpen(false);
          } else if (e.key === "Tab") setOpen(false);
          else if (e.key.length === 1 && e.key !== " ") {
            const now = Date.now();
            search.current = {
              text:
                (now - search.current.time < 700 ? search.current.text : "") +
                e.key.toLowerCase(),
              time: now,
            };
            const i = options.findIndex(
              (o) =>
                !o.disabled &&
                String(o.label).toLowerCase().startsWith(search.current.text),
            );
            if (i >= 0) {
              e.preventDefault();
              setActive(i);
              setOpen(true);
            }
          }
        }}
        className={`flex min-h-11 w-full items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-left text-sm font-medium text-slate-700 shadow-sm transition hover:border-violet-300 focus-visible:border-violet-500 focus-visible:ring-2 focus-visible:ring-violet-500/30 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:opacity-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-violet-500 ${className}`}
      >
        <span className="min-w-0 truncate">
          {chosen?.label || "Choose an option"}
        </span>
        <FiChevronDown
          aria-hidden="true"
          className={`h-4 w-4 shrink-0 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open &&
        position &&
        createPortal(
          <div
            ref={list}
            id={id}
            role="listbox"
            aria-label={label}
            style={position}
            className="fixed z-[2000] overflow-y-auto rounded-xl border border-slate-200 bg-white p-1.5 text-sm shadow-xl shadow-slate-900/15 dark:border-slate-700 dark:bg-slate-900 dark:shadow-black/40"
          >
            {options.map((option, i) => (
              <div
                key={option.value}
                id={`${id}-${i}`}
                role="option"
                aria-selected={option.value === selected}
                aria-disabled={option.disabled || undefined}
                data-index={i}
                onPointerMove={() => !option.disabled && setActive(i)}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => choose(i)}
                className={`flex cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-2.5 leading-5 ${option.disabled ? "cursor-not-allowed opacity-40" : ""} ${active === i ? "bg-violet-50 text-violet-800 dark:bg-violet-950 dark:text-violet-200" : "text-slate-600 dark:text-slate-300"} ${option.value === selected ? "font-semibold" : ""}`}
              >
                <span>{option.label}</span>
                {option.value === selected && (
                  <FiCheck className="h-4 w-4 text-violet-600 dark:text-violet-300" />
                )}
              </div>
            ))}
          </div>,
          button.current?.closest("dialog") || document.body,
        )}
    </span>
  );
}
Select.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  className: PropTypes.string,
};
