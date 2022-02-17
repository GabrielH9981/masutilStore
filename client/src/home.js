import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () =>{
  return (
    <div>
    
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Masutil Store</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
              <a class="nav-link" href="/products">Lista de Produtos</a>
              <a class="nav-link" href="/register">Cadastrar Produtos</a>
              <a class="nav-link disabled">Comming Soon</a>
            </div>
          </div>
        </div>
      </nav>

      {/* <h1>Página Inicial</h1>
      <nav>
        <ul>
          <li>
            <Link to="/products">Lista de Produtos</Link>
          </li>
          <li>
            <Link to="/register">Cadastro de Produtos</Link>
          </li>
        </ul>
      </nav> */}
    </div>
  );
}

export default Home;