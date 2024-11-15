import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import { version } from "../../../version.ts";
import { FormattedInput } from "@/components/Formattedinput";

import Logo from "@assets/logo.png";
import LoginBackground from "@assets/login-background.png";

import "./styles.scss";

export function Login() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            identifier: "",
            password: "",
        },
        async onSubmit(values) {
            console.log(values);
            navigate("/gerenciamento");
        },
    });

    return (
        <div className="d-flex align-items-center justify-content-center h-100vh">
            <img
                src={LoginBackground}
                alt="Login background"
                className="login-background"
            />

            <div className="bg-white card-shadow d-flex flex-column gap-3 login-content p-5 rounded">
                <div className="text-center">
                    <img src={Logo} alt="Logo Bom jardim" />
                </div>

                <h4 className="text-center">Login</h4>

                <form onSubmit={formik.handleSubmit}>
                    <div className="d-flex flex-column gap-4">
                        <FormattedInput
                            placeholder="000.000.000-00"
                            label="CPF"
                            isMaskedInput
                            mask="000.000.000-00"
                            {...formik.getFieldProps("identifier")}
                        />

                        <FormattedInput
                            placeholder="● ● ● ● ● ● ● ●"
                            label="Senha"
                            type="password"
                            {...formik.getFieldProps("password")}
                        />

                        <div className="px-5">
                            <button
                                type="submit"
                                className="btn btn-bg-ocean-blue-text-light w-100"
                            >
                                Entrar
                            </button>
                        </div>
                    </div>
                </form>

                <div className="text-center">
                    <span className="fw-bold">VERSÃO {version}</span>
                </div>
            </div>
        </div>
    );
}
