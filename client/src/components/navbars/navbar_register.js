import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar_Register() {

    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#" style={{color: "blue"}}>Masutil Store</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                    <a class="nav-link" href="/">Home</a>
                    <a class="nav-link" href="/products">Lista de Produtos</a>
                    <a class="nav-link active" aria-current="page" href="#">Cadastrar Produtos</a>
                    <a class="nav-link disabled">Comming Soon</a>
                    </div>
                </div>
            </div>
        </nav>
      </div>
    );
  }
  
  export default Navbar_Register;