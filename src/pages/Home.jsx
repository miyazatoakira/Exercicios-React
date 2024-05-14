import React from 'react';
import logo from '../logo.svg';
import viteLogo from '../vite.svg';

const Home = () => {
  return (
    <div className='Home container-fluid'>
      <div className="row justify-content-start align-items-center">
        <div className="col-7 d-flex justify-content-center">
          <header className="App-header">
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <span className='fs-1 fw-bold ms-5 mt-5'>+</span>
            <a href="https://react.dev" target="_blank">
              <img src={logo} className="logo react" alt="React logo" />
            </a>
            <h1 className='App-title text-center'>Vite + React</h1>
            <p className="App-link text-center">USO DE LIBRARIES COMO VITE E REACTJS</p>
        
          </header>
        </div>
        <div className="col-5">
          <header className="App-header">
            <div>
              <h2 className='Home-title text-end' >EXERCÍCIOS JAVASCRIPT</h2>
              <p className='text-end'>Exercícios contendo lógica de Programação da Estrutura IF ELSE em Javascript.</p>
              <div className="mt-5">
                <p className='App-link text-end'>EXERCÍCIO 1 - CALCULO ÁREA</p>
                <p className='App-link text-end'>EXERCÍCIO 2 - LOGIN ADMINISTRADOR</p>
                <p className='App-link text-end'>EXERCÍCIO 3 - MAIOR E MENOR VALOR</p>
                <p className='App-link text-end'>EXERCÍCIO 4 - CRIMINOSO</p>
              </div>   
            </div>
          </header>
        </div>

      </div>

    </div>

  )
}

export default Home