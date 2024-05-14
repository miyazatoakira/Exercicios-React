import React, { useState, useEffect } from 'react';
import Form from '../components/Form';

const MaiorMenor = () => {
    const [valores, setValores] = useState({ v1: '', v2: '', v3: ''});
    const [tooltips, setTooltips] = useState({ State1: 'Maior Valor', State2: '', State3: 'Menor Valor' });

    const handleChange = (event) => {
        setValores({ ...valores, [event.target.id]: event.target.value });
    }

    useEffect(() => {
        const valor1 = parseFloat(valores.v1);
        const valor2 = parseFloat(valores.v2);
        const valor3 = parseFloat(valores.v3);

        let maiorValor = valor1;
        let menorValor = valor1;

        let State1 = 'Maior Valor';
        let State2 = 'Média';
        let State3 = 'Menor Valor';

        if (valor2 > maiorValor) {
            maiorValor = valor2;
            State1 = '';
            State2 = 'Maior Valor';
        }if (valor2 < menorValor) {
            menorValor = valor2;
            State3 = '';
            State2 = 'Menor Valor';
        }

        if (valor3 > maiorValor) {
            maiorValor = valor3;
            State1 = '';
            State2 = '';
            State3 = 'Maior Valor';
        } if (valor3 < menorValor) {
            menorValor = valor3;
            State3 = 'Menor Valor';
        }

        setTooltips({ State1, State2, State3 });
    }, [valores]);

    return (
        <div className='container'>
            <div className="row justify-content-center align-items-center text-center">
                <div className="col-6">
                    <h2 className="h2 fw-bold mt-5">Exercício 3 - JS e React</h2>
                    <div className="line mt-1"></div>
                    <p>Faça um script que leia três números inteiros, em seguida mostre o maior e o menor deles.</p>
                    <Form type="number" msg="Número 1" id="v1" onChange={handleChange} />
                    <Form type="number" msg="Número 2" id="v2" onChange={handleChange} />
                    <Form type="number" msg="Número 3" id="v3" onChange={handleChange} />
                    <div className="card text-bg-primary mb-3">
                        <div className="card-header">Maior, Média e Menor valores</div>
                        <div className="card-body">
                            <p className="card-text">
                                Input 1: {tooltips.State1}<br></br>
                                Input 2: {tooltips.State2}<br></br>
                                Input 3: {tooltips.State3}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MaiorMenor;