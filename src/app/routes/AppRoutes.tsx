import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "@/pages/Home";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contato" element={<Home />} />
                <Route path="/planos" element={<Home />} />
                <Route path="/sobre-nos" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}
