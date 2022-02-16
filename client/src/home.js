import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>{
  return (
    <div>
      <h1>Página Inicial</h1>
      <nav>
        <ul>
          <li>
            <Link to="/products">Lista de Produtos</Link>
          </li>
          <li>
            <Link to="/register">Cadastro de Produtos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;