import { isMobile } from "react-device-detect";

import classNames from "clsx";
import Swal from "sweetalert2";

import { GoPasskeyFill } from "react-icons/go";
import { FaFacebook } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";

import { HeaderItem } from "@/components/HeaderItem";
import { useNavigate } from "react-router-dom";

export function Header() {
    const navigate = useNavigate();

    function handleLogin() {
        Swal.fire({
            icon: "warning",
            iconColor: "#1c49ff",
            title: "Acesso restrito",
            text: "O acesso a esta tela é restrito, tem certeza que deseja continuar?",
            confirmButtonText: "Continuar",
            confirmButtonColor: "#1c49ff",
            showCancelButton: true,
            cancelButtonText: "Fechar",
        }).then(({ isConfirmed }) => {
            if (isConfirmed) {
                navigate("/login");
            }
        });
    }

    return (
        <div
            className={classNames(
                "d-flex justify-content-between align-items-center p-3",
                { "px-3 py-2": isMobile }
            )}
        >
            <div className="d-flex align-items-center gap-4">
                <img
                    src="./logo.png"
                    alt="Logo"
                    className="logo"
                    style={{ width: isMobile ? "6rem" : "8rem" }}
                />

                {!isMobile && (
                    <>
                        <HeaderItem title="Home" to="/home" />
                        <HeaderItem title="Produtos" to="/produtos" />
                        <HeaderItem title="Planos" to="/planos" />
                        <HeaderItem
                            title="Velório online"
                            to="/velorio-online"
                        />
                    </>
                )}
            </div>

            {isMobile ? (
                "Menu"
            ) : (
                <div className="d-flex align-items-center gap-3">
                    <a
                        href="https://www.instagram.com/funerariabomjardim/"
                        target="_blank"
                    >
                        <BiLogoInstagramAlt
                            size={25}
                            className="text-light-purple"
                        />
                    </a>

                    <a
                        href="https://www.facebook.com/funerariabomjardim.ce"
                        target="_blank"
                    >
                        <FaFacebook size={21} className="text-light-purple" />
                    </a>

                    <button
                        onClick={handleLogin}
                        className="btn btn-bg-light-purple-text-light d-flex align-items-center gap-2"
                    >
                        <GoPasskeyFill />
                        Associado
                    </button>
                </div>
            )}
        </div>
    );
}
