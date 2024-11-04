import { Link, useLocation } from "react-router-dom";
import classNames from "clsx";

import { checkIsActive } from "@/utils/routesHelpers";

type HeaderItemProps = {
    title: string;
    to: string;
};

export function HeaderItem({ title, to }: HeaderItemProps) {
    const { pathname } = useLocation();
    const isActive = checkIsActive(pathname, to);

    return (
        <Link
            className={classNames("default-link", {
                "default-link-active": isActive,
            })}
            to={to}
        >
            {title}
        </Link>
    );
}
