import { useEffect, useState } from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import { OnlineFuneral } from "@/pages/Configuration/OnlineFuneral";
import { AsideMenu } from "@/components/AsideMenu";
import { ConfigurationsHeader } from "@/components/ConfigurationsHeader";

export function ConfigurationRoutes() {
    const [isAsideMenuOpen, setIsAsideMenuOpen] = useState(false);

    useEffect(() => {
        setIsAsideMenuOpen(true);
    }, []);

    return (
        <div className="d-flex flex-column h-100vh">
            <ConfigurationsHeader
                isOpen={isAsideMenuOpen}
                setIsOpen={setIsAsideMenuOpen}
            />

            <div className="d-flex h-100">
                <AsideMenu
                    isOpen={isAsideMenuOpen}
                    setIsAsideMenuOpen={setIsAsideMenuOpen}
                />

                <div className="bg-background w-100">
                    <div className="mx-4 mt-4">
                        <Routes>
                            <Route
                                index
                                element={<Navigate to="velorio-online" />}
                            />

                            <Route
                                path="velorio-online"
                                element={<OnlineFuneral />}
                            />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}
