import { ReactNode } from "react";

import classNames from "clsx";
import { Link, useLocation } from "react-router-dom";

import { checkIsActive } from "@/utils/routesHelpers";

type Props = {
    to: string;
    children: ReactNode;
};

export function AsideMenuItem({ to, children }: Props) {
    const { pathname } = useLocation();
    const isActive = checkIsActive(pathname, to, true);

    return (
        <Link
            to={to}
            className={classNames(
                "d-flex align-items-center gap-3 text-decoration-none py-2 px-3 rounded-2 aside-menu-item",
                {
                    "aside-menu-item-active": isActive,
                }
            )}
        >
            {children}
        </Link>
    );
}
