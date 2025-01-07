import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "@material-tailwind/react";
import "../material-tailwind.d.ts";
import { BrowserRouter } from "react-router-dom";
import { themeProvider } from "./services/theme/themeProvider.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider value={themeProvider}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
