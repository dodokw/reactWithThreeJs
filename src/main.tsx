import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PreziPresentation from "./PreziPresentation.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PreziPresentation />
  </StrictMode>
);
