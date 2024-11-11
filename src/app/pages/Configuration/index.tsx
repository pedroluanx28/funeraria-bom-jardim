import { RoomRegistrationModal } from "@/components/Modals/RoomRegistrationModal";
import { useState } from "react";

import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

import { FaPlus, FaPencilAlt, FaPowerOff } from "react-icons/fa";

export function Configuration() {
    const [show, setShow] = useState(false);

    return (
        <div className="w-100 px-5">
            <button
                className="btn btn-bg-purple-text-light px-4 d-flex align-items-center gap-3 mb-4"
                onClick={() => setShow(true)}
            >
                <FaPlus />
                Nova sala
            </button>

            <Card>
                <Card.Header className="d-flex justify-content-between align-items-center bg-white p-4">
                    <h4 className="fw-400 m-0">Gerenciamento de salas</h4>
                </Card.Header>

                <Card.Body>
                    <Table className="table-row-dashed table-row-gray-300">
                        <thead>
                            <tr>
                                <th>Sala</th>
                                <th>Link da câmera</th>
                                <th>Senha da sala</th>
                                <th>Status</th>
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr
                                style={{
                                    borderBottom: "transparent 0px solid",
                                }}
                            >
                                <td>sala tal</td>
                                <td>link tal tal</td>
                                <td>Lorem</td>
                                <td>Lorem ipsum</td>
                                <td className="w-1px">
                                    <div className="d-flex gap-3">
                                        <button className="btn gray-button">
                                            <FaPencilAlt />
                                        </button>

                                        <button className="btn gray-button">
                                            <FaPowerOff />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>

            <RoomRegistrationModal
                show={show}
                handleClose={() => setShow(false)}
            />
        </div>
    );
}
