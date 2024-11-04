import { StrictMode } from "react";

import { createRoot } from "react-dom/client";
import { AppRoutes } from "@/routes/AppRoutes";

import "../global.scss";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <AppRoutes />
    </StrictMode>
);
