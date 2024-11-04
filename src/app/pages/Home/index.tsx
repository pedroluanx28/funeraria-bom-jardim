import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Card } from "@/components/Card";

import "./styles.scss";
import { Header } from "@/components/Header";

export function Home() {
    return (
        <>
            <div className="background p-3 mb-5">
                <Header />

                <div className="h-100 d-flex flex-column align-items-start mt-5rem ps-5">
                    <h1 className="text-purple">Velório online</h1>

                    <p className="text-dark">
                        Participe e preste homenagens de qualquer lugar com{" "}
                        <br />
                        segurança e privacidade, respeitamos este momento,{" "}
                        <br />
                        portanto uma senha de acesso é fornecida à família{" "}
                        <br />
                        enlutada.
                    </p>

                    <Button className="btn-bg-purple-text-light px-5 py-2">
                        Saiba mais
                    </Button>
                </div>
            </div>

            <div className="px-5">
                <Row className="gap-4">
                    <Col className="d-flex">
                        <Card
                            icon="./icons/bom-jardim.png"
                            title="Nossos serviçoes"
                            description="Conheça a trajetória da nossa funerária e nossos serviços e valores"
                            buttonText="Saiba mais"
                        />
                    </Col>

                    <Col className="d-flex">
                        <Card
                            icon="./icons/hand-heart.png"
                            title="Confira nossos planos"
                            description="Descubra o plano que melhor atende às suas necessidades e da sua família"
                            buttonText="Saiba mais"
                        />
                    </Col>

                    <Col className="d-flex">
                        <Card
                            icon="./icons/services.png"
                            title="Serviços oferecidos"
                            description="Veja todos os serviços que oferecemos para ajudar você e sua família."
                            buttonText="Saiba mais"
                        />
                    </Col>

                    <Col className="d-flex">
                        <Card
                            icon="./icons/park.png"
                            title="Onde nos encontrar?"
                            description="Saiba onde estamos localizados e encontre a mais próxima de você."
                            buttonText="Saiba mais"
                        />
                    </Col>
                </Row>
            </div>
        </>
    );
}
