import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";

import ConfigurationsLogo from "@assets/configurations-logo.png";

type Props = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
};

export function ConfigurationsHeader({ isOpen, setIsOpen }: Props) {
    function getNameAbbreviation(name: string) {
        if (!name) {
            return "";
        }

        const [firstName, lastName] = name.split(" ");

        if (!lastName) {
            return `${firstName[0].toUpperCase()}`;
        }

        return `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`;
    }

    return (
        <div className="d-flex justify-content-between">
            <div className="w-18 d-flex align-items-center justify-content-between py-2 px-3 bg-configurations-purple">
                <img src={ConfigurationsLogo} alt="Logo Bom Jardim" />

                <button
                    className="bg-transparent border-0"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? (
                        <RxDoubleArrowLeft color="#fff" size={20} />
                    ) : (
                        <RxDoubleArrowRight color="#fff" size={20} />
                    )}
                </button>
            </div>

            <div className="d-flex align-items-center gap-3 text-light-blue fw-500 w-100 justify-content-end">
                <span>Olá, João de Barro</span>

                <div className="circle me-3">
                    {getNameAbbreviation("João Barro")}
                </div>
            </div>
        </div>
    );
}
