import path from "path";

export function getCurrentUrl(pathname: string) {
    return `/${pathname.split("/")[1]}`;
}

export function checkIsActive(
    pathname: string,
    url: string,
    isConfigurations = false
) {
    const current = getCurrentUrl(pathname);
    const configurationsPath = pathname.startsWith("/gerenciamento/")
        ? pathname.slice("/gerenciamento/".length)
        : "";

    if (!current || !url) {
        return false;
    }

    if (isConfigurations) {
        if (configurationsPath === url) {
            return true;
        }
    }

    if (current === url) {
        return true;
    }

    return false;
}
