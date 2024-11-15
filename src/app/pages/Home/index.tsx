import { useState } from "react";

import { isMobile } from "react-device-detect";
import { useNavigate } from "react-router-dom";
import classNames from "clsx";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { addresses } from "@/utils/addresses";

import { Card } from "@/components/Card";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Gallery } from "@/components/Gallery";
import { BenefitCard } from "@/components/BenefitCard";
import { ServicesCard } from "@/components/ServicesCard";
import { FormattedInput } from "@/components/Formattedinput";

import Office from "@assets/office.png";
import BomjardimBackground from "@assets/bom-jardim-background.png";
import FuneralPlan from "@assets/funeral-plan.png";
import MobileBackground from "@assets/mobile-background.png";
import Background from "@assets/background.png";
import IconBomJardim from "@assets/icons/bom-jardim.png";
import IconHandHeart from "@assets/icons/hand-heart.png";
import IconServices from "@assets/icons/services.png";
import IconPark from "@assets/icons/park.png";
import Icon24HrAssistence from "@assets/icons/24-hr-assistence.png";
import IconCompleteFuneral from "@assets/icons/complete-funeral.png";
import IconFuneralRooms from "@assets/icons/funeral-rooms.png";
import IconSeriousnessAndEmpathy from "@assets/icons/seriousness-and-empathy.png";
import IconSpecialPrices from "@assets/icons/special-prices.png";
import IconFarAway from "@assets/icons/far-away.png";
import Floricultura from "@assets/floricultura.png";

import "./styles.scss";

export function Home() {
    const [seeAllAddress, setSeeAllAddress] = useState(false);
    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    const limitedAddresses = seeAllAddress ? addresses : addresses.slice(0, 8);

    const backgroundContainerStyle = {
        backgroundImage: `url(${isMobile ? MobileBackground : Background})`,
    };

    return (
        <>
            <div
                className={classNames("background", { "mb-5": !isMobile })}
                style={backgroundContainerStyle}
            >
                <Header />

                <div className="h-100 d-flex flex-column align-items-start mt-8-5rem ps-5">
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

                    <Button
                        className="btn-bg-purple-text-light px-5 py-2"
                        onClick={() => navigate("/velorio-online")}
                    >
                        Saiba mais
                    </Button>
                </div>
            </div>

            <div className="px-5">
                <Row className={classNames({ "gap-4": isMobile })}>
                    <Col className="d-flex" lg={3} sm={12}>
                        <Card
                            icon={IconBomJardim}
                            title="Nossos serviçoes"
                            description="Conheça a trajetória da nossa funerária e nossos serviços e valores"
                            buttonText="Saiba mais"
                        />
                    </Col>

                    <Col className="d-flex" lg={3} sm={12}>
                        <Card
                            icon={IconHandHeart}
                            title="Confira nossos planos"
                            description="Descubra o plano que melhor atende às suas necessidades e da sua família"
                            buttonText="Saiba mais"
                        />
                    </Col>

                    <Col className="d-flex" lg={3} sm={12}>
                        <Card
                            icon={IconServices}
                            title="Serviços oferecidos"
                            description="Veja todos os serviços que oferecemos para ajudar você e sua família."
                            buttonText="Saiba mais"
                        />
                    </Col>

                    <Col className="d-flex" lg={3} sm={12}>
                        <Card
                            icon={IconPark}
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
                        src={Office}
                        alt="Bom jardim office"
                        className="w-31rem"
                    />

                    <div className="text-start w-31rem">
                        <h3>Missão de cuidado</h3>

                        <p>
                            A Funerária Bom Jardim nasceu com a missão de cuidar
                            das famílias no momento mais difícil: a despedida
                            final. Estamos presentes para oferecer assistência
                            completa e assegurar que nossos serviços sejam
                            prestados com excelência. Somos a melhor assistência
                            funerária da região, oferecendo planos acessíveis
                            para todos os públicos. Entendemos que, nos momentos
                            de luto, o que você mais deseja é acolhimento e
                            suporte. Aqui, na Bom Jardim, garantimos isso para
                            você e sua família, proporcionando tranquilidade e
                            paz.
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
                            description="Profissionais à sua disposição, prontos para atender integralmente a qualquer hora."
                            icon={Icon24HrAssistence}
                        />
                    </Col>

                    <Col className="mb-4" lg={4} sm={12}>
                        <BenefitCard
                            title="Velório completo"
                            description="Seu ente querido receberá uma despedida digna, conduzida com todo cuidado e amor."
                            icon={IconCompleteFuneral}
                        />
                    </Col>

                    <Col className="mb-4" lg={4} sm={12}>
                        <BenefitCard
                            title="Salas de velório"
                            description="Ambiente físico confortável e acolhedor para a sua família, amigos e parentes."
                            icon={IconFuneralRooms}
                        />
                    </Col>

                    <Col className="mb-4" lg={4} sm={12}>
                        <BenefitCard
                            title="Seriedade e empatia"
                            description="Estamos ao seu lado neste momento de dor, oferecendo cuidado e um ombro amigo."
                            icon={IconSeriousnessAndEmpathy}
                        />
                    </Col>

                    <Col className="mb-4" lg={4} sm={12}>
                        <BenefitCard
                            title="Preços especiais"
                            description="Condições acessíveis e variadas, com serviços inclusos para atender suas necessidades."
                            icon={IconSpecialPrices}
                        />
                    </Col>

                    <Col className="mb-4" lg={4} sm={12}>
                        <BenefitCard
                            title="Translado até 400km"
                            description="Serviço de transporte ágil e profissional, garantindo segurança e respeito."
                            icon={IconFarAway}
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
                            icon={Floricultura}
                        />
                    </Col>
                </Row>
            </div>

            <div className="position-relative pt-6 mb-6">
                <img
                    src={BomjardimBackground}
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
                        onChange={(event) => setSearch(event.target.value)}
                    />
                </div>

                <Row className="m-0 px-5">
                    {limitedAddresses.map((address) => (
                        <Col lg={3} className="mb-4 d-flex">
                            <ServicesCard
                                isMap
                                title={address.title}
                                description={address.description}
                                phoneNumber={address.phoneNumber}
                            />
                        </Col>
                    ))}
                </Row>

                <div className="text-center mt-4">
                    <button
                        className="btn btn-bg-purple-text-light px-5"
                        onClick={() => setSeeAllAddress(!seeAllAddress)}
                    >
                        {seeAllAddress ? "Ver menos" : "Ver todos"}
                    </button>
                </div>
            </div>

            <div className="px-5 mb-5">
                <img
                    src={FuneralPlan}
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
