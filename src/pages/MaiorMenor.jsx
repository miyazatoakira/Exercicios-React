import React, { useState, useEffect } from 'react';
import Form from '../components/Form';

const MaiorMenor = () => {
    const [valores, setValores] = useState({ v1: '', v2: '', v3: '' });
    const [tooltips, setTooltips] = useState({ State1: '', State2: '', State3: '' });

    const handleChange = (event) => {
        setValores({ ...valores, [event.target.id]: event.target.value });
    }

    useEffect(() => {
        const valor1 = parseFloat(valores.v1);
        const valor2 = parseFloat(valores.v2);
        const valor3 = parseFloat(valores.v3);

        let maiorValor = valor1;
        let menorValor = valor1;
        let valorMedio = null;

        let State1 = '';
        let State2 = '';
        let State3 = '';

        if (valor2 > maiorValor) {
            maiorValor = valor2;
        } else if (valor2 < menorValor) {
            menorValor = valor2;
        }

        if (valor3 > maiorValor) {
            maiorValor = valor3;
        } else if (valor3 < menorValor) {
            menorValor = valor3;
        }

        if ((valor1 < maiorValor && valor1 > menorValor) || (valor1 > maiorValor && valor1 < menorValor)) {
            valorMedio = valor1;
        } else if ((valor2 < maiorValor && valor2 > menorValor) || (valor2 > maiorValor && valor2 < menorValor)) {
            valorMedio = valor2;
        } else if ((valor3 < maiorValor && valor3 > menorValor) || (valor3 > maiorValor && valor3 < menorValor)) {
            valorMedio = valor3;
        }

        State1 = `Maior Valor: ${maiorValor}`;
        State2 = `Médio Valor: ${valorMedio !== null ? valorMedio : 'Não há valor médio'}`;
        State3 = `Menor Valor: ${menorValor}`;

        setTooltips({ State1, State2, State3 });
    }, [valores]);

    return (
        <div className='container'>
            <div className="row justify-content-center align-items-center text-center">
                <div className="col-6">
                    <h2 className="h2 fw-bold mt-5">Exercício 3 - JS e React</h2>
                    <div className="line mt-1"></div>
                    <p>Faça um script que leia três números inteiros, em seguida mostre o maior, o menor e o valor entre eles.</p>
                    <Form type="number" msg="Número 1" id="v1" onChange={handleChange} />
                    <Form type="number" msg="Número 2" id="v2" onChange={handleChange} />
                    <Form type="number" msg="Número 3" id="v3" onChange={handleChange} />
                    <div className="card text-bg-primary mb-3">
                        <div className="card-header">Maior, Média e Menor valores</div>
                        <div className="card-body">
                            <p className="card-text">
                                {tooltips.State1}<br />
                                {tooltips.State2}<br />
                                {tooltips.State3}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MaiorMenor;