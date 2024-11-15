import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { OnlineFuneralRoutes } from "./OnlineFuneralRoutes";

import { Home } from "@/pages/Home";
import { Contact } from "@/pages/Contact";
import { Plans } from "@/pages/Plans";
import { Login } from "@/pages/Login";
import { ConfigurationRoutes } from "./ConfigurationRoutes";

export function AppRoutes() {
    return (
        <BrowserRouter basename="/funeraria-bom-jardim">
            <Routes>
                <Route path="/*" element={<Navigate to="/home" />} />
                <Route path="home" element={<Home />} />
                <Route path="produtos" element={<Contact />} />
                <Route path="planos" element={<Plans />} />
                <Route
                    path="velorio-online/*"
                    element={<OnlineFuneralRoutes />}
                />
                <Route
                    path="gerenciamento/*"
                    element={<ConfigurationRoutes />}
                />
                <Route path="login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}
