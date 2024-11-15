import classNames from "clsx";

import { FaPlay } from "react-icons/fa";

import { AsideMenuItem } from "./AsideMenuItem";
import { version } from "../../../version";

import "./styles.scss";

type Props = {
    isOpen: boolean;
    setIsAsideMenuOpen: (isOpen: boolean) => void;
};

export function AsideMenu({ isOpen }: Props) {
    return (
        <div
            className={classNames(
                "bg-configurations-purple aside-menu w-18 h-100 px-3 pt-4 d-flex flex-column justify-content-between",
                { "aside-menu-close": !isOpen }
            )}
        >
            <div>
                <AsideMenuItem to="velorio-online">
                    <FaPlay />
                    Velório online
                </AsideMenuItem>
            </div>

            <div className="text-center text-white fs-078rem mb-2">
                VERSÃO {version}
            </div>
        </div>
    );
}
