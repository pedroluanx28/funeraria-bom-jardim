import { Route, Routes } from "react-router-dom";

import { OnlineFuneral } from "@/pages/OnlineFuneral";
import { FuneralVideoRoom } from "@/pages/FuneralVideoRoom";

export function OnlineFuneralRoutes() {
    return (
        <Routes>
            <Route index element={<OnlineFuneral />} />
            <Route path="sala-01" element={<FuneralVideoRoom />} />
        </Routes>
    );
}
