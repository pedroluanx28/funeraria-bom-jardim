import Button from "react-bootstrap/Button";

import { HeaderItem } from "@/components/HeaderItem";

export function Header() {
    return (
        <div className="d-flex justify-content-between align-items-start">
            <div className="d-flex align-items-center gap-4 mb-3">
                <img src="./logo.png" alt="Logo" className="logo" />

                <HeaderItem title="Home" to="/" />
                <HeaderItem title="Contato" to="/contato" />
                <HeaderItem title="Planos" to="/planos" />
                <HeaderItem title="Sobre nós" to="/sobre-nos" />
            </div>

            <Button className="btn-bg-light-purple-text-light">
                Associado
            </Button>
        </div>
    );
}
