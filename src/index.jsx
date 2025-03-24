import { createRoot } from "react-dom/client"
import App from "./App"
import "bootstrap/dist/css/bootstrap.css"

const ROOT = createRoot(document.getElementById("root"))

ROOT.render(
    <App />
)