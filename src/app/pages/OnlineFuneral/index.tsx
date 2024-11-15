import { useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { OnlineFuneralPassword } from "@/components/Modals/OnlineFuneralPassword";
import { Header } from "@/components/Header";
import { Card } from "@/components/Card";
import { Footer } from "@/components/Footer";

import OnlineFuneralBackground from "@assets/online-funeral-background.png";
import IconAccessibility from "@assets/icons/accessibility.png";
import IconUserLock from "@assets/icons/user-lock.png";
import IconPlayFuneral from "@assets/icons/play-funeral.png";

import "./styles.scss";

export function OnlineFuneral() {
    const [show, setShow] = useState(false);

    return (
        <div className="d-flex flex-column min-h-100vh">
            <div className="online-funeral-container">
                <Header />

                <img
                    src={OnlineFuneralBackground}
                    alt="Velório online fundo"
                    className="online-funeral-background"
                />

                <h1 className="m-0 fw-600 page-title text-purple text-center">
                    Velório online
                </h1>
            </div>

            <div className="flex-grow-1">
                <div className="text-center mb-5">
                    <p className="m-0 fw-600">Conheça mais sobre...</p>

                    <h3 className="m-0 text-purple fw-600">Como funciona?</h3>
                </div>

                <div className="px-5 mb-5">
                    <Row className="m-0">
                        <Col className="d-flex">
                            <Card
                                title="Acompanhe aonde estiver"
                                description="Permita-se estar presente, mesmo à distância. Nosso serviço de velório online oferece a possibilidade de acompanhar a despedida de um ente querido, seja qual for sua localização."
                                icon={IconAccessibility}
                            />
                        </Col>

                        <Col className="d-flex">
                            <Card
                                title="Privacidade e Respeito"
                                description="Respeitamos profundamente a intimidade deste momento. Por isso, o acesso à transmissão é protegido por uma senha exclusiva, fornecida pela família."
                                icon={IconUserLock}
                            />
                        </Col>

                        <Col className="d-flex">
                            <Card
                                title="Como acessar a cerimônia"
                                description="Para acessar o velório, clique no botão abaixo e insira a senha exclusiva fornecida. Caso tenha dificuldades, nossa equipe está disponível para ajuda."
                                icon={IconPlayFuneral}
                            />
                        </Col>
                    </Row>
                </div>

                <div className="text-center mb-6">
                    <div className="mb-4">
                        <h3 className="m-0 text-purple fw-bold">
                            Preste sua homenagem
                        </h3>

                        <p className="m-0 fw-500">
                            Acesse a cerimônia virtual para se despedir de um
                            ente querido com respeito e privacidade.
                        </p>
                    </div>

                    <button
                        className="btn btn-bg-light-purple-text-light px-4 py-2"
                        onClick={() => setShow(true)}
                    >
                        Entrar em uma sala
                    </button>
                </div>
            </div>

            <Footer />

            <OnlineFuneralPassword
                show={show}
                handleClose={() => setShow(false)}
            />
        </div>
    );
}
