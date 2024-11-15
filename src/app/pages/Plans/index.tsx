import { Link } from "react-router-dom";

import Table from "react-bootstrap/Table";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import PlansBackground from "@assets/plans-background.png";
import Basico from "@assets/basico.png";
import Master from "@assets/master.png";
import Plus from "@assets/plus.png";
import Cremax from "@assets/cremax.png";
import Premiun from "@assets/premiun.png";
import MiniCesta from "@assets/mini-cesta.png";

import "./styles.scss";

export function Plans() {
    return (
        <>
            <div className="plans-container mb-5">
                <Header />

                <img
                    src={PlansBackground}
                    alt="Planos fundo"
                    className="plans-background"
                />

                <h1 className="m-0 fw-600 page-title text-purple text-center">
                    Nossos planos funerários
                </h1>
            </div>

            <div className="px-5 mb-5">
                <div
                    className="rounded overflow-hidden border"
                    id="plans-table-container"
                >
                    <Table striped responsive borderless className="m-0">
                        <thead>
                            <tr className="text-center">
                                <th>Plano</th>
                                <th>Adesão</th>
                                <th>Mensalidade</th>
                                <th>Carência</th>
                                <th>Cobertura</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="text-center">
                                <td>Básico</td>
                                <td>Gratuita</td>
                                <td>R$ 38,00</td>
                                <td>90 dias</td>
                                <td>Contratante + 5 beneficiários</td>
                            </tr>

                            <tr className="text-center">
                                <td>Master</td>
                                <td>Gratuita</td>
                                <td>R$ 60,00</td>
                                <td>90 dias</td>
                                <td>Contratante + 14 beneficiários</td>
                            </tr>

                            <tr className="text-center">
                                <td>Plus</td>
                                <td>Gratuita</td>
                                <td>R$ 72,00</td>
                                <td>90 dias</td>
                                <td>Contratante + 9 beneficiários</td>
                            </tr>

                            <tr className="text-center">
                                <td>Cremax</td>
                                <td>Gratuita</td>
                                <td>R$ 74,00</td>
                                <td>12 meses</td>
                                <td>Contratante + 3 beneficiários</td>
                            </tr>

                            <tr className="text-center">
                                <td>Premiun</td>
                                <td>Gratuita</td>
                                <td>R$ 120,00</td>
                                <td>90 dias</td>
                                <td>Contratante + 9 beneficiários</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>

            <div className="text-center mb-4">
                <p className="m-0 fw-600">Conheça mais sobre...</p>

                <h3 className="m-0 text-purple fw-600">
                    Benefícios e valores de cada plano
                </h3>
            </div>

            <div className="d-flex flex-column gap-5 align-items-center mb-6">
                <Link to="https://wa.me/5585992578160" target="_blank">
                    <img src={Basico} alt="Plano básico" />
                </Link>

                <Link to="https://wa.me/5585992578160" target="_blank">
                    <img src={Master} alt="Plano master" />
                </Link>

                <Link to="https://wa.me/5585992578160" target="_blank">
                    <img src={Plus} alt="Plano plus" />
                </Link>

                <Link to="https://wa.me/5585992578160" target="_blank">
                    <img src={Cremax} alt="Plano cremax" />
                </Link>

                <Link to="https://wa.me/5585992578160" target="_blank">
                    <img src={Premiun} alt="Plano premiun" />
                </Link>
            </div>

            <img
                src={MiniCesta}
                className="w-100 mb-6"
                alt="Mini cesta de alimentos"
            />

            <Footer />
        </>
    );
}
