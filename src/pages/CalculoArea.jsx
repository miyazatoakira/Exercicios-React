/* 1 – Exibir um menu com as seguintes opções:
• A – Calcular área do quadrado
• B – Calcular área do triângulo
• C – Calcular área do círculo
• D – Calcular área do trapézio
• E – Calcular área do losango
Com base na opção selecionar você deverá solicitar os valores necessários para o
cálculo, armazenar, calcular e exibir o resultado. */

import React, {useState} from 'react';
import Form from '../components/Form';
import Trapezoid from '../assets/brand/trapezoid.svg'
import Diamond from '../assets/brand/diamond.svg'

const CalculoArea = () => {
    const [Quadrado, setQuadrado] = useState({ l1: '', l2: '' });
    const [Triangulo, setTriangulo] = useState({ base: '', h: '' });
    const [Circulo, setCirculo] = useState({r: ""});
    const [Trapezio, setTrapezio] = useState({ bM: '', bmenor: '', h: '' });
    const [Losango, setLosango] = useState({ dM: '', dmenor: '', ha: '' });

    const handleInputChange = (setState, field) => (event) => {
        setState(prevState => ({
            ...prevState,
            [field]: event.target.value
        }));
    };

    const handleInputChangeRaio = (event) =>{
        setCirculo(event.target.value);
    }


    const AreaQuadrado = () => {
        const lado1 = parseFloat(Quadrado.l1);
        const lado2 = parseFloat(Quadrado.l2);
    
        if (lado1 <= 0 || lado2 <= 0) {
            alert('Os lados do quadrado devem ser maiores que zero.');
            return;
        }
    
        if (lado1 !== lado2) {
            alert('Os lados do quadrado devem ter o mesmo comprimento.');
            return;
        }
    
        const area = lado1 * lado2;
        alert(`A área do quadrado é ${area}`);
    }
    
    const AreaTriangulo = () => {
        const base = parseFloat(Triangulo.base);
        const altura = parseFloat(Triangulo.h);
    
        if (base <= 0 || altura <= 0) {
            alert('Base e altura devem ser maiores que zero.');
            return;
        }
    
        const area = (base * altura) / 2;
        alert(`A área do triângulo é ${area}`);
    }
    
    const AreaCirculo = () => {
    const raio = parseFloat(Circulo);

    if (raio <= 0 || isNaN(raio)) {
        alert('O raio do círculo deve ser um número maior que zero.');
        return;
    }

    const area = Math.PI * Math.pow(raio, 2);
    alert(`A área do círculo é ${area}`);
}

const AreaTrapezio = () => {
    const baseMaior = parseFloat(Trapezio.bM);
    const baseMenor = parseFloat(Trapezio.bmenor);
    const altura = parseFloat(Trapezio.h);

    if (baseMaior <= 0 || baseMenor <= 0 || altura <= 0 || isNaN(baseMaior) || isNaN(baseMenor) || isNaN(altura)) {
        alert('As medidas do trapézio devem ser números maiores que zero.');
        return;
    }

    const area = ((baseMaior + baseMenor) * altura) / 2;
    alert(`A área do trapézio é ${area}`);
}

const AreaLosango = () => {
    const diagonalMaior = parseFloat(Losango.dM);
    const diagonalMenor = parseFloat(Losango.dmenor);
    const altura = parseFloat(Losango.ha);

    if (diagonalMaior <= 0 || diagonalMenor <= 0 || altura <= 0 || isNaN(diagonalMaior) || isNaN(diagonalMenor) || isNaN(altura)) {
        alert('As medidas do losango devem ser números maiores que zero.');
        return;
    }

    const area = (diagonalMaior * diagonalMenor) / 2;
    alert(`A área do losango é ${area}`);
}

    


    return (
        <div>
            <div className="container-fluid">
                <div className="row justify-content-center text-center">
                    <div className="col-8">
                        <h1 className="">Exercício 1 - Calculo Área</h1>
                        <div className="line"></div>
                        <p className='my-3'>Com base na opção selecionar você deverá solicitar os valores necessários para o
                            cálculo, armazenar, calcular e exibir o resultado.</p>
                        <div className="row justify-content-center text-center">
                            <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Calculo Área do Quadrado <i className="bi bi-square-fill"></i></h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <Form type="number" msg="Lado 1" id="l1" onChange={handleInputChange(setQuadrado, 'l1')} />
                                            <Form type="number" msg="Lado 2" id="l2" onChange={handleInputChange(setQuadrado, 'l2')} />
                                        </div>
                                        <div className="modal-footer">
                                            <button className="btn btn-primary text-center" onClick={AreaQuadrado}>Calcular</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">Calculo Área do Triângulo<i className="bi bi-triangle-fill ms-3"></i></h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <Form type="number" msg="Medida da Base" id="base" onChange={handleInputChange(setTriangulo, 'base')} />
                                            <Form type="number" msg="Medida da Altura" id="altura" onChange={handleInputChange(setTriangulo, 'h')} />
                                        </div>
                                        <div className="modal-footer">
                                            <button className="btn btn-primary" onClick={AreaTriangulo}>Calcular</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">Calculo Área do Circulo<i className="bi ms-3 bi-circle-fill"></i></h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <Form type="number" msg="Medida do Raio" id="raio" onChange={handleInputChangeRaio} />
                                        </div>
                                        <div className="modal-footer">
                                            <button className="btn btn-primary" onClick={AreaCirculo}>Calcular</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="exampleModalToggle4" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">Calculo Área do Trapézio<i className="bi me-3 bi-circle-fill"></i></h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <Form type="number" msg="Medida da Base Maior" id="baseMaior" onChange={handleInputChange(setTrapezio, 'bM')} />
                                            <Form type="number" msg="Medida da Base Menor" id="baseMenor" onChange={handleInputChange(setTrapezio, 'bmenor')} />
                                            <Form type="number" msg="Medida da Altura" id="altura" onChange={handleInputChange(setTrapezio, 'h')} />
                                        </div>
                                        <div className="modal-footer">
                                            <button className="btn btn-primary" onClick={AreaTrapezio}>Calcular</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="exampleModalToggle5" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">Calculo Área do Losango <i className="bi ms-3 bi-caret-left-fill"><i style={{ margin: "0 0 0 -4.6%" }} className="bi bi-caret-right-fill"></i></i></h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <Form type="number" msg="Medida da Diagonal Maior" id="diagonalMaior" onChange={handleInputChange(setLosango, 'dM')} />
                                            <Form type="number" msg="Medida da Diagonal Menor" id="diagonalMenor" onChange={handleInputChange(setLosango, 'dmenor')} />
                                            <Form type="number" msg="Medida da Altura" id="altura" onChange={handleInputChange(setLosango, 'ha')} />
                                        </div>
                                        <div className="modal-footer">
                                            <button className="btn btn-primary" onClick={AreaLosango}>Calcular</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-group">
                                <div className="card h-100">
                                    <i className="bi bi-square"></i>
                                    <div className="card-body">
                                        <h5 className="card-title">Calculo Área do Quadrado </h5>
                                        <p className="card-text"></p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-body-secondary"><button data-bs-target="#exampleModalToggle" data-bs-toggle="modal" className='btn btn-outline-primary stretched-link'>Área Quadrado</button></small>
                                    </div>
                                </div>
                           
                                <div className="card h-100">
                                <i className="bi bi-triangle ms-3"></i>
                                    <div className="card-body">
                                        <h5 className="card-title">Calculo Área do Triângulo</h5>
                                        <p className="card-text"></p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-body-secondary"><button data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" className='btn btn-outline-primary stretched-link'>Área triângulo</button></small>
                                    </div>
                                </div>
                
                                <div className="card h-100">
                                <i className="bi ms-3 bi-circle"></i>
                                    <div className="card-body">
                                        <h5 className="card-title">Calculo Área do Circulo</h5>
                                        <p className="card-text"></p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-body-secondary"><button data-bs-target="#exampleModalToggle3" data-bs-toggle="modal" className='btn btn-outline-primary stretched-link'>Área Circulo</button></small>
                                    </div>
                                </div>

                                <div className="card h-100">
                                    <div className="card-body">
                                        <img src={Trapezoid} className='bi mb-4' alt="" />
                                        <h5 className="card-title">Calculo Área do Trapezio</h5>
                                        <p className="card-text"></p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-body-secondary"><button data-bs-target="#exampleModalToggle4" data-bs-toggle="modal" className='btn btn-outline-primary stretched-link'>Área Trapézio</button></small>
                                    </div>
                                </div>

                                <div className="card h-100">
                                    <img src={Diamond} alt=""  />
                                    <div className="card-body">
                                        <h5 className="card-title">Calculo Área do Losango</h5>
                                        <p className="card-text"></p>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-body-secondary"><button data-bs-target="#exampleModalToggle5" data-bs-toggle="modal" className='btn btn-outline-primary stretched-link'>Área Losango</button></small>
                                    </div>
                                </div>
                            </div>                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CalculoArea