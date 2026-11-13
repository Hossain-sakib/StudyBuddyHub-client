import catalog from "./catalog-summary.json";
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
const pendingReads = new Map();
const publicReads = new Set(["/catalog", "/courses", "/content", "/discover"]);
export function api(path, options = {}) {
  const shared =
    (!options.method || options.method === "GET") &&
    publicReads.has(path) &&
    !options.signal;
  if (shared && pendingReads.has(path)) return pendingReads.get(path);
  const request = fetchApi(path, options);
  if (shared) {
    pendingReads.set(path, request);
    request
      .finally(() => {
        if (pendingReads.get(path) === request) pendingReads.delete(path);
      })
      .catch(() => {});
  }
  return request;
}
async function fetchApi(path, options = {}) {
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
