import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";
import Modal from "react-bootstrap/Modal";

import { FormattedInput } from "../Formattedinput";

import Logo from "@assets/logo.png";

type ModalProps = {
    show: boolean;
    handleClose: () => void;
};

export function OnlineFuneralPassword({ show, handleClose }: ModalProps) {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            password: "",
        },
        onSubmit: (values) => {
            if (values.password === "1234") {
                navigate("sala-01");

                return;
            }

            Swal.fire({
                icon: "error",
                title: "Senha inválida",
                text: "Por favor, insira a senha correta para acessar a sala.",
            });
        },
    });

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Body className="text-center px-5 py-4">
                <img src={Logo} alt="Logo Bom Jardim" className="mb-3" />

                <h4>Acesso restrito</h4>

                <p>
                    Para respeitar a privacidade da família, o acesso ao velório
                    online é restrito. Por favor, insira a senha fornecida pela
                    família para entrar na sala e prestar sua homenagem.
                </p>

                <form onSubmit={formik.handleSubmit}>
                    <FormattedInput
                        type="password"
                        placeholder="Senha da sala"
                        className="mb-4"
                        {...formik.getFieldProps("password")}
                    />

                    <button
                        className="btn btn-bg-purple-text-light px-4 py-2"
                        type="submit"
                    >
                        Entrar na sala
                    </button>
                </form>
            </Modal.Body>
        </Modal>
    );
}
