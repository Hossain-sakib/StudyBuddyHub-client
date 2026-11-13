import { ThemeProvider } from "./platform/theme/ThemeProvider";
import { renderToString } from "react-dom/server";
import App from "./App";
export function render() {
  return renderToString(
    <ThemeProvider>
      <App />
    </ThemeProvider>,
  );
}
