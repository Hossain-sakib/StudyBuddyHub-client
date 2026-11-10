import { renderToString } from "react-dom/server";
import Platform from "./platform/Platform";
export function render() {
  return renderToString(<Platform />);
}
