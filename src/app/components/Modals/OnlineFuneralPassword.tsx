import Modal from "react-bootstrap/Modal";
import { FormattedInput } from "../Formattedinput";
import { Link } from "react-router-dom";

type ModalProps = {
    show: boolean;
    handleClose: () => void;
};

export function OnlineFuneralPassword({ show, handleClose }: ModalProps) {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Body className="text-center px-5 py-4">
                <img src="./logo.png" alt="Logo Bom Jardim" className="mb-3" />

                <h4>Acesso restrito</h4>

                <p>
                    Para respeitar a privacidade da família, o acesso ao velório
                    online é restrito. Por favor, insira a senha fornecida pela
                    família para entrar na sala e prestar sua homenagem.
                </p>

                <FormattedInput
                    type="password"
                    placeholder="Senha da sala"
                    className="mb-4"
                />

                <Link
                    className="btn btn-bg-purple-text-light px-4 py-2"
                    to="sala-01"
                >
                    Entrar na sala
                </Link>
            </Modal.Body>
        </Modal>
    );
}
