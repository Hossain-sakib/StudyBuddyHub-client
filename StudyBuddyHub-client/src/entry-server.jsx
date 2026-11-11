import { ThemeProvider } from "./platform/theme/ThemeProvider";
import { renderToString } from "react-dom/server";
import Platform from "./platform/Platform";
export function render() {
  return renderToString(
    <ThemeProvider>
      <Platform />
    </ThemeProvider>,
  );
}
