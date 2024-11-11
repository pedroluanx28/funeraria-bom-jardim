import { Link, Route, Routes } from "react-router-dom";
import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import { Configuration } from "@/pages/Configuration";
import { useState } from "react";
import { Header } from "@/components/Header";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";
import { FaPlay } from "react-icons/fa";

export function ConfigurationRoutes() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="d-flex flex-column">
            <Header />

            <div className="d-flex">
                <Sidebar
                    rootStyles={{
                        [`.${sidebarClasses.container}`]: {
                            backgroundColor: "#2E57FB",
                            minHeight: "100vh",
                            height: "100%",
                        },
                    }}
                    collapsed={collapsed}
                >
                    <>
                        <button
                            className="btn"
                            onClick={() => setCollapsed(!collapsed)}
                        >
                            {collapsed ? (
                                <RxDoubleArrowRight color="#fff" size={20} />
                            ) : (
                                <RxDoubleArrowLeft color="#fff" size={20} />
                            )}
                        </button>
                        <Menu
                            menuItemStyles={{
                                button: {
                                    [`&.active`]: {
                                        // backgroundColor: "#13395e",
                                        // color: "#b6c8d9",
                                    },
                                },
                            }}
                        >
                            <MenuItem
                                component={<Link to="teste" />}
                                className="text-light"
                            >
                                {collapsed ? (
                                    <FaPlay />
                                ) : (
                                    <>
                                        <FaPlay className="me-3" />
                                        Velório online
                                    </>
                                )}
                            </MenuItem>
                        </Menu>
                    </>
                </Sidebar>

                <Routes>
                    <Route index element={<Configuration />} />
                </Routes>
            </div>
        </div>
    );
}
