import React, { useState, useRef } from 'react';
import Form from '../components/Form';

const Criminoso = () => {
    const [YesCount, setYesCount] = useState(.0);
    const [Name, setName] = useState("");
    const [Situacao, setSituacao] = useState("");
    const [TxtColor, setTxtColor] = useState("");
    const [records, setRecords] = useState([]);

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleYesClick = () => {
        setYesCount(YesCount + 1);
    }

    const handleResetClick = () => {
        setYesCount(0);
        setName("");
        setSituacao("");
        setTxtColor("");
    }

    const handleSubmit = () => {
        if (YesCount === 2) {
            setSituacao("Suspeito");
            setTxtColor("text-warning")
        }
        else if (YesCount >= 3 && YesCount <= 4) {
            setSituacao("Cúmplice");
            setTxtColor("text-warning-subtle")
        }
        else if (YesCount === 5) {
            setSituacao("Assassino");
            setTxtColor("text-danger")
        }
        else if (YesCount <= 1) {
            setSituacao("Inocente");
            setTxtColor("text-success");
        }
    }

    const handleButtonClick = () => {
        setRecords([...records, { name: Name, situation: Situacao, color: TxtColor }]);
        setName("");
        setYesCount(0);
        setSituacao("");
        setTxtColor("");
    }

    const handleRemoveClick = (indexToRemove) => {
        setRecords(records.filter((_, index) => index !== indexToRemove));
    }

    return (
        <div className="container-fluid">
            <div className="row justify-content-center text-center">
                <div className="col-7">
                    <h1 className="h1">Exercício 4 - Criminoso</h1>
                    <div className="line mb-3"></div>
                    <p className='exercicio-txt mt-3'>Faça um script que faça 5 perguntas para uma pessoa sobre um crime.<br>
                    </br> O script deve no final emitir uma classificação sobre a participação da pessoa no
                        crime. Se a pessoa responder positivamente a 2 questões ela deve ser classificada
                        como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário,
                        ele será classificado como "Inocente".</p>
                    <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar" style={{ width: "0%" }}></div>
                        </div>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Pergunta - 1</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleResetClick}></button>
                                </div>
                                <div className="modal-body">
                                    {Name}, você telefonou para a vítima?
                                </div>
                                <div className="modal-footer justify-content-center">
                                    <button className="btn btn-success me-5" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" onClick={handleYesClick} >SIM</button>
                                    <button className="btn btn-danger ms-5" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" >NÃO</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar" style={{ width: "25%" }}></div>
                        </div>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">Pergunta 2</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleResetClick}></button>
                                </div>
                                <div className="modal-body">
                                    {Name}, você esteve no local do crime?
                                </div>
                                <div className="modal-footer justify-content-center">
                                    <button className="btn btn-success me-5" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal" onClick={handleYesClick} >SIM</button>
                                    <button className="btn btn-danger ms-5" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal" >NÃO</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar" style={{ width: "50%" }}></div>
                        </div>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">Pergunta 3</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleResetClick}></button>
                                </div>
                                <div className="modal-body">
                                    {Name}, você mora perto da vítima?
                                </div>
                                <div className="modal-footer justify-content-center">
                                    <button className="btn btn-success me-5" data-bs-target="#exampleModalToggle4" data-bs-toggle="modal" onClick={handleYesClick} >SIM</button>
                                    <button className="btn btn-danger ms-5" data-bs-target="#exampleModalToggle4" data-bs-toggle="modal" >NÃO</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="exampleModalToggle4" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar" style={{ width: "75%" }}></div>
                        </div>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">Pergunta 4</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleResetClick}></button>
                                </div>
                                <div className="modal-body">
                                    {Name}, você devia para a vítima?
                                </div>
                                <div className="modal-footer justify-content-center">
                                    <button className="btn btn-success me-5" data-bs-target="#exampleModalToggle5" data-bs-toggle="modal" onClick={handleYesClick} >SIM</button>
                                    <button className="btn btn-danger ms-5" data-bs-target="#exampleModalToggle5" data-bs-toggle="modal" >NÃO</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="exampleModalToggle5" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar" style={{ width: "100%" }}></div>
                        </div>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">Pergunta 5</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleResetClick}></button>
                                </div>
                                <div className="modal-body">
                                    {Name}, você já trabalhou com a vítima?
                                </div>
                                <div className="modal-footer justify-content-center">
                                    <button className="btn btn-success me-5" data-bs-target="#exampleModalToggle6" data-bs-toggle="modal" onClick={handleYesClick} >SIM</button>
                                    <button className="btn btn-danger ms-5" data-bs-target="#exampleModalToggle6" data-bs-toggle="modal" >NÃO</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade modal-dialog-scrollable" id="exampleModalToggle6" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar" style={{ width: "100%" }}></div>
                        </div>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header fw-bold">
                                    <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">DESEJA FINALIZAR AS PERGUNTAS ?</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleResetClick}></button>
                                </div>
                                <div className="modal-footer justify-content-center">
                                    <button className="btn btn-warning me-5" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" onClick={handleResetClick} >REDEFINIR</button>
                                    <button className="btn btn-success ms-5" data-bs-target="#exampleModalToggle7" data-bs-toggle="modal" onClick={handleSubmit} >FINALIZAR</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade modal-dialog-scrollable" id="exampleModalToggle7" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                        </div>
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">Nome: <em className='name'>{Name}</em></h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleResetClick} ></button>
                                </div>
                                <div className="modal-body">
                                    Situação: <em className={TxtColor}>{Situacao}</em>
                                </div>
                                <div className="modal-footer justify-content-center">
                                    <button className="btn btn-warning me-5" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" onClick={handleResetClick} >REFAZER</button>
                                    <button className="btn btn-success ms-5" data-bs-dismiss="modal" aria-label="Close" onClick={handleButtonClick} >ADICIONAR</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Form id="name" type="text" msg="Nome Completo" onChange={handleChange} required />
                    <button className="btn btn-primary me-5" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" >Acessar as Perguntas</button>
                    <button className="btn btn-success" data-bs-target="#tableModal" data-bs-toggle="modal" >Acessar Tabela Investigados</button>
                    <div className="modal fade" id="tableModal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">Tabela Situação Investigados</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleResetClick}></button>
                                </div>
                                <div className="modal-body">
                                <table class="table mt-5">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">NOME</th>
                                    <th scope="col">SITUAÇÃO</th>
                                </tr>
                            </thead>
                            <tbody>
                                {records.map((record, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td><em className='name'>{record.name}</em></td>
                                        <td><em className={record.color}>{record.situation}</em></td>
                                        <button className='bi bi-trash3-fill text-danger' onClick={() => handleRemoveClick(index)}></button>
                                    </tr>
                                ))}
                            </tbody>

                    </table>
                                </div>
                                <div className="modal-footer justify-content-center">
                                    <button className="btn btn-success me-5" data-bs-target="#exampleModalToggle5" data-bs-toggle="modal" onClick={handleYesClick} >SIM</button>
                                    <button className="btn btn-danger ms-5" data-bs-target="#exampleModalToggle5" data-bs-toggle="modal" >NÃO</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Criminoso;