import catalog from "./catalog.json";
export const courses = catalog;
export function createWorkspace() {
  return {
    name: "Learner",
    completed: {},
    enrolled: ["design", "web"],
    quizzes: {},
    bookmarks: [],
    assignments: [],
    goal: 3,
    activity: [],
    messages: [],
  };
}
export async function api(path, options = {}) {
  const response = await fetch(`/api${path}`, {
    credentials: "include",
    signal: AbortSignal.timeout(15000),
    ...options,
    headers: { "Content-Type": "application/json", ...options.headers },
  });
  const data = await response
    .json()
    .catch(() => ({ error: "The server is unavailable. Please try again." }));
  if (!response.ok) throw new Error(data.error || "Request failed");
  return data;
}
