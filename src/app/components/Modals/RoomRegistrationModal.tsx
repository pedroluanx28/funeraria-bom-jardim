import { useFormik } from "formik";
import Modal from "react-bootstrap/Modal";
import { FormattedInput } from "../Formattedinput";

type ModalProps = {
    show: boolean;
    handleClose: () => void;
};

export function RoomRegistrationModal({ show, handleClose }: ModalProps) {
    const formik = useFormik({
        initialValues: {
            roomName: "",
            camLink: "",
            roomPassword: "",
        },
        async onSubmit(values) {
            console.log(values);
        },
    });

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <h4 className="m-0">Cadastrar sala</h4>
            </Modal.Header>

            <Modal.Body>
                <form onSubmit={formik.handleSubmit}>
                    <div className="d-flex flex-column gap-3 mb-4">
                        <FormattedInput
                            label="Nome da sala"
                            {...formik.getFieldProps("roomName")}
                        />

                        <FormattedInput
                            label="Link da câmera"
                            {...formik.getFieldProps("camLink")}
                        />

                        <FormattedInput
                            label="Senha da sala"
                            {...formik.getFieldProps("roomPassword")}
                        />
                    </div>

                    <div className="d-flex justify-content-center gap-3">
                        <button
                            type="submit"
                            className="btn btn-bg-purple-text-light"
                        >
                            Salvar
                        </button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    );
}
