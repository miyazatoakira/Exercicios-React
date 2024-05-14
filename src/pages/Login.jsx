import React, { useState } from "react";
import Form from "../components/Form";
const Login = () => {

    const [values, setValues] = useState({ user: "", password: "" });
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [ToastColor, setToastColor] = useState("");

    const handleChange = (event) => {
        setValues({ ...values, [event.target.id]: event.target.value });
    }

    const handleSubmit = () => {
        console.log(values.user, values.password)
        if (values.user === "administrador" && values.password === "1234") {
            setToastMessage("Usuário válido ! Bem-vindo !");
            setToastColor("text-bg-success");
        }
        else {
            setToastMessage("Usuário Inválido");
            setToastColor("text-bg-danger");
        }
        setShowToast(true);
    }

    return (
        <div className="container">
            <div aria-live="polite" aria-atomic="true" className="d-flex justify-content-center align-items-center w-100">
                <div className={`toast align-items-center ${ToastColor} border-0 ${showToast ? "show" : ""}`}>
                    <div className="d-flex">
                        <div className="toast-body">
                            {toastMessage}
                        </div>
                        <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close" onClick={() => setShowToast(false)}></button>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center align-items-center text-center">
                <div className="col-6">
                    <h1 className="h1">Exercício Login - JS e React</h1>
                    <div className="line"></div>
                    <p></p>
                    <Form type="text" msg="Usuário" id="user" onChange={handleChange}  />
                    <Form type="password" msg="Senha" id="password" onChange={handleChange} />
                    <button className="btn btn-primary" onClick={handleSubmit}>Entrar</button>
                </div>
            </div>

            
        </div>
    );
};

export default Login;
