import { isMobile } from "react-device-detect";
import classNames from "clsx";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { BenefitCard } from "@/components/BenefitCard";
import { ServicesCard } from "@/components/ServicesCard";
import { FormattedInput } from "@/components/Formattedinput";

import "./styles.scss";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";

export function Home() {
    const backgroundContainerStyle = {
        backgroundImage: `url(${
            isMobile ? "./mobile-background.png" : "./background.png"
        })`,
    };

    return (
        <>
            <div
                className={classNames("background", { "mb-5": !isMobile })}
                style={backgroundContainerStyle}
            >
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
                <Row className={classNames({ "gap-4": isMobile })}>
                    <Col className="d-flex" lg={3} sm={12}>
                        <Card
                            icon="./icons/bom-jardim.png"
                            title="Nossos serviçoes"
                            description="Conheça a trajetória da nossa funerária e nossos serviços e valores"
                            buttonText="Saiba mais"
                        />
                    </Col>

                    <Col className="d-flex" lg={3} sm={12}>
                        <Card
                            icon="./icons/hand-heart.png"
                            title="Confira nossos planos"
                            description="Descubra o plano que melhor atende às suas necessidades e da sua família"
                            buttonText="Saiba mais"
                        />
                    </Col>

                    <Col className="d-flex" lg={3} sm={12}>
                        <Card
                            icon="./icons/services.png"
                            title="Serviços oferecidos"
                            description="Veja todos os serviços que oferecemos para ajudar você e sua família."
                            buttonText="Saiba mais"
                        />
                    </Col>

                    <Col className="d-flex" lg={3} sm={12}>
                        <Card
                            icon="./icons/park.png"
                            title="Onde nos encontrar?"
                            description="Saiba onde estamos localizados e encontre a mais próxima de você."
                            buttonText="Saiba mais"
                        />
                    </Col>
                </Row>
            </div>

            <div className="my-5 text-center">
                <p className="fw-600 m-0">Conheça mais sobre...</p>

                <h3 className="text-purple mb-4 fw-bold">
                    Nossa história e propósito
                </h3>

                <div className="d-flex align-items-center justify-content-evenly px-5">
                    <img
                        src="./test.png"
                        alt="Bom jardim office"
                        className="w-35rem"
                    />

                    <div className="text-start w-35rem">
                        <h3>Lorem ipsum</h3>

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Aliquam lectus nisi, consequat sit amet mauris
                            vitae, malesuada finibus augue. Donec imperdiet nunc
                            nisi, nec feugiat ipsum sollicitudin non. Nulla in
                            faucibus sapien, sed sodales nibh. In et vestibulum
                            metus. Vivamus mollis massa a pretium suscipit.
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Aliquam lectus nisi, consequat sit amet mauris
                            vitae, malesuada finibus augue. Donec imperdiet nunc
                            nisi, nec feugiat ipsum sollicitudin non. Nulla in
                            faucibus sapien, sed sodales nibh. In et vestibulum
                            metus. Vivamus mollis massa a pretium suscipit.
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Aliquam lectus nisi, consequat sit amet mauris
                            vitae, malesuada finibus augue. Donec imperdiet nunc
                            nisi, nec feugiat ipsum sollicitudin non. Nulla in
                            faucibus sapien, sed sodales nibh. In et vestibulum
                            metus. Vivamus mollis massa a pretium suscipit.
                            Lorem ipsum dolor sit amet, consectetur adipiscing.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-light-gray px-5 py-4 text-center mb-5">
                <div className="mb-5">
                    <h3 className="m-0 text-purple fw-bold">
                        Nossos benefícios e valores
                    </h3>

                    <p className="m-0 fw-500">
                        Prezamos pelo cuidado e respeito em todos os nossos
                        serviços.
                    </p>
                </div>

                <Row>
                    <Col className="mb-4" lg={4} sm={12}>
                        <BenefitCard
                            title="Assistência 24 horas"
                            description="Lorem ipsum  dolor sit amet, consectetur adipiscing elit. Aliquam lectus"
                            icon="./icons/24-hr-assistence.png"
                        />
                    </Col>

                    <Col className="mb-4" lg={4} sm={12}>
                        <BenefitCard
                            title="Velório completo"
                            description="Lorem ipsum  dolor sit amet, consectetur adipiscing elit. Aliquam lectus"
                            icon="./icons/complete-funeral.png"
                        />
                    </Col>

                    <Col className="mb-4" lg={4} sm={12}>
                        <BenefitCard
                            title="Salas de velório"
                            description="Lorem ipsum  dolor sit amet, consectetur adipiscing elit. Aliquam lectus"
                            icon="./icons/funeral-rooms.png"
                        />
                    </Col>

                    <Col className="mb-4" lg={4} sm={12}>
                        <BenefitCard
                            title="Seriedade e empatia"
                            description="Lorem ipsum  dolor sit amet, consectetur adipiscing elit. Aliquam lectus"
                            icon="./icons/seriousness-and-empathy.png"
                        />
                    </Col>

                    <Col className="mb-4" lg={4} sm={12}>
                        <BenefitCard
                            title="Preços especiais"
                            description="Lorem ipsum  dolor sit amet, consectetur adipiscing elit. Aliquam lectus"
                            icon="./icons/special-prices.png"
                        />
                    </Col>

                    <Col className="mb-4" lg={4} sm={12}>
                        <BenefitCard
                            title="Translado até 400km"
                            description="Lorem ipsum  dolor sit amet, consectetur adipiscing elit. Aliquam lectus"
                            icon="./icons/far-away.png"
                        />
                    </Col>
                </Row>
            </div>

            <div className="text-center px-5 mb-5">
                <div className="mb-5">
                    <h3 className="text-purple fw-bold">Nossos serviços</h3>
                </div>

                <Row className="m-0">
                    <Col lg={3}>
                        <ServicesCard
                            title="Floricultura"
                            description="Lorem Ipsum"
                            icon="./floricultura.png"
                        />
                    </Col>
                </Row>
            </div>

            <div className="position-relative pt-6 mb-6">
                <img
                    src="./bom-jardim-background.png"
                    alt="Fundo logo Bom Jardim"
                    className="w-100 position-absolute top-0 z-index-negative"
                />

                <div className="text-center mb-6">
                    <h3 className="text-purple m-0 fw-bold">
                        Descubra onde estamos localizados na sua cidade
                    </h3>

                    <p className="m-0 fw-500">
                        A funerária Bom Jardim está em diversos munícipios do
                        Ceará, confira se já chegamos no seu
                    </p>
                </div>

                <div className="mx-auto mb-6 px-5">
                    <FormattedInput
                        type="search"
                        placeholder="Busque pelo nome da sua cidade"
                    />
                </div>

                <Row className="m-0 px-5">
                    <Col lg={3} className="mb-4">
                        <ServicesCard
                            title="Floricultura"
                            description="Lorem Ipsum"
                            icon="./floricultura.png"
                        />
                    </Col>

                    <Col lg={3} className="mb-4">
                        <ServicesCard
                            title="Floricultura"
                            description="Lorem Ipsum"
                            icon="./floricultura.png"
                        />
                    </Col>

                    <Col lg={3} className="mb-4">
                        <ServicesCard
                            title="Floricultura"
                            description="Lorem Ipsum"
                            icon="./floricultura.png"
                        />
                    </Col>

                    <Col lg={3} className="mb-4">
                        <ServicesCard
                            title="Floricultura"
                            description="Lorem Ipsum"
                            icon="./floricultura.png"
                        />
                    </Col>

                    <Col lg={3}>
                        <ServicesCard
                            title="Floricultura"
                            description="Lorem Ipsum"
                            icon="./floricultura.png"
                        />
                    </Col>

                    <Col lg={3}>
                        <ServicesCard
                            title="Floricultura"
                            description="Lorem Ipsum"
                            icon="./floricultura.png"
                        />
                    </Col>

                    <Col lg={3}>
                        <ServicesCard
                            title="Floricultura"
                            description="Lorem Ipsum"
                            icon="./floricultura.png"
                        />
                    </Col>

                    <Col lg={3}>
                        <ServicesCard
                            title="Floricultura"
                            description="Lorem Ipsum"
                            icon="./floricultura.png"
                        />
                    </Col>
                </Row>

                <div className="text-center mt-4">
                    <button className="btn btn-bg-purple-text-light px-5">
                        Ver todos
                    </button>
                </div>
            </div>

            <div className="px-5 mb-5">
                <img
                    src="./funeral-plan.png"
                    alt="Plano funerário"
                    className="w-100 rounded"
                />
            </div>

            <div className="px-5 mb-8">
                <div className="mb-5 text-center">
                    <h3 className="m-0 text-purple fw-bold">
                        Nossa galeria de fotos e vídeos
                    </h3>
                </div>

                <Gallery />
            </div>

            <Footer />
        </>
    );
}
