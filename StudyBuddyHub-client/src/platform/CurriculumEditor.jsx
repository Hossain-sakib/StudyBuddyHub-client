import Select from "./Select";
import { useState } from "react";
import PropTypes from "prop-types";
const input =
  "mt-2 w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-800 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100";
const smallButton =
  "rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium disabled:opacity-40 dark:border-slate-700";
export default function CurriculumEditor({ name, initial = [] }) {
  const empty = () =>
    name === "lessons"
      ? { title: "", body: "" }
      : { question: "", choices: ["", "", ""], answer: 0 };
  const [items, setItems] = useState(() =>
    initial.length ? structuredClone(initial) : [empty()],
  );
  function update(index, key, value) {
    setItems((rows) =>
      rows.map((row, i) => (i === index ? { ...row, [key]: value } : row)),
    );
  }
  function move(index, delta) {
    setItems((rows) => {
      const next = [...rows];
      [next[index], next[index + delta]] = [next[index + delta], next[index]];
      return next;
    });
  }
  return (
    <fieldset className="space-y-4 sm:col-span-2 rounded-xl border border-slate-200 p-4 dark:border-slate-700">
      <legend className="px-2 text-sm font-semibold">
        {name === "lessons" ? "Course lessons" : "Practice questions"}
      </legend>
      <input type="hidden" name={name} value={JSON.stringify(items)} />
      {items.map((item, i) => (
        <div
          key={i}
          className="space-y-3 rounded-xl bg-slate-50 p-4 dark:bg-slate-800/50"
        >
          <div className="flex flex-wrap items-center gap-2">
            <strong className="mr-auto text-xs">
              {name === "lessons" ? "Lesson" : "Question"} {i + 1}
            </strong>
            <button
              type="button"
              className={smallButton}
              disabled={i === 0}
              onClick={() => move(i, -1)}
              aria-label={`Move ${name} item ${i + 1} up`}
            >
              Up
            </button>
            <button
              type="button"
              className={smallButton}
              disabled={i === items.length - 1}
              onClick={() => move(i, 1)}
              aria-label={`Move ${name} item ${i + 1} down`}
            >
              Down
            </button>
            <button
              type="button"
              className={smallButton}
              disabled={items.length === 1}
              onClick={() => setItems(items.filter((_, n) => n !== i))}
            >
              Remove {name === "lessons" ? "lesson" : "question"} {i + 1}
            </button>
          </div>
          {name === "lessons" ? (
            <>
              <label className="block text-xs">
                Lesson {i + 1} title
                <input
                  className={input}
                  value={item.title}
                  required
                  maxLength={200}
                  onChange={(e) => update(i, "title", e.target.value)}
                />
              </label>
              <label className="block text-xs">
                Lesson {i + 1} content
                <textarea
                  className={input}
                  rows={6}
                  value={item.body}
                  required
                  maxLength={10000}
                  onChange={(e) => update(i, "body", e.target.value)}
                />
              </label>
            </>
          ) : (
            <>
              <label className="block text-xs">
                Question {i + 1}
                <input
                  className={input}
                  value={item.question}
                  required
                  maxLength={500}
                  onChange={(e) => update(i, "question", e.target.value)}
                />
              </label>
              {item.choices.map((choice, c) => (
                <label key={c} className="block text-xs">
                  Question {i + 1} answer {c + 1}
                  <input
                    className={input}
                    required
                    maxLength={300}
                    value={choice}
                    onChange={(e) =>
                      update(
                        i,
                        "choices",
                        item.choices.map((v, n) =>
                          n === c ? e.target.value : v,
                        ),
                      )
                    }
                  />
                </label>
              ))}
              <label className="block text-xs">
                Correct answer for question {i + 1}
                <Select
                  label={`Correct answer for question ${i + 1}`}
                  className={input}
                  value={item.answer}
                  onChange={(e) => update(i, "answer", Number(e.target.value))}
                >
                  {item.choices.map((_, c) => (
                    <option key={c} value={c}>
                      Answer {c + 1}
                    </option>
                  ))}
                </Select>
              </label>
            </>
          )}
        </div>
      ))}
      <button
        type="button"
        className={smallButton}
        disabled={items.length >= 50}
        onClick={() => setItems([...items, empty()])}
      >
        Add {name === "lessons" ? "lesson" : "question"}
      </button>
    </fieldset>
  );
}
CurriculumEditor.propTypes = {
  name: PropTypes.oneOf(["lessons", "quiz"]).isRequired,
  initial: PropTypes.array,
};
