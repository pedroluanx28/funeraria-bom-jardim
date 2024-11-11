import dayjs from "dayjs";

export function Footer() {
    const currentYear = dayjs().get("years");

    return (
        <div className="bg-gray d-flex justify-content-between px-5 py-4 fw-500">
            <p className="m-0">Todos os direitos autorais</p>
            <span>{currentYear}</span>
        </div>
    );
}
