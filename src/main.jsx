import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App.jsx"
import Background from "./components/Background.jsx"
import "./index.css"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
    <Background />
    
    <div className="relative z-10">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </div>
  </StrictMode>
)
