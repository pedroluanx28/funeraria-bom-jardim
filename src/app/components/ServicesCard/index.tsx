import { FaPhoneAlt } from "react-icons/fa";

import Map from "@assets/map.png";

type ServicesCardProps = {
    title: string;
    description: string;
    icon?: string;
    isMap?: boolean;
    phoneNumber?: string;
};

export function ServicesCard({
    title,
    description,
    icon,
    isMap,
    phoneNumber,
}: ServicesCardProps) {
    return (
        <div className="card-shadow p-3 d-flex flex-column gap-2 rounded bg-white text-center">
            {isMap ? (
                <img src={Map} alt="Mapa de referência" className="w-100" />
            ) : (
                <img
                    src={icon}
                    alt="Ícone do card de serviços"
                    className="w-100"
                />
            )}

            <h6 className="m-0">{title}</h6>

            <p className="m-0">{description}</p>

            {phoneNumber ? (
                <div className="text-purple d-flex align-items-center gap-2 justify-content-center">
                    <FaPhoneAlt />
                    {phoneNumber}
                </div>
            ) : (
                <button className="btn btn-bg-light-purple-text-light">
                    Saiba mais
                </button>
            )}
        </div>
    );
}
